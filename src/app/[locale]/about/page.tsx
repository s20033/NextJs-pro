import { ContactSection } from "../components/ContactSection";
import { Container } from "../components/Container";
import { GridList, GridListItem } from "../components/GridList";
import { PageIntro } from "../components/PageIntro";
import { PageLinks } from "../components/PageLinks";
import { SectionIntro } from "../components/SectionIntro";
import { StatList, StatListItem } from "../components/StatList";
import { loadArticles } from "@/lib/mdx";
import { Metadata } from "next";
import React from "react";
import Image from "next/image";
import imageBlakeReid from "@/images/team/blake-reid.jpg";
import imageChelseaHagon from "@/images/team/chelsea-hagon.jpg";
import imageDriesVincent from "@/images/team/dries-vincent.jpg";
import imageEmmaDorsey from "@/images/team/emma-dorsey.jpg";
import imageKathrynMurphy from "@/images/team/kathryn-murphy.jpg";
import imageLeonardKrasner from "@/images/team/leonard-krasner.jpg";
import imageLeslieAlexander from "@/images/team/leslie-alexander.jpg";
import imageMichaelFoster from "@/images/team/michael-foster.jpg";
import { FadeIn, FadeInStagger } from "../components/FadeIn";
import { Border } from "../components/Border";
import { GridPattern } from "../components/GridPattern";
import { useTranslations } from "next-intl";

// {t("")..
function Culture() {
  const t = useTranslations("Culture");
  return (
    <div className="mt-24 rounded-4xl bg-teal-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro eyebrow="Our culture - 3Es" title={t("title")} invert>
        {/* <p>{t("hero")}</p> */}
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title={t("Equality")} invert>
          {t("Equality_description")}
          </GridListItem>
          <GridListItem title={t("Empathy")} invert>
          {t("Empathy_description")}
          </GridListItem>
          <GridListItem title={t("Empowerment")} invert>
          {t("Empowerment_description")}
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
}

function Values() {
  const t = useTranslations("Values")
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
        <p>
        {t("description")}

        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title={t("Meticulous")}
          >
            {t("Meticulous_description")}
          </GridListItem>
          <GridListItem title={t("Efficient")}
          >
           {t("Efficient_description")}
          </GridListItem>
          <GridListItem title={t("Adaptable")} >
          {t("Adaptable_description")}
          </GridListItem>
          <GridListItem title={t("Honest")}
          >
           {t("Honest_description")}
          </GridListItem>
          <GridListItem title={t("Loyal")}
          >
           {t("Loyal_description")}
          </GridListItem>
          <GridListItem title={t("Innovative")}
          >
           {t("Innovative_description")}
        </GridListItem>
        </GridList>
      </Container>
    </div>
  );
}

const team = [
  {
    title: "Leadership",
    people: [
      {
        name: "Shephali Ghimire",
        role: "Co-Founder / Marketing Director",
        image: { src: imageLeslieAlexander },
      },
      {
        name: "Suman Bhurtel",
        role: "Co-Founder / CEO",
        image: { src: imageDriesVincent },
      },
    ],
  },
  {
    title: "Team",
    people: [
      {
        name: "Maftuna Azadova",
        role: "Adminstrator",
        image: { src: imageChelseaHagon },
      },
      {
        name: "Mieraf Tesfaye",
        role: "Digital Marketing specialist ",
        image: { src: imageEmmaDorsey },
      },
      {
        name: "Leonard Krasner",
        role: "VP, User Experience",
        image: { src: imageLeonardKrasner },
      },
      {
        name: "Maciej Zieliński",
        role: "Accountant / Financial Advisor",
        image: { src: imageBlakeReid },
      },
      {
        name: "Patrycja Machajska",
        role: "Business Developer",
        image: { src: imageKathrynMurphy },
      },
      {
        name: "Blake Reid",
        role: "Senior Recruiter",
        image: { src: imageMichaelFoster },
      },
    ],
  },
];
function Team() {
  const t = useTranslations("Team")
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  );
}

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Grupa Krayr is a leading recruitment agency specializing in worker leasing, temporary staffing, and overseas hiring. We focus on providing skilled workforce solutions for medium and large companies, with expertise in legalizing foreign workers from Eastern Europe and Asia.",
};

export default  function About() {
  const t = useTranslations("PageIntro")
  // let blogArticles = (await loadArticles()).slice(0, 2);

  return (
    <>
      <PageIntro eyebrow={t("eyebrow")} title={t("title")}>
        <p>
          {t("description")}
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            {t("content1")}
          </p>
          <p>
            {t("content2")}
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value={t("HappyTalents")} label={t("HappyTalentsLabel")} />
          <StatListItem value={t("HappyClients")} label={t("HappyClientsLabel")} />
          <StatListItem value={t("InvoicesBilled")} label={t("InvoicesBilledLabel")} />
        </StatList>
      </Container>
      <Culture />
      <Values />
      <Team />

      {/* <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the blog"
        intro="Stay informed with the latest industry updates as our team explores innovative solutions and shares insights on workforce trends and staffing strategies."
        pages={blogArticles}
      /> */}

      <ContactSection />
    </>
  );
}
