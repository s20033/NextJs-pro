
import { Metadata } from "next"
import { Blockquote } from '../components/Blockquote'
import { ContactSection } from '../components/ContactSection'
import { Container } from '../components/Container'
import { FadeIn } from '../components/FadeIn'
import { GridList, GridListItem } from '../components/GridList'
import { GridPattern } from '../components/GridPattern'
import { List, ListItem } from '../components/List'
import { PageIntro } from '../components/PageIntro'
import { SectionIntro } from '../components/SectionIntro'
import { StylizedImage } from '../components/StylizedImage'
import { TagList, TagListItem } from '../components/TagList'
import imageLaptop from '@/images/discover.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/support.jpg'
import FAQSection from "../components/FAQs"
import { useTranslations } from "next-intl"


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
  function Needs() {
    const t = useTranslations("process.needsSection")
    return (
      <Section title={t("title")} image={{ src: imageLaptop, shape: 1 }}>
        <div className="space-y-6 text-base text-neutral-600">
          {/* <p>
          We work closely with our clients to understand their <strong className="font-semibold text-neutral-950">needs</strong>, embedding ourselves in their every day operations to understand their staffing need. 
          Hiring workers is not always the solution, hiring the <strong className="font-semibold text-neutral-950">right person</strong> is what we offer to make your business thrive. 
          </p> */}
<p
      dangerouslySetInnerHTML={{
        __html: t('description'),
      }}
    />
          <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
          {t("approachTitle")} </h3>
          <List className="mt-8">
          <ListItem title={t("detailedQuestionnaires")}>
          {t("detailedQuestionnaires")}
          </ListItem> 
            <ListItem title={t("employeeSurveys")}>
            {t("employeeSurveysText")}
            </ListItem> 
            <ListItem title={t("feasibilityStudies")}>
            {t("feasibilityStudiesText")}
            </ListItem> 
          </List>

          <p>
          {t("costEffectiveSolution")}
          </p>
        </div>
  
        <Blockquote
          author={{ name: 'Debra Fiscal', role: 'CEO of Unseal' }}
          className="mt-12"
        >
          {t("blockquoteText")}
        </Blockquote>
      </Section>
    )
  }
  
  function Solutions() {

    const t = useTranslations("process.solutionsSection")

    const tagListItems = [
      t('tagListItems.0'),
      t('tagListItems.1'),
      t('tagListItems.2'),
      t('tagListItems.3'),
      t('tagListItems.4'),
      t('tagListItems.5'),
    ];  
    return (
      <Section title={t("title")} image={{ src: imageWhiteboard }}>
        <div className="space-y-6 text-base text-neutral-600">
          {/* <p>
          At Grupa Krayr, we meticulously select the ideal candidates from our extensive 
          talent pool, ensuring alignment with your {' '} <strong className="font-semibold text-neutral-950">
         business goals</strong>. Our thorough selection process includes verifying past experiences and skills, 
          and conducting comprehensive job interviews both online and face-to-face for your convenience.
          </p>
          <p>
          Our solution delivery process encompasses scrupulous candidate profile 
          verification, tailored interviews, and {' '} <strong className="font-semibold text-neutral-950">smooth hiring</strong>{' '}implementation. 
          We prioritize accuracy and efficiency to match your needs perfectly.
          </p>
          <p>
          Our dedicated project managers work closely with your 
          representatives to ensure a seamless transition and provide ongoing support for new hires, 
          fostering a successful{' '} <strong className="font-semibold text-neutral-950">integration</strong>{' '}into your team
          </p> */}
          <p>
          {t("description")}
          </p>
          <p>
          {t("solutionDeliveryText")}
          </p>
          <p>
          {t("integrationText")}
          </p>
        </div>
  
        <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        {t("includedInThisPhaseTitle")}
        </h3>
        {/* <TagList className="mt-4">
          <TagListItem>In-depth questionnaires</TagListItem>
          <TagListItem>Candidate selection</TagListItem>
          <TagListItem>Business goals</TagListItem>
          <TagListItem>Profile verification</TagListItem>
          <TagListItem>Tailored interviews</TagListItem>
          <TagListItem>smooth hiring implementation</TagListItem>
        </TagList> */}
        
        <TagList className="mt-4">
      {tagListItems.map((item, index) => (
        <TagListItem key={index}>{item}</TagListItem>
      ))}
    </TagList>
      </Section>
    )
  }
  

  
  function Deliver() {
    const t = useTranslations("process.deliverSection")


    return (
      <Section title={t("title")} image={{ src: imageMeeting, shape: 2 }}>
        <div className="space-y-6 text-base text-neutral-600">
          {/* <p>
          Our commitment to your success extends beyond the hiring process. 
          We provide continuous{' '}<strong className="font-semibold text-neutral-950">
              support
            </strong> to ensure the seamless integration and 
          ongoing success of new employees in your company.
          </p>
          <p>
          Our comprehensive support process includes regular visits, 
          orientation and training sessions, counseling, and organizing events 
          and gatherings. These measures ensure your new hires {' '}
          <strong className="font-semibold text-neutral-950">adapt </strong> quickly and efficiently to your business environment.
          </p>
          <p>
          By offering ongoing support, we guarantee that your new employees 
          will thrive and make meaningful contributions to your company’s growth and.{' '}
            <strong className="font-semibold text-neutral-950">
            success
            </strong>.
          </p> */}

        <p>  

        {t("description")}
        </p>
        <p>
          
        {t("supportProcessText")}
        </p>
        <p>

        {t("successText")}
        </p>
        </div>
  
        <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        {t("includedInThisPhaseTitle")}
        </h3>
        <List className="mt-8">
          <ListItem title={t("listItems1")}>
          {t("supportAndCoordinationText")}
          </ListItem>
          <ListItem title={t("listItems2")}>
          {t("specializedCoordinationText")}
          </ListItem>
          <ListItem title={t("listItems3")}>
          {t("comprehensiveIntegrationText")}
         </ListItem>
        </List>
      </Section>
    )
  }
  
  

export const metadata: Metadata = {
    title: 'Our Process',
    description:
      'We believe in efficiency and effectiness of resources to provide the top-notch staffing solution to our clients.',
  }
  
  export default function Process() {
    const t = useTranslations("process")
    return (
      <>
        <PageIntro eyebrow={t("introEyebrow")} title={t("introTitle")}>
          <p>
          {t("introText")} 
          </p>
        </PageIntro>
  
        <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
          <Needs />
          <Solutions />
          <Deliver />
          <FAQSection/>
        </div>

  
        <ContactSection />
      </>
    )
  }
  