import { ContactSection } from '../components/ContactSection';
import { Container } from '../components/Container';
import { FadeIn } from '../components/FadeIn';
import { PageIntro } from '../components/PageIntro';
import { SectionIntro } from '../components/SectionIntro';
import { GridList, GridListItem } from '../components/GridList';
import { Metadata } from 'next';
import React, {useState} from 'react';
import { StylizedImage } from '../components/StylizedImage';
import { JobCard } from '../components/JobCard';
import { JobListings } from '../components/JobListings';
import { GridPattern } from '../components/GridPattern';
import logoPolixnovDark from '@/images/clients/polixnov/polix-dark.svg'
import  {jobOpenings}  from '@/data/jobOpenings'; 
import { useTranslations } from 'next-intl';

function Section({
    title,
    image,
    children,
  }: {
    title: string
    image: React.ComponentPropsWithoutRef<typeof StylizedImage>
    children: React.ReactNode
  }) {
    return (
      <Container className="group/section [counter-increment:section]">
        <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
          <div className="flex justify-center">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                {...image}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end lg:group-even/section:justify-start"
              />
            </FadeIn>
          </div>
          <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
            <FadeIn>
              <div
                className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
                aria-hidden="true"
              />
              <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
                {title}
              </h2>
              <div className="mt-6">{children}</div>
            </FadeIn>
          </div>
        </div>
      </Container>
    )
  }


function ExpertiseInOverseasHire() {
  const t = useTranslations("expertiseSection")
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
    <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
      <GridPattern
        className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
        yOffset={-270}
      />
    </div>

      <SectionIntro
        eyebrow={t("eyebrow")}
        title={t("title")}
      >
        <p className=''>
          {t("text")}
        </p>
        </SectionIntro>
        <Container className="mt-24">

      <GridList>
        <FadeIn>
          <GridListItem title={t("recruitmentTitle")}>
            {t("recruitmentText")}
          </GridListItem>
        </FadeIn>
        <FadeIn>
          <GridListItem title={t("onboardingTitle")}>
          {t("onboardingText")}
          </GridListItem>
        </FadeIn>
        <FadeIn>
          <GridListItem title={t("visaTitle")}>
          {t("visaText")}
          </GridListItem>
        </FadeIn>
      </GridList>
    </Container>
    </div>
  );
}

function LegalizationServices() {
  const t = useTranslations("legalizationSection");
    return (
      <div className="mt-24 rounded-4xl bg-teal-950 py-5 sm:mt-32 lg:mt-40 lg:py-32">
        <SectionIntro
          eyebrow= {t("eyebrow")}
          title={t("title")}
          invert
        >
          <p>
          {t("text")}
          </p>
        </SectionIntro>
        <Container className="mt-16">
          <GridList>
            <FadeIn>
              <GridListItem title={t("visaAssistanceTitle")} invert>
              {t("visaAssistanceText")}
              </GridListItem>
            </FadeIn>
            <FadeIn>
              <GridListItem title={t("complianceTitle")} invert>
              {t("complianceText")}
              </GridListItem>
            </FadeIn>
            <FadeIn>
              <GridListItem title={t("documentVerificationTitle")} invert>
              {t("documentVerificationText")}
              </GridListItem>
            </FadeIn>
            <FadeIn>
              <GridListItem title={t("ongoingSupportTitle")} invert>
              {t("ongoingSupportText")}
              </GridListItem>
            </FadeIn>
          </GridList>
        </Container>
      </div>
    );
  }


  
 function CurrentOpportunities() {
  const t = useTranslations("currentOpportunitiesSection")
    return (
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <SectionIntro
          eyebrow={t("eyebrow")}
          title={t("title")}
        >
          <p>
          {t("text")}
          </p>
        </SectionIntro>
        <JobListings jobOpenings={jobOpenings} />
      </Container>
    );
  }
  




export const metadata: Metadata = {
  title: 'Careers',
  description: 'Explore career opportunities with Grupa Krayr. Learn about our expertise in overseas hiring, legalization services, and current job openings. Join a team that values innovation and supports international talent.',
};

export default function Careers() {
  const t = useTranslations("career")
  return (
    <>
          <PageIntro eyebrow= {t("introEyebrow")} title={t("introTitle")}>
        <p>
        {t("introText")}
        </p>
      </PageIntro>

      <ExpertiseInOverseasHire />
      <LegalizationServices />
      <CurrentOpportunities />
      
      <ContactSection />
    </>
  );
}
