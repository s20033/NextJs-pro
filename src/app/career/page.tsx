import { ContactSection } from '@/components/ContactSection';
import { Container } from '@/components/Container';
import { FadeIn } from '@/components/FadeIn';
import { PageIntro } from '@/components/PageIntro';
import { SectionIntro } from '@/components/SectionIntro';
import { GridList, GridListItem } from '@/components/GridList';
import { Metadata } from 'next';
import React, {useState} from 'react';

import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'


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

// function WhyWorkWithUs() {
//   return (
//     <Container className="mt-24 sm:mt-32 lg:mt-40">
//       <SectionIntro
//         eyebrow="Why Work With Us"
//         title="Explore the Benefits of Joining Our Team"
//       >
//         <p>
//           At Grupa Krayr, we are dedicated to providing exceptional career opportunities for international talent. Discover why working with us is a step towards a rewarding and fulfilling career.
//         </p>
//       </SectionIntro>
//       <div className="space-y-6 p-6">
//       <GridList>
//         <FadeIn>
//         <GridListItem title={'Access to Top Talents'}>
//             <p className="mt-2">
//               We connect you with skilled professionals from around the world, expanding your talent pool and enhancing your team.
//             </p>
//           </GridListItem>

//         </FadeIn>
//         <FadeIn>
//         <GridListItem title={'Cost Savings'}>
//             <p className="mt-2">
//               Overseas hiring can offer significant cost advantages compared to local hires, optimizing your staffing budget.
//             </p>
//           </GridListItem>
//         </FadeIn>
//         <FadeIn>
//         <GridListItem title={'Competitive Edge'}>
//             <p className="mt-2">
//               Diversify your workforce and gain a competitive advantage in the global market by integrating international talent.
//             </p>
//           </GridListItem>
//         </FadeIn>
//         </GridList>
//       </div>
//     </Container>
//   );
// }

function ExpertiseInOverseasHire() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
    <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
      <GridPattern
        className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
        yOffset={-270}
      />
    </div>

      <SectionIntro
        eyebrow="Our Expertise"
        title="Comprehensive Services for Overseas Hiring"
      >
        <p className=''>
          Our expertise in overseas hiring ensures that both companies and international workers receive the support they need for a seamless experience.
        </p>
        </SectionIntro>
        <Container className="mt-24">

      <GridList>
        <FadeIn>
          <GridListItem title="Recruitment">
            We assist in finding the best global talent to meet your business needs.
          </GridListItem>
        </FadeIn>
        <FadeIn>
          <GridListItem title="Onboarding and Support">
            We provide comprehensive support to ensure a seamless transition for your new hires.
          </GridListItem>
        </FadeIn>
        <FadeIn>
          <GridListItem title="Visa and Immigration">
            Our team navigates the complex visa and immigration process on your behalf.
          </GridListItem>
        </FadeIn>
      </GridList>
    </Container>
    </div>
  );
}

function LegalizationServices() {
    return (
      <div className="mt-24 rounded-4xl bg-teal-950 py-5 sm:mt-32 lg:mt-40 lg:py-32">
        <SectionIntro
          eyebrow="Legalization Services"
          title="Smooth and Compliant Legalization for Foreign Workers"
          invert
        >
          <p>
            Grupa Krayr offers comprehensive legalization services to ensure that your international staffing is compliant and hassle-free.
          </p>
        </SectionIntro>
        <Container className="mt-16">
          <GridList>
            <FadeIn>
              <GridListItem title="Visa and Work Permit Assistance" invert>
                We handle the application and renewal of work visas and permits, ensuring compliance with legal requirements, so your employees can work legally and efficiently.
              </GridListItem>
            </FadeIn>
            <FadeIn>
              <GridListItem title="Compliance with Immigration Laws" invert>
                Our team ensures adherence to immigration regulations, navigating complex legal frameworks to keep your operations compliant and stress-free.
              </GridListItem>
            </FadeIn>
            <FadeIn>
              <GridListItem title="Document Verification" invert>
                We assist in the verification and translation of essential documents for a smooth onboarding process, ensuring authenticity and legality.
              </GridListItem>
            </FadeIn>
            <FadeIn>
              <GridListItem title="Ongoing Support" invert>
                We provide continuous support to address any legal or bureaucratic issues that may arise, ensuring your workforce remains compliant and productive.
              </GridListItem>
            </FadeIn>
          </GridList>
        </Container>
      </div>
    );
  }

  import { CurrencyDollarIcon, BriefcaseIcon, MapPinIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';
import { StylizedImage } from '@/components/StylizedImage';
import { JobCard } from '@/components/JobCard';
import { JobListings } from '@/components/JobListings';
import { GridPattern } from '@/components/GridPattern';
  
  // Define the job opening type
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
  
  // Job openings data
  const jobOpenings: JobOpening[] = [
    {
      title: 'Software Engineer',
      company: 'TechPro Poland',
      logo: logoPhobiaDark,
      salary: '50-70 PLN',
      contractType: 'Full-time',
      location: 'Warsaw',
      workType: 'Hybrid',
      description: 'Develop innovative software solutions using modern technologies. Strong skills in React and Node.js required.',
    },
    {
      title: 'Data Scientist',
      company: 'DataInsights',
      logo: logoPhobiaDark,
      salary: '60-80 PLN',
      contractType: 'Full-time',
      location: 'Krakow',
      workType: 'Remote',
      description: 'Analyze complex datasets and create predictive models. Expertise in Python and machine learning algorithms essential.',
    },
    {
      title: 'DevOps Engineer',
      company: 'CloudScale',
      logo: logoPhobiaDark,
      salary: '55-75 PLN',
      contractType: 'Full-time',
      location: 'Wroclaw',
      workType: 'Hybrid',
      description: 'Implement and manage CI/CD pipelines. Experience with AWS, Docker, and Kubernetes required.',
    },
    {
      title: 'UX/UI Designer',
      company: 'DesignHub',
      logo: logoPhobiaDark,
      salary: '45-65 PLN',
      contractType: 'Full-time',
      location: 'Gdansk',
      workType: 'Stationary',
      description: 'Create intuitive and visually appealing user interfaces. Proficiency in Figma and Adobe Creative Suite needed.',
    },
    {
      title: 'Cybersecurity Specialist',
      company: 'SecureNet',
      logo: logoPhobiaDark,
      salary: '55-75 PLN',
      contractType: 'Full-time',
      location: 'Poznan',
      workType: 'Hybrid',
      description: 'Protect organizational assets from cyber threats. Knowledge of network security and ethical hacking required.',
    },
    {
      title: 'Full Stack Developer',
      company: 'WebSolutions',
      logo: logoPhobiaDark,
      salary: '50-70 PLN',
      contractType: 'Full-time',
      location: 'Lodz',
      workType: 'Remote',
      description: 'Build end-to-end web applications. Proficiency in both frontend (React) and backend (Node.js, Python) technologies needed.',
    },
  ];
  
 function CurrentOpportunities() {
    return (
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <SectionIntro
          eyebrow="Current Opportunities"
          title="Explore Our Open Positions"
        >
          <p>
            Discover the exciting career opportunities available at Grupa Krayr. Join our team and make a difference in the world of recruitment and staffing.
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
  return (
    <>
          <PageIntro eyebrow="Career" title="Join Our Team at Grupa Krayr">
        <p>
          At Grupa Krayr, we offer a unique opportunity to be part of a team that is dedicated to revolutionizing the recruitment industry. Discover how you can make a difference and grow with us.
        </p>
      </PageIntro>

      <ExpertiseInOverseasHire />
      <LegalizationServices />
      <CurrentOpportunities />
      
      <ContactSection />
    </>
  );
}
