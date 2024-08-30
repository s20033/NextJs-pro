'use client';

import React, { useState } from 'react';
import {
  CurrencyDollarIcon,
  BriefcaseIcon,
  LocationMarkerIcon,
  OfficeBuildingIcon,
} from '@heroicons/react/outline';
import Image from 'next/image';
import { ApplicationForm } from './ApplicationForm';
import { useTranslations } from 'next-intl';

type JobOpening = {
  title: string;
  company: string;
  logo: string;
  salary: string;
  contractType: string;
  location: string;
  workType: 'Remote' | 'Hybrid' | 'Stationary';
  description: string;
};

export function JobCard({ job }: { job: JobOpening }) {
  const [showModal, setShowModal] = useState(false);
  const t = useTranslations('jobCard');

  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col">
      <div className="flex items-center mb-4">
        <Image src={job.logo} alt={`${job.company} logo`} width={48} height={48} className="mr-4" />
        <div>
          <h2 className="text-xl font-semibold text-teal-950">{job.title}</h2>
          <p className="text-gray-600">{job.company}</p>
        </div>
      </div>
      <hr className="my-4" />
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center">
          <CurrencyDollarIcon className="w-6 h-6 text-teal-950 mr-2" />
          <span>{job.salary}{t('salaryPerHour')}</span>
        </div>
        <div className="flex items-center">
          <BriefcaseIcon className="w-6 h-6 text-teal-950 mr-2" />
          <span>{t('contractType')}: {job.contractType}</span>
        </div>
        <div className="flex items-center">
          <LocationMarkerIcon className="w-6 h-6 text-teal-950 mr-2" />
          <span>{t('location')}: {job.location}</span>
        </div>
        <div className="flex items-center">
          <OfficeBuildingIcon className="w-6 h-6 text-teal-950 mr-2" />
          <span>{t(`workType.${job.workType}`)}</span>
        </div>
      </div>
      <p className="text-gray-700 mb-4 line-clamp-2 flex-grow">{job.description}</p>
      <button
        onClick={() => setShowModal(true)}
        className="w-full px-4 py-2 bg-teal-950 text-white rounded-lg hover:bg-amber-700 transition-colors mt-auto"
      >
        {t('applyNow')}
      </button>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto">
          <div className="bg-white p-8 rounded-lg max-w-2xl w-full m-4">
            <h3 className="text-2xl font-semibold mb-4 text-teal-950">{t('applyFor')} {job.title}</h3>
            <ApplicationForm onClose={() => setShowModal(false)} jobTitle={job.title} />
          </div>
        </div>
      )}
    </div>
  );
}
