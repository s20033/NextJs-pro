import { ContactSection } from "@/components/ContactSection";
import { Container } from "@/components/Container";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import {CookieConsent} from '@/components/CookieConsent';
import Image from "next/image";
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import { SectionIntro } from "@/components/SectionIntro";
import { StylizedImage } from "@/components/StylizedImage";
import { List, ListItem } from "@/components/List";
import { Testimonial } from "@/components/Testimonial";
import { GridList, GridListItem } from "@/components/GridList";
import { GridPattern } from "@/components/GridPattern";


const industries = [
  ['Phobia', logoPhobiaLight],
  ['Family Fund', logoFamilyFund],
  ['Unseal', logoUnseal],
  ['Mail Smirk', logoMailSmirk],
  ['Home Work', logoHomeWork],
  ['Green Life', logoGreenLife],
  ['Bright Path', logoBrightPath],
  ['North Adventures', logoNorthAdventures],
]
function Industries() {
  return (
    <div className="mt-24 rounded-4xl bg-teal-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            We work in these industries with our expert team
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {industries.map(([industry, logo]) => (
              <li key={industry}>
                <FadeIn>
                  <Image src={logo} alt={industry} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

// This is Home Service Section 
function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="Our Comprehensive Services - Recruitment, Temporary-Staffing, and Process Outsourcing"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
        Experience seamless, cost-effective recruitment with Grupa Krayr&apos;s innovative platform, connecting you with top international talent without upfront costs. Our "no win, no pay" model ensures you only pay for successful hires, making global recruitment efficient and affordable.   </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Recruitment Services">
            Grupa Krayr offers specialized recruitment services in Poland to help you find the perfect candidates for high-performing teams. 
            Our rigorous selection process ensures you get the best talent available.
            </ListItem>
            <ListItem title="Process Outsourcing">
            Focus on your core business activities while we handle your projects needs. 
            Our process outsourcing services provide efficient and compliant workforce solutions tailored to your company.
            We get you things done while we take care of your projects.

            </ListItem>
            <ListItem title="Temporary Staffing">
            Need flexible, short-term, and project-based staffing solutions in your business?
             Our temporary staffing services ensure you have the right personnel exactly when you need them, without the long-term commitment.
            </ListItem>
            <ListItem title="Legalization of Foreigners">
            Grupa Krayr offers comprehensive legalization services for foreign workers, ensuring a smooth and compliant process for international staffing.
            We extensively handle the Visa and Work permit assistance complying with the immigration laws.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

function Reasons() {
  return (
    <div className="relative mt-0 pt-24 sm:mt-32 sm:pt-32 lg:mt-0 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Your reasons"
        title="Why Choose Grupa Krayr?"
      >
        <p>
          Here are the top reasons, why we are the best employment agency
          and how our services are suitable for you. 
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Global Reach">
          Our extensive network allows us to source top talent from around the world, meeting your global recruitment needs.
          </GridListItem>
          <GridListItem title="Quick and Efficient">
          We prioritize speed and efficiency, optimizing our recruitment process to save time and resources for your business.
          </GridListItem>
          <GridListItem title="Navigating International Labor Law">
          We expertly navigate international labor laws, ensuring a smooth and compliant recruitment process.
          </GridListItem>
          <GridListItem title="Reduced Employment Costs">
          Our cost-effective solutions help reduce employment costs while providing top-quality talent.
          </GridListItem>
          <GridListItem title="Rigorous Candidate Testing">
          We rigorously test potential employees, ensuring only the most qualified candidates are presented to you.
          </GridListItem>
          <GridListItem title="Innovation">
          We leverage the latest technologies to deliver efficient and effective staffing solutions
          that keep you ahead of the competition.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export default async function Home() {
  return (
    <>
    <CookieConsent/>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-emerald-900 [text-wrap:balance] sm:text-7xl">
          Grupa Krayr: A Top Staffing Agency for Poland and Beyond
          </h1>
          <p className="mt-6 text-xl text-gray-600">
          We provide flexible, skilled workforce solutions for medium and large companies, specializing in worker leasing, temporary staffing, overseas hiring, and legalization of foreign workers from Eastern Europe and Asia.
          </p>
        </FadeIn>
      </Container>
      <Industries />
      <Services/>
      <Reasons/>
      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Alstom', logo: logoPhobiaDark }}
      >
        Grupa Krayr&apos;s expertise and personalized approach made our hiring process seamless. We are satisfied with the quality of candidates they&apos;ve provided.
      
      </Testimonial>
      
      <ContactSection/>

</>
  );
}
