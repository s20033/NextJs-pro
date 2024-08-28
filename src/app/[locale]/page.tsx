import {CookieConsent} from './components/CookieConsent';
import Image from "next/image";
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoVedascoLight from '@/images/clients/vedasco/vedascoW.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPolixnovDark from '@/images/clients/polixnov/polix-dark.svg'
import logoPolixnovLight from '@/images/clients/polixnov/polix-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'

import { useTranslations } from "next-intl";
import { Container } from './components/Container';
import { FadeIn, FadeInStagger } from './components/FadeIn';
import { SectionIntro } from './components/SectionIntro';
import { StylizedImage } from './components/StylizedImage';
import { List, ListItem } from './components/List';
import { GridPattern } from './components/GridPattern';
import { GridList, GridListItem } from './components/GridList';
import { Testimonial } from './components/Testimonial';
import { ContactSection } from './components/ContactSection';


const industries = [
  // ['Polixnov Logistics', logoPolixnovLight],
  // ['Vedasco', logoVedascoLight],
  // ['Unseal', logoUnseal],
  // ['Mail Smirk', logoMailSmirk],
  ['Home Work', logoHomeWork],
  ['Green Life', logoGreenLife],
  ['Bright Path', logoBrightPath],
  ['North Adventures', logoNorthAdventures],
]
function Industries() {
  const t = useTranslations("Industries")
  return (
    <div className="mt-24 rounded-4xl bg-teal-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
          {t("title")}
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
                  <Image src={logo} alt={industry}  />
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
  const t = useTranslations("Services")

  return (
    <>
      <SectionIntro
        eyebrow={t("eyebrow")}
        title={t("title")}
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
        {t("description")}
        </p>
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
            <ListItem title={t("recruitmentTitle")}>
            {t("recruitmentDescription")}
            </ListItem>
            <ListItem title={t("outsourcingTitle")}>
            {t("outsourcingDescription")}
            </ListItem>
            <ListItem title={t("staffingTitle")}>
          {t("staffingDescription")}
            </ListItem>
            <ListItem title={t("legalizationTitle")}>
            {t("legalizationDescription")}
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

function Reasons() {
  const t = useTranslations("Reasons");
  return (
    <div className="relative mt-0 pt-24 sm:mt-32 sm:pt-32 lg:mt-0 lg:pt-40">
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
        <p>
         {t("description")}
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title={t("globalReachTitle")}>
          {t("globalReachDescription")}
          </GridListItem>
          <GridListItem title={t("quickEfficientTitle")}>
            {t("quickEfficientDescription")}
        </GridListItem>
          <GridListItem title={t("laborLawTitle")}>
          {t("laborLawDescription")}
          </GridListItem>
          <GridListItem title={t("employmentCostTitle")}>
          {t("employmentCostDescription")}
          </GridListItem>
          <GridListItem title={t("testingTitle")}>
          {t("testingDescription")}
          </GridListItem>
          <GridListItem title={t("innovationTitle")}>
          {t("innovationDescription")}
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}


export default  function Home() {
  const t = useTranslations("Home");
  return (
    <>
    <CookieConsent/>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-teal-900 [text-wrap:balance] sm:text-7xl">
            {t("headline")}
          </h1>
          <p className="mt-6 text-xl text-gray-600">
          {t("description")}
          </p>
        </FadeIn>
      </Container>
      <Industries />
      <Services/>
      <Reasons/>
      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: "Pollixnov Logistics", logo: logoPolixnovDark }}>
          {t("quote")}    
      </Testimonial>

      
      <ContactSection/>
 
     

</>
  );
}
