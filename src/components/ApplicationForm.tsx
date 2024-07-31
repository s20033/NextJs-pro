'use client';

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { XIcon } from '@heroicons/react/outline';

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
  const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
    // Here you would typically send the form data to your server
    alert('Application submitted successfully!');
    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
          <input
            {...register('firstName', { required: 'First name is required' })}
            id="firstName"
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
          />
          {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>}
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
          <input
            {...register('lastName', { required: 'Last name is required' })}
            id="lastName"
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
          />
          {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          {...register('email', { 
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          })}
          id="email"
          type="email"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
        />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
        <input
          {...register('phone', { required: 'Phone number is required' })}
          id="phone"
          type="tel"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
        />
        {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
      </div>
      <div>
        <label htmlFor="cv" className="block text-sm font-medium text-gray-700">Upload CV</label>
        <input
          {...register('cv', { required: 'CV is required' })}
          id="cv"
          type="file"
          accept=".pdf,.doc,.docx"
          className="mt-1 block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-teal-50 file:text-teal-700
            hover:file:bg-teal-100"
        />
        {errors.cv && <p className="mt-1 text-sm text-red-600">{errors.cv.message}</p>}
      </div>
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            {...register('agreeToTerms', { required: 'You must agree to the terms' })}
            id="agreeToTerms"
            type="checkbox"
            className="focus:ring-teal-500 h-4 w-4 text-teal-600 border-gray-300 rounded"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="agreeToTerms" className="font-medium text-gray-700">
            I agree with Grupa Krayr processing my data as per{' '}
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
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
        >
          Submit Application
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
            <h3 className="text-2xl font-semibold mb-4 text-teal-950">Privacy Policy (RODO Clause)</h3>
            <div className="prose prose-sm max-w-none">
              <p>In accordance with the General Data Protection Regulation (GDPR), we inform you that:</p>
              <ol>
                <li>The administrator of your personal data is Grupa Krayr Sp. z o.o., with its registered office in Warsaw, Poland.</li>
                <li>Your personal data will be processed for the purpose of conducting the recruitment process for the position of {jobTitle}.</li>
                <li>The legal basis for the processing of your personal data is your voluntary consent (Article 6(1)(a) of the GDPR).</li>
                <li>Your personal data will be stored for the duration of the recruitment process, but no longer than 6 months from the date of submission.</li>
                <li>You have the right to access your data, rectify it, delete it, limit processing, and withdraw consent at any time without affecting the lawfulness of processing based on consent before its withdrawal.</li>
                <li>Providing personal data is voluntary, but necessary to participate in the recruitment process.</li>
                <li>Your data will not be subject to automated decision-making or profiling.</li>
                <li>You have the right to lodge a complaint with the supervisory authority (President of the Personal Data Protection Office) if you believe that the processing of your personal data violates the provisions of the GDPR.</li>
              </ol>
            </div>
          </div>
        </div>
      )}
    </form>
  );
}