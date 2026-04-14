import {z} from "zod";

export function getFormSchema(t: (key: string) => string) {
    const required = {error: t("form.validationErrors.required")}

    return z.object({
        name: z.string(required)
            .trim()
            .refine((val) => val.length > 0, required)
            .min(3, {error: t("form.validationErrors.name")}),

        email: z.string(required)
            .trim()
            .refine((val) => val.length > 0, required)
            .pipe(z.email({
                pattern: z.regexes.rfc5322Email,
                error: t("form.validationErrors.email")
            })),

        subject: z.string(required)
            .trim()
            .refine((val) => val.length > 0, required)
            .min(5, {error: t("form.validationErrors.subject")}),

        message: z.string(required)
            .trim()
            .refine((val) => val.length > 0, required)
            .min(15, {error: t("form.validationErrors.message")})
    });
}