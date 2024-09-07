'use client';

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { XIcon } from '@heroicons/react/outline';
import { useTranslations } from 'next-intl';
import emailjs from '@emailjs/browser';

type FormInputs = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  cv: FileList;
  coverLetter:string;
  agreeToTerms: boolean;
};

type ApplicationFormProps = {
  onClose: () => void;
  jobTitle: string;
};

export function ApplicationForm({ onClose, jobTitle }: ApplicationFormProps) {
  const t = useTranslations("applicationForm");
  const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    try {
      const formData = new FormData();
      formData.append('firstName', data.firstName);
      formData.append('lastName', data.lastName);
      formData.append('email', data.email);
      formData.append('phone', data.phone);
      formData.append('cv', data.cv[0]); 
      formData.append('coverLetter',data.coverLetter)
      formData.append('agreeToTerms', String(data.agreeToTerms));
      formData.append('jobTitle', jobTitle);

      const templateParams = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        cv: data.cv[0]?.name || '', 
        coverLetter:data.coverLetter,
        agreeToTerms: String(data.agreeToTerms),
        jobTitle,
      };

      const result = await emailjs.send(
        'service_aixzu6y',        
        'template_5c0we3u',       
        templateParams,
        'w07if5kw3bnm_lOKS'            
      );

      console.log(result.text);
      alert(t('submitMessage'));
      onClose();
    } catch (error) {
      console.error('Failed to send email:', error);
      alert(t('submitErrorMessage')); 
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-800">
            {t("firstName")}
          </label>
          <input
            {...register('firstName', { required: t("errors.firstNameRequired") })}
            id="firstName"
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-customTeal focus:ring-customTeal"
          />
          {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>}
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-800">
            {t("lastName")}
          </label>
          <input
            {...register('lastName', { required: t("errors.lastNameRequired") })}
            id="lastName"
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-customTeal focus:ring-customTeal"
          />
          {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-800">
          {t("email")}
        </label>
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
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-customTeal focus:ring-customTeal"
        />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-800">
          {t("phone")}
        </label>
        <input
          {...register('phone', { required: t("errors.phoneRequired") })}
          id="phone"
          type="tel"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-customTeal focus:ring-customTeal"
        />
        {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
      </div>
      <div>
        <label htmlFor="cv" className="block text-sm font-medium text-gray-800">
          {t("cv")}
        </label>
        <input
          {...register('cv', { required: t("errors.cvRequired") })}
          id="cv"
          type="file"
          accept=".pdf,.doc,.docx"
          className="mt-1 block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-teal-50 file:text-customTeal
            hover:file:bg-teal-100"
        />
        {errors.cv && <p className="mt-1 text-sm text-red-600">{errors.cv.message}</p>}
      </div>

      <div className="mt-4">
            <label
              htmlFor="coverLetter"
              className="block text-sm font-medium text-gray-800"
            >
              {t("message")}
            </label>
            <textarea
              {...register("coverLetter", {
                required: t("errors.coverLetterRequired"),
              })}
              id="coverLetter"
              rows={4}
              className="block w-full mt-1 border border-neutral-300 bg-transparent px-6 py-3 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 rounded-lg"
              placeholder={t("messagePlaceholder")}
            ></textarea>
            {errors.coverLetter && (
              <p className="mt-1 text-sm text-red-600">
                {errors.coverLetter.message}
              </p>
            )}
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
              {t("privacyPolicyTitle")}
            </button>
          </label>
          {errors.agreeToTerms && <p className="mt-1 text-sm text-red-600">{errors.agreeToTerms.message}</p>}
        </div>
      </div>
      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-800 bg-gray-100 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-customTeal"
        >
          {t("cancel")}
        </button>
        <button
          type="submit"
          className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-customTeal hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-customTeal"
        >
          {t("submit")}
        </button>
      </div>

      {showPrivacyPolicy && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-100 p-8 rounded-lg max-w-2xl w-full m-4 relative">
            <button
              onClick={() => setShowPrivacyPolicy(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <XIcon className="h-6 w-6" />
            </button>
            <h3 className="text-2xl font-semibold mb-4 text-customTeal">{t("privacyPolicyTitle")}</h3>
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
