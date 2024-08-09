import { type Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Blockquote } from "@/components/Blockquote";
import { Border } from "@/components/Border";
import { Button } from "@/components/Button";
import { ContactSection } from "@/components/ContactSection";
import { Container } from "@/components/Container";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import { PageIntro } from "@/components/PageIntro";
import { formatDate } from "@/lib/formatDate";
import { type CaseStudy, type MDXEntry, loadCaseStudies } from "@/lib/mdx";
import { StylizedImage } from "@/components/StylizedImage";
import imageLaptop from "@/images/services/welding.jpg";
import imageMeeting from "@/images/services/production.jpg";
import imageWhiteboard from "@/images/services/warehouse.jpg";
import imageHospitality from "@/images/services/hospitality.jpg";
import imageAgriculture from "@/images/services/farm.jpg";
import { TagList, TagListItem } from "@/components/TagList";
import { SectionIntro } from "@/components/SectionIntro";
import { GridList, GridListItem } from "@/components/GridList";
import { GridPattern } from "@/components/GridPattern";

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>;
}) {
  return (
    <Container className="mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Case studies
        </h2>
      </FadeIn>
      <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
        {caseStudies.map((caseStudy) => (
          <FadeIn key={caseStudy.client}>
            <article>
              <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
                <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                  <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                    <Image
                      src={caseStudy.logo}
                      alt=""
                      className="h-16 w-16 flex-none"
                      unoptimized
                    />
                    <h3 className="mt-6 text-sm font-semibold text-neutral-950 sm:mt-0 lg:mt-8">
                      {caseStudy.client}
                    </h3>
                  </div>
                  <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                    <p className="text-sm tracking-tight text-neutral-950 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden">
                      {caseStudy.service}
                    </p>
                    <p className="text-sm text-neutral-950 lg:mt-2">
                      <time dateTime={caseStudy.date}>
                        {formatDate(caseStudy.date)}
                      </time>
                    </p>
                  </div>
                </div>
                <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                  <p className="font-display text-4xl font-medium text-neutral-950">
                    <Link href={caseStudy.href}>{caseStudy.title}</Link>
                  </p>
                  <div className="mt-6 space-y-6 text-base text-neutral-600">
                    {caseStudy.summary.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="mt-8 flex">
                    <Button
                      href={caseStudy.href}
                      aria-label={`Read case study: ${caseStudy.client}`}
                    >
                      Read case study
                    </Button>
                  </div>
                  {caseStudy.testimonial && (
                    <Blockquote
                      author={caseStudy.testimonial.author}
                      className="mt-12"
                    >
                      {caseStudy.testimonial.content}
                    </Blockquote>
                  )}
                </div>
              </Border>
            </article>
          </FadeIn>
        ))}
      </div>
    </Container>
  );
}

function Section({
  title,
  image,
  children,
}: {
  title: string;
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>;
  children: React.ReactNode;
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
  );
}

function Block1() {
  return (
    <Section
      title="Specialized Welding and Process Outsourcing"
      image={{ src: imageLaptop, shape: 1 }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        {/* <p>
            Based off of the discovery phase, we develop a comprehensive roadmap
            for each product and start working towards delivery. The roadmap is an
            intricately tangled mess of technical nonsense designed to drag the
            project out as long as possible.
          </p> */}
        <p>
          Grupa Krayr&apos;s{" "}
          <strong className="font-semibold text-neutral-950">
            process outsourcing
          </strong>{" "}
          services are tailored for the{" "}
          <strong className="font-semibold text-neutral-950">
            welding sector
          </strong>
          . Our expert engineers collaborate with clients to understand their
          specific needs and deliver teams of{" "}
          <strong className="font-semibold text-neutral-950">
            qualified welders
          </strong>
          , coordinators, and helpers to complete projects efficiently. Our
          hands-on approach and continuous support ensure project success and
          client satisfaction.
        </p>
        <p>
          Our welding teams are equipped with the latest tools and techniques to
          deliver high-quality work that meets industry standards. By
          outsourcing your welding projects to Grupa Krayr, you gain access to a
          pool of skilled professionals who can handle complex tasks with
          precision and expertise. We provide ongoing support throughout the
          project lifecycle, ensuring that your projects are completed on time
          and within budget.
        </p>
      </div>

      <Blockquote
        author={{ name: "Debra Fiscal", role: "CEO of Alstom" }}
        className="mt-12"
      >
        Our welding projects have never been smoother since we started working
        with Grupa Krayr&apos;s expert team.
      </Blockquote>
    </Section>
  );
}

function Block2() {
  return (
    <Section
      title="Production and Manufacturing Employee Leasing"
      image={{ src: imageMeeting, shape: 2 }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Our reputation for excellence in the production and manufacturing
          industries is built on providing reliable and skilled employees. Our focus on
          thorough vetting and training ensures that our employees contribute
          effectively to your{' '}<strong className="font-semibold text-neutral-950">
            production goals
          </strong>.
        </p>
        <p>
          By leasing employees from Grupa Krayr, you benefit from a flexible
          workforce that can be adjusted to meet the demands of your production
          schedules. Our{' '}<strong className="font-semibold text-neutral-950">
           leasing model
          </strong>{" "}provides you with the manpower you need
          without the long-term commitment, allowing you to scale up or down
          based on your operational requirements. We take care of all{' '}
          <strong className="font-semibold text-neutral-950">
            administrative tasks
          </strong>, including payroll and compliance, so you can
          focus on what you do best – manufacturing quality products
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
          Talents that we can provide to you
        </h3>
        <TagList className="mt-4">
        <TagListItem>Machine operators </TagListItem>
        <TagListItem>Assembly line workers</TagListItem>
        <TagListItem>Packers</TagListItem>
        <TagListItem>Production helpers</TagListItem>
        <TagListItem>Quality control inspectors</TagListItem>
      </TagList>



      {/* <List className="mt-8">
          <ListItem title="Testing">
            Our projects always have 100% test coverage, which would be impressive
            if our tests weren’t as porous as a sieve.
          </ListItem>
          <ListItem title="Infrastructure">
            To ensure reliability we only use the best Digital Ocean droplets that
            $4 a month can buy.
          </ListItem>
          <ListItem title="Support">
            Because we hold the API keys for every critical service your business
            uses, you can expect a lifetime of support, and invoices, from us.
          </ListItem>
        </List> */}
    </Section>
  );
}

function Block3() {
  return (
    <Section
      title="Logistics and Warehouse Expertise"
      image={{ src: imageWhiteboard }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Efficiency and reliability are crucial in the logistics and warehouse
          sector. We understand the fast-paced nature of this industry and provide workers
          who can handle the demands with precision and dedication. Our team is
          adept at managing the complexities of logistics operations, ensuring
          your supply chain remains uninterrupted.{" "}
        </p>
        <p>
          We pride ourselves on our ability to quickly adapt to your specific
          needs, providing you with a flexible workforce that can scale with
          your operations. Whether you need temporary or parmanent recuits or additional support during peak
          seasons or specialized skills for specific projects, Grupa Krayr has
          the resources to ensure your warehouse and logistics operations run
          smoothly.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Our staffing solutions include
      </h3>
      <TagList className="mt-4">
        <TagListItem>warehouse workers</TagListItem>
        <TagListItem>inventory managers</TagListItem>
        <TagListItem>Drivers</TagListItem>
        <TagListItem>logistics coordinators</TagListItem>
        <TagListItem>Forklift operators</TagListItem>
        <TagListItem>Loader/unloader</TagListItem>
      </TagList>
    </Section>
  );
}
function Block4() {
  return (
    <Section
      title="Excellence in Hospitality Staffing"
      image={{ src: imageHospitality, shape: 1 }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          In the hospitality industry, delivering exceptional service is
          paramount. We provide highly trained hospitality staff who excel in
          roles such as hotel management, event coordination, and customer
          service. Our rigorous selection process ensures that only the most
          dedicated and professional candidates join your team, enhancing your
          guests&apos; experience and maintaining your establishment&apos;s reputation.
          Whether you need front-of-house staff, kitchen personnel, or
          housekeeping teams, Grupa Krayr has the expertise to meet your
          requirements.
        </p>
      </div>

      <Blockquote
        author={{ name: "John Doe", role: "HR Manager Hayatt Residency" }}
        className="mt-12"
      >
Grupa Krayr&apos;s hospitality staffing solutions have significantly improved our service quality and customer satisfaction.
      </Blockquote>
    </Section>
  );
}

function Block5() {
    return (
      <Section
        title="Agricultural Workforce Solutions"
        image={{ src: imageAgriculture, shape: 1 }}
      >
        <div className="space-y-6 text-base text-neutral-600">
          <p>
          In the farm and agriculture sector, seasonal and temporary workers are essential. 
          Grupa Krayr supplies skilled farm laborers who are experienced in various agricultural tasks. 
          Our workers ensure that your farming operations run smoothly, regardless of the season. 
          From planting to harvesting, we provide reliable labor that meets the demands of agricultural cycles.
          </p>
          <p>
          We understand the unique challenges faced by the agricultural industry, including the need for timely 
          and efficient labor during critical periods. Our recruitment process focuses on 
          sourcing workers who are not only skilled but also adaptable to the ever-changing needs of farming operations. 
          By partnering with Grupa Krayr, you gain access to a dedicated workforce that can help increase productivity and ensure the success of your agricultural ventures.
          </p>
        </div>
  
        <Blockquote
          author={{ name: "John Doe", role: "HR Manager Polona Fruits" }}
          className="mt-12"
        >
  Grupa Krayr&apos;s hospitality staffing solutions have significantly improved our service quality and customer satisfaction.
        </Blockquote>
      </Section>
    );
  }

  function Price() {
    return (
      <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
        <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
          <GridPattern
            className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
            yOffset={-270}
          />
        </div>
  
        <SectionIntro
          eyebrow="Service Pricing"
          title="Competitive and Transparent Pricing"
        >
          <p>
          At Grupa Krayr, we offer competitive and transparent pricing tailored to meet the unique needs of your business. Our flexible pricing structures ensure you get the best value for our comprehensive staffing solutions.
          </p>
        </SectionIntro>
  
        <Container className="mt-24">
          <GridList>
            <GridListItem title="Flexible Pricing Models">
            Choose from various pricing plans that suit your specific industry requirements, whether it&apos;s for temporary staffing, employee leasing, or specialized process outsourcing.
            </GridListItem>
            <GridListItem title="Customizable Packages">
            We provide customizable staffing packages that allow you to select the level of support and number of workers you need, ensuring cost efficiency and scalability.
            </GridListItem>
            <GridListItem title="No Hidden Fees">
            Our transparent pricing means you know exactly what you&apos;re paying for, with no hidden fees or unexpected charges.            
            </GridListItem>
          </GridList>
        </Container>
      </div>
    )
  }



export const metadata: Metadata = {
  title: "Our Work",
  description:
    "We believe in efficiency and maximizing our resources to provide the best value to our clients.",
};

export default async function Work() {
  let caseStudies = await loadCaseStudies();

  return (
    <>
      <PageIntro
        eyebrow="Our work"
        title="Comprehensive Staffing Solutions Across Industries."
      >
        <p>
          At Grupa Krayr, we specialize in providing top-tier staffing solutions
          across various industries. Our expertise and commitment to excellence
          ensure that your business receives the skilled workforce it needs to
          thrive. Explore our services in different sectors and discover how we
          can support your growth.
        </p>
      </PageIntro>

      <Block1 />
      <Block2 />
      <Block3 />
      <Block4/>
      <Block5/>
      <Price/>
      <ContactSection />
    </>
  );
}
