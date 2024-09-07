'use client'

import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import Fuse from 'fuse.js';
import { Metadata } from 'next';
import { Button } from './Button';
import { useTranslations } from 'next-intl';

type FAQItem = {
  questionKey: string;
  answerKey: string;
};

export const metadata: Metadata = {
  title: "FAQs - Grupa Krayr",
  description: "Find answers to frequently asked questions about our staffing and recruitment services in Poland and Bulgaria.",
  keywords: 'FAQs, staffing solutions, recruitment, Poland, Bulgaria, foreign employment, temporary job agency, work permit'
};

const FAQSection: React.FC = () => {
  const t = useTranslations()

  const faqs: FAQItem[] = [
    { questionKey: '1', answerKey: '1' },
    { questionKey: '2', answerKey: '2' },
    { questionKey: '3', answerKey: '3' },
    { questionKey: '4', answerKey: '4' },
    { questionKey: '5', answerKey: '5' },
    { questionKey: '6', answerKey: '6' },
    { questionKey: '7', answerKey: '7' },
    { questionKey: '8', answerKey: '8' },
    { questionKey: '9', answerKey: '9' },
    { questionKey: '10', answerKey: '10' },
    { questionKey: '11', answerKey: '11' },
    { questionKey: '12', answerKey: '12' },
    { questionKey: '13', answerKey: '13' },
    { questionKey: '14', answerKey: '14' },
    { questionKey: '15', answerKey: '15' },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const translatedFaqs = useMemo(() => faqs.map(faq => ({
    question: t(`faq.questions.${faq.questionKey}`),
    answer: t(`faq.answers.${faq.answerKey}`),
    originalQuestionKey: faq.questionKey,
    originalAnswerKey: faq.answerKey,
  })), [t]);

  const fuse = useMemo(() => new Fuse(translatedFaqs, {
    keys: ['question', 'answer'],
    threshold: 0.3,
  }), [translatedFaqs]);

  const results = useMemo(() => {
    if (!searchTerm) return translatedFaqs;
    return fuse.search(searchTerm).map(result => result.item);
  }, [searchTerm, fuse, translatedFaqs]);

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
    setCurrentPage(0);
  }, [searchTerm]);

  const displayedFAQs = results.slice(currentPage * pageSize, (currentPage + 1) * pageSize);

  return (
    <section className="max-w-2xl mx-auto p-4">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-4">FAQs</h2>
      <input
        type="text"
        placeholder={t("faq.searchPlaceholder")}
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
                expandedIndex === actualIndex ? '' : 'hover:bg-customTeal hover:text-white'
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
                  <div className="p-4 border-t border-gray-200 bg-gray-100">
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
          className="px-4 py-2 bg-customTeal text-white rounded hover:bg-customAmber"
        >
          {t("faq.prevButton")}
        </Button>
        <Button 
          onClick={nextPage}
          className="px-4 py-2 bg-customTeal text-white rounded hover:bg-customAmber"
        >
          {t("faq.nextButton")}
        </Button>
      </div>
    </section>
  );
};

export default FAQSection;
