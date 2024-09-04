import { useId } from "react";
import clsx from "clsx";
import { Span } from "next/dist/trace";

export function Logomark({
  invert = false,
  filled = false,
  ...props
}: React.ComponentPropsWithoutRef<"svg"> & {
  invert?: boolean;
  filled?: boolean;
}) {
  let id = useId();

  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="58"
      height="58"
      viewBox="-50 20 412 420"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      className={clsx(
        "h-8 transition-all duration-300",
        filled ? "w-8" : "w-0 group-hover:w-8",
        invert ? "group-hover:fill-white" : "group-hover:fill-black"
      )}
      {...props}
    >
      <metadata>Grupa - Krayr: A Top Recruitment agency</metadata>
      <g
        transform="translate(0.000000,368.000000) scale(0.100000,-0.100000)"
        className={clsx(
          "transition-all duration-300",
          invert
            ? "fill-white group-hover:fill-white"
            : "fill-teal-950 group-hover:fill-red"
        )}
        stroke="none"
      >
        <path
          d="M676 3149 l-26 -20 0 -864 0 -864 22 -21 c29 -26 71 -25 101 3 21 19
1362 1561 1440 1655 34 41 34 75 2 107 l-24 25 -744 0 c-738 0 -745 0 -771
-21z"
        />
        <path
          d="M1647 2188 c-14 -13 -160 -182 -326 -376 -323 -378 -327 -384 -278
-430 l23 -22 630 0 631 0 21 23 c30 32 28 70 -6 109 -16 18 -149 175 -296 348
-147 173 -281 327 -297 343 -36 33 -70 35 -102 5z"
        />
      </g>
    </svg>
  );
}

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  invert?: boolean
  filled?: boolean
  fillOnHover?: boolean
}) {
  return (
    <svg
      viewBox="0 0 130 32"
      aria-hidden="true"
      className={clsx(fillOnHover && 'group/logo', className)}
      {...props}
    >
      <Logomark
        preserveAspectRatio="xMinYMid meet"
        invert={invert}
        filled={filled}
      />
      <path
        className={filled ? 'fill-black' : 'fill-teal-950'}
        d="M160 303 l0 -238 55 0 55 0 0 61 c0 55 3 63 33 92 l33 32 72 -89 71" 
           />
    </svg>
  )
}


// new version of logo class
// import React, { useId } from 'react'
// import clsx from 'clsx'

// export function Logomark({
//   invert = false,
//   filled = false,
//   ...props
// }: React.ComponentPropsWithoutRef<'svg'> & {
//   invert?: boolean
//   filled?: boolean
// }) {
//   let id = useId()

//   return (
//     <svg viewBox="0 0 3200 3200" aria-hidden="true" {...props}>
//       <defs>
//         <path
//           id={`${id}-icon-path1`}
//           d="M676 3149 l-26 -20 0 -864 0 -864 22 -21 c29 -26 71 -25 101 3 21 19
//           1362 1561 1440 1655 34 41 34 75 2 107 l-24 25 -744 0 c-738 0 -745 0 -771
//           -21z"
//         />
//         <path
//           id={`${id}-icon-path2`}
//           d="M1647 2188 c-14 -13 -160 -182 -326 -376 -323 -378 -327 -384 -278
//           -430 l23 -22 630 0 631 0 21 23 c30 32 28 70 -6 109 -16 18 -149 175 -296 348
//           -147 173 -281 327 -297 343 -36 33 -70 35 -102 5z"
//         />
//         <clipPath id={`${id}-icon-clip`}>
//           <use href={`#${id}-icon-path1`} />
//           <use href={`#${id}-icon-path2`} />
//         </clipPath>
//       </defs>
//       <rect
//         clipPath={`url(#${id}-icon-clip)`}
//         className={clsx(
//           'h-8 transition-all duration-300',
//           invert ? 'fill-white' : 'fill-neutral-950',
//           filled ? 'w-8' : 'w-0 group-hover/logo:w-8',
//         )}
//       />
//       <use
//         href={`#${id}-icon-path1`}
//         className={invert ? 'stroke-white' : 'stroke-neutral-950'}
//         fill="none"
//         strokeWidth="1.5"
//       />
//       <use
//         href={`#${id}-icon-path2`}
//         className={invert ? 'stroke-white' : 'stroke-neutral-950'}
//         fill="none"
//         strokeWidth="1.5"
//       />
//     </svg>
//   )
// }

// export function Logo({
//   className,
//   invert = false,
//   filled = false,
//   fillOnHover = false,
//   ...props
// }: React.ComponentPropsWithoutRef<'svg'> & {
//   invert?: boolean
//   filled?: boolean
//   fillOnHover?: boolean
// }) {
//   let id = useId()

//   return (
//     <svg
//       viewBox="0 0 18400 2520"
//       aria-hidden="true"
//       className={clsx(fillOnHover && 'group/logo', className)}
//       {...props}
//     >
//       <defs>
//         <path
//           id={`${id}-text-path`}
//           d="M676 3149 l-26 -20 0 -864 0 -864 22 -21 c29 -26 71 -25 101 3 21 19
//           1362 1561 1440 1655 34 41 34 75 2 107 l-24 25 -744 0 c-738 0 -745 0 -771
//           -21z M1647 2188 c-14 -13 -160 -182 -326 -376 -323 -378 -327 -384 -278
//           -430 l23 -22 630 0 631 0 21 23 c30 32 28 70 -6 109 -16 18 -149 175 -296 348
//           -147 173 -281 327 -297 343 -36 33 -70 35 -102 5z"
//         />
//         <style>
//           {`.cls-1 {
//             font-size: 1800px;
//             fill: ${invert ? '#fffff' : '#fill-teal-950'
//             };

//             font-family: font-display;
//             font-weight: 700;
//           }`}
//         </style>
//       </defs>
//       <g transform="scale(0.763125, -0.69125) translate(0, -4000)">
//         <use
//           href={`#${id}-text-path`}
//           className={clsx(
//             'transition-all duration-300',
//             invert ? 'stroke-white' : 'stroke-teal-950 hover:fill-teal-950',
//             filled ? 'fill-white' : 'fill-transparent',
//             'group-hover/logo:fill-teal-950'
//           )}
//           strokeWidth="40"
//         />
//       </g>
//       <text id="Grupa_Krayr" data-name="Grupa Krayr" className="cls-1" x="3300" y="1750">Grupa Krayr</text>
//     </svg>
//   )
// }

// import { type Metadata } from 'next'
// import Image from 'next/image'
// import Link from 'next/link'

// import { Border } from '../components/Border'
// import { Button } from '../components/Button'
// import { ContactSection } from '../components/ContactSection'
// import { Container } from '../components/Container'
// import { FadeIn } from '../components/FadeIn'
// import { PageIntro } from '../components/PageIntro'
// import { formatDate } from '@/lib/formatDate'
// import { loadArticles } from '@/lib/mdx'
// import { useTranslations } from 'next-intl'

// export const metadata: Metadata = {
//   title: 'Blog',
//   description:
//     'Stay up-to-date with the latest industry news as our marketing teams finds new ways to re-purpose old CSS tricks articles.',
// }

// export default async function Blog() {
//   let articles = await loadArticles()

//   return (
//     <>
//       <PageIntro eyebrow="Blog" title="The latest articles and news">
//         <p>
//         Stay informed with our latest insights on industry trends, workforce strategies, and staffing solutions to keep your business ahead.
//         </p>
//       </PageIntro>

//       <Container className="mt-24 sm:mt-32 lg:mt-40">
//         <div className="space-y-24 lg:space-y-32">
//           {articles.map((article) => (
//             <FadeIn key={article.href}>
//               <article>
//                 <Border className="pt-16">
//                   <div className="relative lg:-mx-4 lg:flex lg:justify-end">
//                     <div className="pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0">
//                       <h2 className="font-display text-2xl font-semibold text-neutral-950">
//                         <Link href={article.href}>{article.title}</Link>
//                       </h2>
//                       <dl className="lg:absolute lg:left-0 lg:top-0 lg:w-1/3 lg:px-4">
//                         <dt className="sr-only">Published</dt>
//                         <dd className="absolute left-0 top-0 text-sm text-neutral-950 lg:static">
//                           <time dateTime={article.date}>
//                             {formatDate(article.date)}
//                           </time>
//                         </dd>
//                         <dt className="sr-only">Author</dt>
//                         <dd className="mt-6 flex gap-x-4">
//                           <div className="flex-none overflow-hidden rounded-xl bg-neutral-100">
//                             <Image
//                               alt=""
//                               {...article.author.image}
//                               className="h-12 w-12 object-cover grayscale"
//                             />
//                           </div>
//                           <div className="text-sm text-neutral-950">
//                             <div className="font-semibold">
//                               {article.author.name}
//                             </div>
//                             <div>{article.author.role}</div>
//                           </div>
//                         </dd>
//                       </dl>
//                       <p className="mt-6 max-w-2xl text-base text-neutral-600">
//                         {article.description}
//                       </p>
//                       <Button
//                         href={article.href}
//                         aria-label={`Read more: ${article.title}`}
//                         className="mt-8"
//                       >
//                         Read more
//                       </Button>
//                     </div>
//                   </div>
//                 </Border>
//               </article>
//             </FadeIn>
//           ))}
//         </div>
//       </Container>

//       <ContactSection />
//     </>
//   )
// }


// application form: 

'use client';

import React, { useId, useRef, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { XIcon } from '@heroicons/react/outline';
import {useTranslations as translations} from 'next-intl'
import { FadeIn } from './FadeIn';
import { Button } from './Button';
import emailjs from '@emailjs/browser';


type FormInputs = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  cv: FileList;
  agreeToTerms: boolean;
};

type ApplicationFormProps = {
  onClose: () => void;
  jobTitle: string;
};

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

// export function ApplicationForm({ onClose, jobTitle }: ApplicationFormProps) {
//   const t = translations("applicationForm")
//   const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();
//   const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const form = useRef<HTMLFormElement | null>(null);

//   const sendEmail = (e: React.FormEvent) => {
//     e.preventDefault();
    
//     if (form.current) {
//       emailjs.sendForm('service_aixzu6y', 'template_5c0we3u', form.current, 'w07if5kw3bnm_lOKS')
//         .then((result) => {
//           console.log(result.text);
//         }, (error) => {
//           console.log(error.text);
//         })
//         .finally(() => {
//           window.location.reload(); // Reload the page after submission
//         });
//     } else {
//       console.error('Form reference is not defined');
//     }
//   };


//   return (
//     <FadeIn className="lg:order-last">
//       <form ref={form} onSubmit={sendEmail}> {/* Attach sendEmail to onSubmit */}
//         <h2 className="font-display text-base font-semibold text-neutral-950">
//           {t("subtitle")} 
//         </h2>
//         <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
//           <TextInput label={t("firstName")} name="firstName" autoComplete="name"  />
//           <TextInput label={t("lastName")} name="lastName" autoComplete="name"  />

//           <TextInput
//             label={t("email")}
//             type="email"
//             name="email"
//             autoComplete="email"
            
//           />
//           <TextInput
//             label={t("phone")}
//             name="phone"
//             autoComplete="phone"
//           />

//           <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
//           <label for="coverletter">{t("message")}</label>
//           <textarea id="coverletter" name="message" cols={65}/>

//           </div>
        
//       <div className="flex items-start mt-4">
//         <div className="flex items-center h-5">
//           <input
//             {...register('agreeToTerms', { required: t("errors.agreeToTermsRequired") })}
//             id="agreeToTerms"
//             type="checkbox"
//             className="focus:ring-teal-500 h-4 w-4 text-teal-800 border-gray-300 rounded"
//           />
//         </div>
//         <div className="ml-3 text-sm">
//           <label htmlFor="agreeToTerms" className="font-medium text-gray-700">
//             {t("agreeToTerms")}{' '}
//             <button
//               type="button"
//               onClick={() => setShowPrivacyPolicy(true)}
//               className="text-teal-600 hover:text-teal-500 font-semibold"
//             >
//               {t("privacyPolicyTitle")}
//             </button>
//           </label>
//           {errors.agreeToTerms && <p className="mt-1 text-sm text-red-600">{errors.agreeToTerms.message}</p>}
//         </div>
//       </div>
//     <div className="flex justify-end space-x-3 mt-10">
//     <Button onClick={close} className="mt-10">
//     {t("cancel")}
//         </Button> 
        
//       <Button disabled={isSubmitting} type="submit" className="mt-10">
//           {t("submit")}
//         </Button>
//     </div>
//     </div>
//   </form>

//   {showPrivacyPolicy && (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white p-8 rounded-lg max-w-2xl w-full m-4 relative">
//         <button
//           onClick={() => setShowPrivacyPolicy(false)} 
//           className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
//         >
//           <XIcon className="h-6 w-6" />
//         </button>
//         <h3 className="text-2xl font-semibold mb-4 text-teal-950">{t("privacyPolicyTitle")}</h3>
//         <div className="prose prose-sm max-w-none">
//           <p>{t("privacyPolicyParagraph")}</p>
//           <ol>
//             <li>{t("privacyPolicy.admin")}</li>
//             <li>{t("privacyPolicy.purpose")}{jobTitle}.</li>
//             <li>{t("privacyPolicy.legalBasis")}</li>
//             <li>{t("privacyPolicy.storage")}</li>
//             <li>{t("privacyPolicy.rights")}</li>
//             <li>{t("privacyPolicy.voluntary")}</li>
//             <li>{t("privacyPolicy.automatedDecision")}</li>
//             <li>{t("privacyPolicy.complaint")}</li>
//           </ol>
//         </div>
//       </div>
//     </div>
//   )}
// </FadeIn>

//   );
// }


'use client';

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { XIcon } from '@heroicons/react/outline';
import {useTranslations as translations} from 'next-intl'
type FormInputs = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  cv: FileList;
  agreeToTerms: boolean;
};

type ApplicationFormProps = {
  onClose: () => void;
  jobTitle: string;
};

export function ApplicationForm({ onClose, jobTitle }: ApplicationFormProps) {
  const t = translations("applicationForm")
  const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
   
    console.log(data);
    alert(t('submitMessage'));
    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-800">{t("firstName")}</label>
          <input
            {...register('firstName', { required: t("errors.firstNameRequired") })}
            id="firstName"
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-900 focus:ring-teal-900"
          />
          {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>}
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-800">{t("lastName")}</label>
          <input
            {...register('lastName', { required: t("errors.lastNameRequired") })}
            id="lastName"
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-900 focus:ring-teal-900"
          />
          {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-800">{t("email")}</label>
        <input
          {...register('email', { 
            required: t("errors.emailRequired"),
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: t("errors.emailInvalid")
            }
          })}
          id="email"
          type="email"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-900 focus:ring-teal-900"
        />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-800">{t("phone")}</label>
        <input
          {...register('phone', { required: t("errors.phoneRequired") })}
          id="phone"
          type="tel"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-900 focus:ring-teal-900"
        />
        {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
      </div>
      <div>
        <label htmlFor="cv" className="block text-sm font-medium text-gray-800">{t("cv")}</label>
        <input
          {...register('cv', { required: t("errors.cvRequired") })}
          id="cv"
          type="file"
          accept=".pdf,.doc,.docx"
          className="mt-1 block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-teal-50 file:text-teal-900
            hover:file:bg-teal-100"
        />
        {errors.cv && <p className="mt-1 text-sm text-red-600">{errors.cv.message}</p>}
      </div>
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            {...register('agreeToTerms', { required: t("errors.agreeToTermsRequired") })}
            id="agreeToTerms"
            type="checkbox"
            className="focus:ring-teal-500 h-4 w-4 text-teal-800 border-gray-300 rounded"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="agreeToTerms" className="font-medium text-gray-700">
            {t("agreeToTerms")}{' '}
            <button
              type="button"
              onClick={() => setShowPrivacyPolicy(true)}
              className="text-teal-600 hover:text-teal-500 font-semibold"
            >
              privacy policy
            </button>
          </label>
          {errors.agreeToTerms && <p className="mt-1 text-sm text-red-600">{errors.agreeToTerms.message}</p>}
        </div>
      </div>
      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-800 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-900"
        >
          {t("cancel")}
        </button>
        <button
          type="submit"
          className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-900 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-900"
        >
          {t("submit")}
        </button>
      </div>

      {showPrivacyPolicy && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-2xl w-full m-4 relative">
            <button
              onClick={() => setShowPrivacyPolicy(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <XIcon className="h-6 w-6" />
            </button>
            <h3 className="text-2xl font-semibold mb-4 text-teal-950">{t("privacyPolicyTitle")}</h3>
            <div className="prose prose-sm max-w-none">
              <p>{t("privacyPolicyParagraph")}</p>
              <ol>
                <li>{t("privacyPolicy.admin")}</li>
                <li>{t("privacyPolicy.purpose")}{jobTitle}.</li>
                <li>{t("privacyPolicy.legalBasis")}</li>
                <li>{t("privacyPolicy.storage")}</li>
                <li>{t("privacyPolicy.rights")}</li>
                <li>{t("privacyPolicy.voluntary")}</li>
                <li>{t("privacyPolicy.automatedDecision")}</li>
                <li>{t("privacyPolicy.complaint")}</li>
              </ol>
            </div>
          </div>
        </div>
      )}
    </form>
  );
}

function useTranslations(): { t: any; } {
  throw new Error('Function not implemented.');
}

