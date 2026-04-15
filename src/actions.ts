"use server";

import {getLocale, getTranslations} from "next-intl/server";
import {getFormSchema} from "@/lib/schema";
import {z} from "zod";
import {redirect} from "@/i18n/navigation";
import {cookies} from "next/headers";

export type FormState = {
    message: string;
    errors?: {
        name?: string[];
        email?: string[];
        subject?: string[];
        message?: string[];
    };
    data?: FormData
    submissionId?: number
}

export async function submitForm(prevState: FormState, formData: FormData):Promise<FormState> {
    const honeypot = formData.get("company");

    if (honeypot) {
        // Bot detected — silently ignore
        console.log("BOT DETECTED")
        return {
            message: ""
        };
    }

    const t = await getTranslations('Contact');
    const locale = await getLocale();

    const formSchema = getFormSchema(t);
    const validatedFields = formSchema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message"),
    });

    if (!validatedFields.success) {
        return {
            message: "",
            errors: z.flattenError(validatedFields.error).fieldErrors,
            data: formData,
        };
    }

    try {
        const response = await fetch(process.env.SLACK_WEBHOOK_URL!, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(
                {
                    "blocks": [
                        {
                            "type": "header",
                            "text": {
                                "type": "plain_text",
                                "text": `${t("form.submissionHeader")}`
                            }
                        },
                        {
                            "type": "section",
                            "fields": [
                                {
                                    "type": "mrkdwn",
                                    "text": `*${t("form.name.title")}*: ${validatedFields.data.name}`
                                }
                            ]
                        },
                        {
                            "type": "section",
                            "fields": [
                                {
                                    "type": "mrkdwn",
                                    "text": `*${t("form.email.title")}*: ${validatedFields.data.email}`
                                }
                            ]
                        },
                        {
                            "type": "section",
                            "fields": [
                                {
                                    "type": "mrkdwn",
                                    "text": `*${t("form.subject.title")}*: ${validatedFields.data.subject}`
                                }
                            ]
                        },
                        {
                            "type": "section",
                            "text": {
                                "type": "mrkdwn",
                                "text": `*${t("form.message.title")}*: ${validatedFields.data.message}`
                            }
                        }
                    ]
                }
            ),
        });

        if (!response.ok) {
            return {
                message: "ERROR",
                data: formData,
                submissionId: Date.now()
            }
        }
    } catch (error) {
        console.error(error);
        return {
            message: "ERROR",
            data: formData,
            submissionId: Date.now()
        };
    }

    // Redirect to confirmation page
    // The confirmation page is only accessible through redirect from the contact page

    //set cookies to allow access to confirmation page
    const cookieStore = await cookies()
    cookieStore.set({
        name: "form-submitted",
        value: "true",
        path: "/",
        maxAge: 60,
        httpOnly: true
    });

    return redirect({href: "/confirmation", locale: locale})
}