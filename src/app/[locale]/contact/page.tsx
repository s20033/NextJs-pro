'use client'
import { useId, useRef, useState } from "react";
import Link from "next/link";
import emailjs from '@emailjs/browser';

import { Border } from "../components/Border";
import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { FadeIn } from "../components/FadeIn";
import { Offices } from "../components/Offices";
import { PageIntro } from "../components/PageIntro";
import { SocialMedia } from "../components/SocialMedia";
import { useTranslations } from "next-intl";

function TextInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<"input"> & { label: string }) {
  let id = useId();

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
      >
        {label}
      </label>
    </div>
  );
}

function RadioInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<"input"> & { label: string }) {
  return (
    <label className="flex gap-x-3">
      <input
        type="radio"
        {...props}
        className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
      />
      <span className="text-base/6 text-neutral-950">{label}</span>
    </label>
  );
}

function ContactForm() {
const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (form.current) {
      emailjs.sendForm('service_aixzu6y', 'template_0jiinx7', form.current, 'w07if5kw3bnm_lOKS')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        })
        .finally(() => {
          window.location.reload(); // Reload the page after submission
        });
    } else {
      console.error('Form reference is not defined');
    }
  };

  const t = useTranslations("ContactPage");

  return (
    <FadeIn className="lg:order-last">
      <form ref={form} onSubmit={sendEmail}> {/* Attach sendEmail to onSubmit */}
        <h2 className="font-display text-base font-semibold text-neutral-950">
          {t("business_enquiry")}
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label={t("name")} name="name" autoComplete="name"  />
          <TextInput
            label={t("email")}
            type="email"
            name="email"
            autoComplete="email"
            
          />
          <TextInput
            label={t("company")}
            name="company"
            autoComplete="organization"
          />
          <TextInput
            label={t("phone")}
            type="tel"
            name="phone"
            autoComplete="tel"
            
          />
          <TextInput label={t("message")} name="message" />
          <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-neutral-500">
                {t("subject")}
              </legend>
              <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                {/* The name is 'subject' so it will be sent as the email subject */}
                <RadioInput label={t("cooperation")} name="subject" value="Cooperation" />
                <RadioInput label={t("career")} name="subject" value="Career" />
                <RadioInput
                  label={t("legalization")}
                  name="subject"
                  value="Legalization"
                />
                <RadioInput label={t("offer")} name="subject" value="Offer" />
              </div>
            </fieldset>
          </div>
        </div>
        <Button disabled={isSubmitting} type="submit" className="mt-10">
          {t("lets_work_together")}
        </Button>
      </form>
    </FadeIn>
  );
}

function ContactDetails() {
  const t = useTranslations("ContactDetails");

  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-neutral-950">
        {t('ourOfficesTitle')}
      </h2>
      <p className="mt-6 text-base text-neutral-600">
        {t("ourOfficesDescription")}
      </p>

      <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" />

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          {t("emailUsTitle")}
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          {[
            ["careersLabel", "resume@grupakrayr.pl"],
            ["cooperationLabel", "wspolpraca@grupakrayr.pl"],
          ].map(([label, email]) => (
            <div key={email}>
              <dt className="font-semibold text-neutral-950">{t(label)}</dt>
              <dd>
                <Link
                  href={`mailto:${email}`}
                  className="text-neutral-600 hover:text-neutral-950"
                >
                  {email}
                </Link>
              </dd>
            </div>
          ))}
        </dl>
      </Border>

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          {t("reachByPhoneTitle")}
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          {[
            ["polandLabel", "+48728987991"],
            ["bulgariaLabel", "+359886243448"],
          ].map(([label, phone]) => (
            <div key={phone}>
              <dt className="font-semibold text-neutral-950">{t(label)}</dt>
              <dd>
                <Link
                  href={`tel:${phone.replace(/\s+/g, "")}`}
                  className="text-neutral-600 hover:text-neutral-950"
                >
                  {phone}
                </Link>
              </dd>
            </div>
          ))}
        </dl>
      </Border>

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          {t("followUsTitle")}
        </h2>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn>
  );
}

// export const metadata: Metadata = {
//   title: "Contact Us",
//   description: "Let’s work together. We can’t wait to hear from you.",
// };

export default function Contact() {
  const t = useTranslations("ContactPage");
  return (
    <>
      <PageIntro eyebrow={t("eyebrow")} title={t("title")}>
        <p>{t("description")}</p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </>
  );
}

