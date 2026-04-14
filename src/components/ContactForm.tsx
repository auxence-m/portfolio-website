"use client";

import {useTranslations} from "next-intl";
import {CircleAlert, LoaderCircle, MailIcon, MapPinIcon, MoveRight} from "lucide-react";
import {Button, Field, Input, Label, Textarea} from "@headlessui/react";
import {socialMedias} from "@/lib/utils";
import Image from "next/image";
import {FormState, submitForm} from "@/actions";
import {useActionState} from "react";

const prevState: FormState = {
    message: "",
    errors: {},
    submissionId: Date.now(),
}

export default function ContactForm() {
    const t = useTranslations("Contact");

    const [state, submitAction, pending] = useActionState(submitForm, prevState)


    return (
        <section id="contact-form" className="pb-30 px-6 bg-surface-dim">
            <div className="max-w-7xl w-full mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden rounded-2xl border border-outline-variant/50">
                    {/* LEFT: DIRECT CONTACT INFO */}
                    <div className="lg:col-span-5 bg-surface-container/80 p-8 lg:p-16 border-b lg:border-b-0 lg:border-r border-outline-variant/20">
                        <div className="flex flex-col gap-y-16">
                            {/* MAIL AND LOCATION */}
                            <div className="flex flex-col gap-y-6">
                                <p className="text-on-surface-variant uppercase tracking-widest text-xs">
                                    {t("email")}
                                </p>
                                <div className="group flex items-center gap-4">
                                    <MailIcon size={25} strokeWidth={2} className="text-primary group-hover:scale-105 transition-transform duration-500"/>
                                    <a href="mailto:auxencemedja@gmail.com" className="relative text-xl text-on-surface group-hover:text-primary transition-colors duration-500">
                                        auxencemedja@gmail.com
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full"/>
                                    </a>
                                </div>
                            </div>
                            <div className="flex flex-col gap-y-6">
                                <p className="text-on-surface-variant uppercase tracking-widest text-xs">
                                    {t("location.title")}
                                </p>
                                <div className="group flex items-center gap-4">
                                    <MapPinIcon size={25} strokeWidth={2} className="text-primary group-hover:scale-105 transition-transform duration-500"/>
                                    <p className="text-xl text-on-surface group-hover:text-primary transition-colors duration-500">
                                        {t("location.subtext")}
                                    </p>
                                </div>
                            </div>
                            {/* SOCIAL MEDIA LINKS */}
                            <div className="pt-8 border-t border-outline-variant/20">
                                <p className="text-on-surface-variant uppercase tracking-widest mb-8 text-xs">
                                    {t("socials")}
                                </p>
                                <div className="flex flex-col gap-y-8">
                                    {
                                        socialMedias.map((social) => (
                                            <div key={social.name} className="group flex items-center gap-4">
                                                <Image alt={social.alt} src={social.logo} width={128} height={128} className="size-6 group-hover:scale-105 transition-transform duration-500"/>
                                                <a target="_blank" rel="noopener noreferrer" href={social.href} className="relative text-xl text-on-surface group-hover:text-primary transition-colors duration-500">
                                                    {social.name} - {social.alias}
                                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full"/>
                                                </a>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* RIGHT: CONTACT FORM */}
                    <div className="lg:col-span-7 bg-surface-container-low/80 p-8 lg:p-16">
                        <form action={submitAction} className="flex flex-col gap-y-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <Field className="flex flex-col gap-y-3">
                                    <Label htmlFor="name" className="text-on-surface-variant uppercase tracking-widest text-xs">{t("form.name.title")}</Label>
                                    <Input required
                                           autoComplete="name"
                                           id="name"
                                           name="name"
                                           type="text"
                                           placeholder={t("form.name.placeholder")}
                                           defaultValue={state.data?.get("name")?.toString() || ""}
                                           className="w-full bg-surface-container-high/30 text-on-surface border border-outline-variant/30 rounded-xl px-7 py-5 focus:bg-surface-container-high/50 focus:outline-2 focus:-outline-offset-2 focus:outline-primary/80"/>
                                    {
                                        state.errors?.name?.map((error, index) => (
                                            <div key={index} className="-mt-1 flex gap-x-2 text-error items-center">
                                                <CircleAlert size={16} strokeWidth={2} className="shrink-0"/>
                                                <p className="text-sm font-medium">{error}</p>
                                            </div>
                                        ))
                                    }
                                </Field>
                                <Field className="flex flex-col gap-y-3">
                                    <Label htmlFor="email" className="text-on-surface-variant uppercase tracking-widest text-xs">{t("form.email.title")}</Label>
                                    <Input required
                                           autoComplete="email"
                                           id="email"
                                           name="email"
                                           type="email"
                                           placeholder={t("form.email.placeholder")}
                                           defaultValue={state.data?.get("email")?.toString() || ""}
                                           className="w-full bg-surface-container-high/30 text-on-surface border border-outline-variant/30 rounded-xl px-7 py-5 focus:bg-surface-container-high/50 focus:outline-2 focus:-outline-offset-2 focus:outline-primary/80"/>
                                    {
                                        state.errors?.email?.map((error, index) => (
                                            <div key={index} className="-mt-1 flex gap-x-2 text-error items-center">
                                                <CircleAlert size={16} strokeWidth={2}/>
                                                <p className="text-sm font-medium">{error}</p>
                                            </div>
                                        ))
                                    }
                                </Field>
                            </div>
                            <Field className="flex flex-col gap-y-3">
                                <Label htmlFor="subject" className="text-on-surface-variant uppercase tracking-widest text-xs">{t("form.subject.title")}</Label>
                                <Input required
                                       autoComplete="off"
                                       id="subject"
                                       name="subject"
                                       type="text"
                                       placeholder={t("form.subject.placeholder")}
                                       defaultValue={state.data?.get("subject")?.toString() || ""}
                                       className="w-full bg-surface-container-high/30 text-on-surface border border-outline-variant/30 rounded-xl px-7 py-5 focus:bg-surface-container-high/50 focus:outline-2 focus:-outline-offset-2 focus:outline-primary/80"/>
                                {
                                    state.errors?.subject?.map((error, index) => (
                                        <div key={index} className="-mt-1 flex gap-x-2 text-error items-center">
                                            <CircleAlert size={16} strokeWidth={2}/>
                                            <p className="text-sm font-medium">{error}</p>
                                        </div>
                                    ))
                                }
                            </Field>
                            <Field className="flex flex-col gap-y-3">
                                <Label htmlFor="message" className="text-on-surface-variant uppercase tracking-widest text-xs">{t("form.message.title")}</Label>
                                <Textarea required
                                          rows={8}
                                          autoComplete="off"
                                          id="message"
                                          name="message"
                                          placeholder={t("form.message.placeholder")}
                                          defaultValue={state.data?.get("message")?.toString() || ""}
                                          className="w-full bg-surface-container-high/30 text-on-surface border border-outline-variant/30 rounded-xl px-7 py-5 whitespace-pre-line focus:bg-surface-container-high/50 focus:outline-2 focus:-outline-offset-2 focus:outline-primary/80"/>
                                {
                                    state.errors?.message?.map((error, index) => (
                                        <div key={index} className="-mt-1 flex gap-x-2 text-error items-center">
                                            <CircleAlert size={16} strokeWidth={2}/>
                                            <p className="text-sm font-medium">{error}</p>
                                        </div>
                                    ))
                                }
                            </Field>
                            <Button type="submit" disabled={pending} className="w-full text-sm px-16 py-6 bg-primary text-on-primary font-bold uppercase tracking-[0.2em] rounded-md transition-all duration-300 active:scale-95 hover:brightness-110 disabled:bg-primary/80 cursor-pointer group">
                                {
                                    pending ?
                                        <div className="flex items-center justify-center gap-4">
                                            <LoaderCircle size={20} strokeWidth={2} className="animate-spin"/>
                                            <p>{t("form.pending")}</p>
                                        </div> :
                                        <div className="flex items-center justify-center gap-4">
                                            <p>{t("form.send")}</p>
                                            <MoveRight size={20} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-2"/>
                                        </div>
                                }
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}