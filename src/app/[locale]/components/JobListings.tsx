'use client';

import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import { JobCard } from './JobCard';
import { Button } from './Button';

type JobOpening = {
  title: string;
  company: string;
  logo: string;
  salary: string;
  contractType: string;
  location: string;
  workType: string;
  description: string;
};

type JobListingsProps = {
  jobOpenings: JobOpening[];
};

export function JobListings({ jobOpenings }: JobListingsProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const jobsPerPage = 3;
  const pageCount = Math.ceil(jobOpenings.length / jobsPerPage);

  const displayedJobs = jobOpenings.slice(
    currentPage * jobsPerPage,
    (currentPage + 1) * jobsPerPage
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % pageCount);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + pageCount) % pageCount);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {displayedJobs.map((job, index) => (
          <FadeIn key={index}>
            <JobCard job={job} />
          </FadeIn>
        ))}
      </div>
      <div className="mt-4 flex justify-between">
      <Button 
              onClick={prevPage}
              className="px-4 py-2 bg-teal-950 text-white rounded hover:bg-amber-700"
            >
              Previous
              </Button>
              <Button 
              onClick={nextPage}
              className="px-4 py-2 bg-teal-950 text-white rounded hover:bg-amber-700"
            >
              Next
              </Button>
            
      </div>
    </>
  );
}