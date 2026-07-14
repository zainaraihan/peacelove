"use client"

import Container from "@/components/layout/Container"
import Button from "@/components/ui/Button"
import { useState, useMemo } from "react"
import emailjs from "@emailjs/browser"
import { useTranslations } from 'next-intl';

// ─── EmailJS config (dari .env.local) ────────────────────────────────────────
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? ""
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? ""
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ""
// ─────────────────────────────────────────────────────────────────────────────

function validateEmail(email: string): boolean {
    // Must contain @, a domain name, and a TLD (e.g. user@example.com)
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())
}

function validatePhone(phone: string): boolean {
    // Format: +[country code] [digits only], e.g. +62 81234567890
    // Rule: starts with +, 1-4 digit country code, one space, then at least 6 digits only
    return /^\+\d{1,4} \d{6,}$/.test(phone.trim())
}

export default function Contact() {
    const t = useTranslations('Contact');

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    })

    const [touched, setTouched] = useState({
        name: false,
        email: false,
        phone: false,
        message: false,
    })

    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

    // ── Validation rules ───────────────────────────────────────────────────────
    const errors = useMemo(() => ({
        name: form.name.trim().length < 2 ? t('form.errors.name') : "",
        email: !validateEmail(form.email) ? t('form.errors.email') : "",
        phone: form.phone.trim() === "" ? t('form.errors.phoneRequired')
            : !validatePhone(form.phone) ? t('form.errors.phoneFormat')
                : "",
        message: form.message.trim().length < 10 ? t('form.errors.message') : "",
    }), [form, t])

    const isValid = !errors.name && !errors.email && !errors.phone && !errors.message

    // ── Handlers ───────────────────────────────────────────────────────────────
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleBlur = (field: keyof typeof touched) => {
        setTouched(prev => ({ ...prev, [field]: true }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        // Touch all validated fields so errors show
        setTouched({ name: true, email: true, phone: true, message: true })
        if (!isValid) return

        setStatus("sending")
        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    name: form.name.trim(),
                    email: form.email.trim(),
                    phone: form.phone.trim(),
                    message: form.message.trim(),
                },
                EMAILJS_PUBLIC_KEY,
            )
            setStatus("success")
            setForm({ name: "", email: "", phone: "", message: "" })
            setTouched({ name: false, email: false, phone: false, message: false })
        } catch {
            setStatus("error")
        }
    }

    // ── Input class helper ──────────────────────────────────────────────────────
    const inputClass = (hasError: boolean) =>
        `w-full border-b-1 text-p py-5 focus:outline-none transition-colors ${hasError ? "border-red-400 placeholder:text-red-300" : "border-brand-grey"
        }`

    return (
        <div>
            <div>
                <img className="h-[137px] w-full object-cover md:h-[308px]" src="/contact/head.png?v=2" alt="" />
                <div className="bg-brand-light">
                    <Container className="flex flex-col py-7 gap-4 md:flex-row md:gap-20 md:py-20">
                        <h1 className="text-h1">
                            {t.rich('title', {
                                br: () => <br />,
                                grey: (chunks) => <span className='text-brand-grey'>{chunks}</span>
                            })}
                        </h1>
                        <p className="text-h4 w-50 md:w-100">{t('subtitle')}</p>
                    </Container>
                </div>
            </div>

            <Container className="flex flex-col gap-6 py-10 md:flex-row md:justify-between md:gap-0 md:py-30">
                <h2 className="text-h2 md:w-150 md:mr-20">
                    {t.rich('heading', {
                        grey: (chunks) => <span className='text-brand-grey'>{chunks}</span>
                    })}
                </h2>

                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5 md:w-full md:items-end md:gap-10">

                    {/* Full Name */}
                    <div className="w-full">
                        <input
                            className={inputClass(touched.name && !!errors.name)}
                            type="text"
                            name="name"
                            placeholder={t('form.namePlaceholder')}
                            value={form.name}
                            onChange={handleChange}
                            onBlur={() => handleBlur("name")}
                        />
                        {touched.name && errors.name && (
                            <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                        )}
                    </div>

                    {/* Email Address */}
                    <div className="w-full">
                        <input
                            className={inputClass(touched.email && !!errors.email)}
                            type="email"
                            name="email"
                            placeholder={t('form.emailPlaceholder')}
                            value={form.email}
                            onChange={handleChange}
                            onBlur={() => handleBlur("email")}
                        />
                        {touched.email && errors.email && (
                            <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                        )}
                    </div>

                    {/* Phone Number */}
                    <div className="w-full">
                        <input
                            className={inputClass(touched.phone && !!errors.phone)}
                            type="tel"
                            name="phone"
                            placeholder={t('form.phonePlaceholder')}
                            value={form.phone}
                            onChange={handleChange}
                            onBlur={() => handleBlur("phone")}
                        />
                        {touched.phone && errors.phone && (
                            <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                        )}
                    </div>

                    {/* Message */}
                    <div className="w-full">
                        <textarea
                            className={`${inputClass(touched.message && !!errors.message)} md:pb-20 resize-none`}
                            name="message"
                            placeholder={t('form.messagePlaceholder')}
                            rows={5}
                            value={form.message}
                            onChange={handleChange}
                            onBlur={() => handleBlur("message")}
                        />
                        {touched.message && errors.message && (
                            <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                        )}
                    </div>

                    {/* Status feedback */}
                    {status === "success" && (
                        <p className="w-full text-brand-primary text-sm font-medium">
                            {t('form.success')}
                        </p>
                    )}
                    {status === "error" && (
                        <p className="w-full text-red-500 text-sm font-medium">
                            {t('form.error')}
                        </p>
                    )}

                    {/* Submit — disabled when form is invalid OR sending */}
                    <Button
                        className={`w-fit md:mt-10 transition-opacity ${(!isValid || status === "sending") ? "opacity-40 cursor-not-allowed" : ""}`}
                        type="submit"
                        disabled={!isValid || status === "sending"}
                    >
                        {status === "sending" ? t('form.sending') : t('form.submit')}
                    </Button>
                </form>
            </Container>

            <div>
                <img className="h-[304] w-full object-cover bg-top md:h-[527px]" src="/contact/global.png?v=2" alt="" />
            </div>
            <Container className="flex flex-col gap-5 py-12 pb-50 md:flex-row md:pt-30">
                <h2 className="text-h2 md:w-150 md:mr-20">
                    {t.rich('offices.title', {
                        br: () => <br />,
                        grey: (chunks) => <span className='text-brand-grey'>{chunks}</span>
                    })}
                </h2>
                <div className="border-b-1 border-brand-grey md:hidden"></div>
                <div className="flex flex-col gap-5 md:w-full">
                    <div className="flex flex-col gap-5 p-3 bg-brand-light">
                        <div className="flex justify-between">
                            <h3 className="text-h4 text-[18px] font-semibold w-10">
                                {t.rich('offices.plOffice', {
                                    br: () => <br />
                                })}
                            </h3>
                            <img className="w-[134px]" src="/contact/peacelove.svg?v=2" alt="" />
                        </div>
                        <div className="flex justify-between items-end">
                            <div className="w-[72vw] md:w-[35vw]">
                                <img src="/contact/mark.svg?v=2" alt="" />
                                <p className="text-p text-brand-grey">{t('offices.plAddress')}</p>
                            </div>
                            <Button className="h-fit">
                                <a href="https://www.google.com/maps/@3.1152348,101.4533067,55m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI2MDcwNy4wIKXMDSoASAFQAw%3D%3D">
                                    <img className="py-1" src="/contact/arrow.svg?v=2" alt="" />
                                </a>
                            </Button>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5 p-3 bg-brand-light">
                        <div className="flex justify-between">
                            <h3 className="text-h4 text-[18px] font-semibold w-10">
                                {t.rich('offices.bpmOffice', {
                                    br: () => <br />
                                })}
                            </h3>
                            <img className="w-[64px]" src="/contact/bpm.svg?v=2" alt="" />
                        </div>
                        <div className="flex justify-between items-end">
                            <div className="w-[72vw] md:w-[20vw]">
                                <img src="/contact/mark.svg?v=2" alt="" />
                                <p className="text-p text-brand-grey">{t('offices.bpmAddress')}</p>
                            </div>
                            <Button className="h-fit">
                                <a href="https://www.google.com/maps/place/34+Maple+Ave,+Pine+Brook,+NJ+07058,+USA/@40.864077,-74.3319648,662m/data=!3m2!1e3!4b1!4m6!3m5!1s0x89c3073f70d04adf:0xd8a76dcc4be2c27b!8m2!3d40.864077!4d-74.3319648!16s%2Fg%2F11b8v51cf0?entry=ttu&g_ep=EgoyMDI2MDcwNy4wIKXMDSoASAFQAw%3D%3D">
                                    <img className="py-1" src="/contact/arrow.svg?v=2" alt="" />
                                </a>
                            </Button>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5 p-3 bg-brand-light">
                        <div className="flex justify-between">
                            <h3 className="text-h4 text-[18px] font-semibold">
                                {t.rich('offices.fuleOffice', {
                                    br: () => <br />
                                })}
                            </h3>
                            <img className="w-[134px]" src="/contact/38fule.svg?v=2" alt="" />
                        </div>
                        <div className="flex justify-between items-end">
                            <div className="w-[72vw] md:w-[26vw]">
                                <img src="/contact/mark.svg?v=2" alt="" />
                                <p className="text-p text-brand-grey">{t('offices.fuleAddress')}</p>
                            </div>
                            <Button className="h-fit">
                                <a href="https://www.38fule.com/">
                                    <img className="py-1" src="/contact/arrow.svg?v=2" alt="" />
                                </a>
                            </Button>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5 p-3 bg-brand-light">
                        <div className="flex justify-between">
                            <h3 className="text-h4 text-[18px] font-semibold">
                                {t.rich('offices.stemOffice', {
                                    br: () => <br />
                                })}
                            </h3>
                            <img className="w-[134px] h-[40px]" src="/contact/zhonghai.png?v=2" alt="" />
                        </div>
                        <div className="flex justify-between items-end">
                            <div className="w-[72vw] md:w-[26vw]">
                                <img src="/contact/mark.svg?v=2" alt="" />
                                <p className="text-p text-brand-grey">{t('offices.stemAddress')}</p>
                            </div>
                            <Button className="h-fit">
                                <a href="https://zhonghaiyinglian.com/">
                                    <img className="py-1" src="/contact/arrow.svg?v=2" alt="" />
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}