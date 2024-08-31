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
