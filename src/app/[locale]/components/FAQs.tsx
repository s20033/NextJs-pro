'use client'

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Fuse from 'fuse.js';
import { Metadata } from 'next';
import { Button } from './Button';

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "What are the benefits of outsourcing staffing solutions in Poland?",
    answer: "Outsourcing staffing solutions in Poland offers numerous benefits including cost efficiency, access to a skilled talent pool, and reduced administrative burden. Polish labor costs are generally lower compared to Western Europe, which can help companies save on operational expenses. Additionally, Poland boasts a well-educated and skilled workforce, particularly in fields such as IT, engineering, and manufacturing. Outsourcing also allows businesses to focus on core activities while leaving recruitment and administrative tasks to specialized providers.",
  },
  {
    question: "How can I hire temporary workers in Poland?",
    answer: "Hiring temporary workers in Poland involves partnering with staffing agencies that specialize in temporary placements. Agencies handle recruitment, compliance with Polish labor laws, and payroll management. Businesses can access a flexible workforce for short-term needs such as seasonal peaks or specific projects. It’s essential to choose an agency with a good reputation and experience in your industry.",
  },
  {
    question: "What are the key labor laws affecting foreign workers in Poland?",
    answer: "Foreign workers in Poland must adhere to several labor laws, including obtaining the appropriate work visa and permit. Key regulations include compliance with minimum wage standards, working hours, and employee rights as outlined in the Polish Labor Code. It is crucial for employers to ensure that foreign workers have valid work permits and comply with all legal requirements to avoid penalties.",
  },
  {
    question: "What is the process for permanent hiring in Poland?",
    answer: "Permanent hiring in Poland involves several steps: defining job requirements, sourcing candidates through job boards or recruitment agencies, conducting interviews, and finalizing employment contracts. Employers must also ensure compliance with Polish labor laws regarding employment contracts, probation periods, and termination conditions. It is advisable to work with local recruitment experts to navigate these processes efficiently.",
  },
  {
    question: "How do I ensure compliance with Polish immigration laws for foreign employees?",
    answer: "Ensuring compliance with Polish immigration laws requires obtaining the correct work visas and permits for foreign employees. Employers should verify that all documentation is complete and up-to-date, including work contracts and residence permits. It is beneficial to consult with immigration specialists or legal advisors to ensure all legal requirements are met and to avoid any issues with the authorities.",
  },
  {
    question: "What are the challenges of hiring overseas talent for companies in Poland?",
    answer: "Challenges of hiring overseas talent for companies in Poland include navigating complex immigration regulations, cultural differences, and ensuring compliance with local labor laws. Additionally, there may be language barriers and the need for relocation support for international hires. Partnering with experienced staffing agencies or consultants can help address these challenges effectively.",
  },
  {
    question: "How does Grupa Krayr support businesses with the relocation of foreign employees to Poland?",
    answer: "Grupa Krayr supports businesses by managing the entire relocation process for foreign employees. This includes obtaining work visas and permits, assisting with housing and settling-in arrangements, and providing orientation programs to help employees adapt to their new environment. Our goal is to ensure a smooth transition and integration for international staff.",
  },
  {
    question: "What industries benefit most from temporary staffing solutions in Poland?",
    answer: "Industries that benefit most from temporary staffing solutions in Poland include manufacturing, logistics, IT, and hospitality. These sectors often experience fluctuating demand and require flexible staffing solutions to manage peak periods or project-based work. Temporary staffing helps maintain productivity and meet business needs without long-term commitments.",
  },
  {
    question: "What are the most common types of work visas for foreign employees in Poland?",
    answer: "The most common types of work visas for foreign employees in Poland include the Type A work permit, which is for employment with a specific employer, and the Type B work permit, which is for managerial positions. Additionally, the Blue Card is available for highly skilled workers. Each visa type has specific requirements and application processes.",
  },
  {
    question: "How can I find reliable staffing agencies in Poland?",
    answer: "To find reliable staffing agencies in Poland, consider looking for agencies with a strong track record in your industry, positive client reviews, and clear accreditation. Industry associations and networks can also provide recommendations. It’s important to choose an agency that understands local labor laws and has experience managing your specific staffing needs.",
  },
  {
    question: "What is the process for hiring foreign workers in Bulgaria?",
    answer: "Hiring foreign workers in Bulgaria involves several steps to ensure compliance with local regulations. First, employers must obtain a work permit from the Bulgarian Employment Agency. This requires providing proof of the employee’s qualifications and ensuring there are no suitable Bulgarian candidates for the position. After securing the permit, the employee must apply for a long-term visa at the Bulgarian consulate in their home country. Employers must also comply with Bulgarian labor laws, including registering the employee with the National Revenue Agency.",
  },
  {
    question: "How can Grupa Krayr assist with the legalization of foreign workers in Bulgaria?",
    answer: "Grupa Krayr specializes in managing the complete legalization process for foreign workers in Bulgaria. We handle the application for work permits and long-term visas, ensuring compliance with Bulgarian immigration laws. Our services include document verification, translation, and ongoing support to address any legal or bureaucratic issues that may arise.",
  },
  {
    question: "What are the benefits of hiring international talent in Bulgaria?",
    answer: "Hiring international talent in Bulgaria offers several benefits, including access to a diverse and skilled workforce, cost efficiencies, and the ability to fill niche roles that may be hard to fill locally. Bulgaria’s competitive wage structures and favorable business environment make it an attractive destination for companies looking to expand their talent pool.",
  },
  {
    question: "What types of staffing solutions does Grupa Krayr offer in Bulgaria?",
    answer: "Grupa Krayr offers a range of staffing solutions in Bulgaria, including outsourcing, temporary work, onsite solutions, and permanent hire. We provide tailored solutions to meet your specific needs, whether you require temporary staffing for peak periods, permanent employees for long-term roles, or outsourcing for complete workforce management. Our expertise ensures that you find the right talent efficiently and effectively.",
  },
  {
    question: "How does Grupa Krayr support the relocation of foreign workers to Bulgaria?",
    answer: "Grupa Krayr offers comprehensive relocation support for foreign workers moving to Bulgaria. Our services include assistance with obtaining the necessary visas and work permits, arranging accommodation, and helping employees adapt to their new environment. We also provide guidance on cultural integration to ensure a smooth transition into your company’s work culture.",
  },
];

export const metadata: Metadata = {
  title: "FAQs - Grupa Krayr",
  description: "Find answers to frequently asked questions about our staffing and recruitment services in Poland and Bulgaria.",
  keywords: 'FAQs, staffing solutions, recruitment, Poland, Bulgaria, foreign employment, temporary job agency, work permit'
};

const FAQSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const fuse = new Fuse(faqs, {
    keys: ['question', 'answer'],
    threshold: 0.3,
  });

  const results = searchTerm ? fuse.search(searchTerm).map(result => result.item) : faqs;
  const pageSize = 3;
  const pageCount = Math.ceil(results.length / pageSize);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % pageCount);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + pageCount) % pageCount);
  };

  useEffect(() => {
    setExpandedIndex(null);
  }, [currentPage]);

  const displayedFAQs = results.slice(currentPage * pageSize, (currentPage + 1) * pageSize);

  return (
    <section className="max-w-2xl mx-auto p-4">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-4">FAQs</h2>
      <input
        type="text"
        placeholder="Search..."
        className="w-full p-2 mb-4 border border-gray-300 rounded"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="space-y-4">
        {displayedFAQs.map((faq, index) => {
          const actualIndex = currentPage * pageSize + index;
          return (
            <div 
              key={actualIndex} 
              className={`border border-gray-200 rounded transition-colors duration-300 ${
                expandedIndex === actualIndex ? '' : 'hover:bg-emerald-950 hover:text-white'
              }`}
            >
              <button
                className="w-full p-4 text-left flex justify-between items-center"
                onClick={() => toggleExpand(actualIndex)}
              >
                <span className={`text-lg font-medium ${expandedIndex === actualIndex ? 'text-gray-900' : ''}`}>
                  {faq.question}
                </span>
                <motion.div
                  initial={false}
                  animate={{ rotate: expandedIndex === actualIndex ? 180 : 0 }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.div>
              </button>
              {expandedIndex === actualIndex && (
                <motion.div
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { opacity: 1, height: 'auto' },
                    collapsed: { opacity: 0, height: 0 },
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <div className="p-4 border-t border-gray-200 bg-white">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                </motion.div>
              )}
            </div>
          );
        })}
      </div>
      <div className="mt-4 flex justify-between">
      <Button 
              onClick={prevPage}
              className="px-4 py-2 bg-emerald-950 text-white rounded hover:bg-amber-700"
            >
              Prev
              </Button>
              <Button 
              onClick={nextPage}
              className="px-4 py-2 bg-emerald-950 text-white rounded hover:bg-amber-700"
            >
              Next
              </Button>
            
      </div>
    </section>
  );
};

export default FAQSection;