"use client";

import React, { ChangeEvent, useTransition } from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

export default function ChangeLanguage() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const localActiveLanguage = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;

    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };

  return (
    <>
      <div className="relative inline-block text-left">
        <label
          id="language-switch"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          <span className="sr-only">Change Language</span>
        </label>

        <div className="relative mt-1">
          <select
            aria-labelledby="language-switch"
            defaultValue={localActiveLanguage}
            onChange={onSelectChange}
            disabled={isPending}
            className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-black ring-opacity-5 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
          >
            <option value="en">English</option>
            <option value="pl">Polish</option>
          </select>
        </div>
      </div>

      {/* <label
        id="language-switch"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        <p className="sr-only">Change Langugage</p>
        <select
          aria-labelledby="language-switch"
          defaultValue={localActiveLanguage}
          onChange={onSelectChange}
          disabled={isPending}
          className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
        >
          <option value="en">Engasdflish</option>
          <option value="pl">Polish</option>
        </select>
      </label> */}

      {/* <div className="relative">
        <label id="language-switch" className="sr-only">
          Language
        </label>

        <div className="inline-flex divide-x divide-amber-400 rounded-md shadow-md border border-solid">
          <div className="inline-flex items-center gap-x-1.5 rounded-l-md bg-white-600 px-3 py-2 text-dark-600">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
            >
              <path
                d="M14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28Z"
                fill="#F0F0F0"
              />
              <path
                d="M2.8942 5.47656C1.79448 6.90735 0.965258 8.55645 0.482422 10.348H7.76559L2.8942 5.47656Z"
                fill="#0052B4"
              />
              <path
                d="M27.5179 10.3479C27.0351 8.55646 26.2058 6.90735 25.1062 5.47656L20.2349 10.3479H27.5179Z"
                fill="#0052B4"
              />
              <path
                d="M0.482422 17.6523C0.965312 19.4438 1.79454 21.0929 2.8942 22.5236L7.76543 17.6523H0.482422Z"
                fill="#0052B4"
              />
              <path
                d="M22.5237 2.89413C21.0929 1.79442 19.4439 0.96519 17.6523 0.4823V7.76542L22.5237 2.89413Z"
                fill="#0052B4"
              />
              <path
                d="M5.47705 25.1059C6.90784 26.2056 8.55694 27.0348 10.3484 27.5177V20.2346L5.47705 25.1059Z"
                fill="#0052B4"
              />
              <path
                d="M10.3483 0.4823C8.55689 0.96519 6.90779 1.79442 5.47705 2.89407L10.3483 7.76536V0.4823Z"
                fill="#0052B4"
              />
              <path
                d="M17.6523 27.5177C19.4438 27.0348 21.0929 26.2056 22.5236 25.1059L17.6523 20.2346V27.5177Z"
                fill="#0052B4"
              />
              <path
                d="M20.2349 17.6523L25.1062 22.5237C26.2058 21.093 27.0351 19.4438 27.5179 17.6523H20.2349Z"
                fill="#0052B4"
              />
              <path
                d="M27.8815 12.1739H15.8262H15.8261V0.118508C15.2283 0.0406875 14.6189 0 14 0C13.381 0 12.7717 0.0406875 12.1739 0.118508V12.1738V12.1739H0.118508C0.0406875 12.7717 0 13.3811 0 14C0 14.619 0.0406875 15.2283 0.118508 15.8261H12.1738H12.1739V27.8815C12.7717 27.9593 13.381 28 14 28C14.6189 28 15.2283 27.9594 15.8261 27.8815V15.8262V15.8261H27.8815C27.9593 15.2283 28 14.619 28 14C28 13.3811 27.9593 12.7717 27.8815 12.1739Z"
                fill="#D80027"
              />
              <path
                d="M17.6519 17.6523L23.8991 23.8996C24.1865 23.6123 24.4606 23.312 24.7221 23.0008L19.3735 17.6522H17.6519V17.6523Z"
                fill="#D80027"
              />
              <path
                d="M10.3479 17.6523H10.3478L4.10059 23.8996C4.3878 24.1869 4.68809 24.461 4.99937 24.7225L10.3479 19.3739V17.6523Z"
                fill="#D80027"
              />
              <path
                d="M10.3476 10.3479V10.3478L4.10028 4.10046C3.81295 4.38768 3.53886 4.68797 3.27734 4.99925L8.62595 10.3479H10.3476V10.3479Z"
                fill="#D80027"
              />
              <path
                d="M17.6519 10.348L23.8992 4.10059C23.612 3.81326 23.3117 3.53917 23.0004 3.27771L17.6519 8.62631V10.348Z"
                fill="#D80027"
              />
            </svg>
            <p className="text-sm font-semibold">{selectedLanguage.label}</p>
          </div>
          <button
            type="button"
            className="inline-flex items-center rounded-l-none rounded-r-md bg-amber-600 p-2 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2 focus:ring-offset-gray-50"
            aria-haspopup="listbox"
            aria-expanded={isOpen}
            aria-labelledby="language-switch"
            onClick={toggleDropdown}
          >
            <span className="sr-only">Change Language Dropdown</span>
            <svg
              className="h-5 w-5 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {isOpen && (
          <ul
            className="absolute right-0 z-10 mt-2 w-32 origin-top-right divide-y divide-gray-200 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="listbox"
            aria-labelledby="language-switch"
          >
            {languages.map((language) => (
              <li
                key={language.code}
                className="cursor-pointer select-none px-4 py-2 text-sm text-gray-900"
                role="option"
                aria-selected={selectedLanguage.code === language.code}
                onClick={() => selectLanguage(language)}
              >
                <div className="flex items-center">
                  <p className="font-semibold">{language.label}</p>
                  {selectedLanguage.code === language.code && (
                    <svg
                      className="ml-2 h-5 w-5 text-emerald-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.293 6.293a1 1 0 00-1.414 0L10 10.586 8.707 9.293a1 1 0 00-1.414 1.414l2.5 2.5a1 1 0 001.414 0l5-5a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div> */}
    </>
  );
}
