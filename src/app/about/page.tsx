import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import { loadArticles } from '@/lib/mdx'
import { Metadata } from 'next'
import React from 'react'
import Image from 'next/image'
import imageBlakeReid from '@/images/team/blake-reid.jpg'
import imageChelseaHagon from '@/images/team/chelsea-hagon.jpg'
import imageDriesVincent from '@/images/team/dries-vincent.jpg'
import imageEmmaDorsey from '@/images/team/emma-dorsey.jpg'
import imageKathrynMurphy from '@/images/team/kathryn-murphy.jpg'
import imageLeonardKrasner from '@/images/team/leonard-krasner.jpg'
import imageLeslieAlexander from '@/images/team/leslie-alexander.jpg'
import imageMichaelFoster from '@/images/team/michael-foster.jpg'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { Border } from '@/components/Border'
import { GridPattern } from '@/components/GridPattern'


function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-teal-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our culture - 3Es"
        title="Balance professional excellence with personal well-being"
        invert
      >
        <p>
        At Grupa Krayr, our culture is built on equality, empathy and Empowerment, 
        ensuring a supportive and inclusive work environment.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Equality" invert>
          We treat every team member with equal respect and opportunity, fostering a workplace where everyone’s voice is heard and valued.          </GridListItem>
          <GridListItem title="Empathy" invert>
          We understand and respect personal challenges, offering support and understanding to maintain a healthy work-life balance
          </GridListItem>
          <GridListItem title="Empowerment" invert>
          We empower our employees to manage their own schedules, fostering a culture of trust and responsibility.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our values"
        title="Balancing reliability and innovation"
      >
        <p>
          We strive to stay at the forefront of emerging trends and
          technologies, while completely ignoring them and forking that old
          Rails project we feel comfortable using. We stand by our core values
          to justify that decision.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Meticulous">
            The first part of any partnership is getting our designer to put
            your logo in our template. The second step is getting them to do the
            colors.
          </GridListItem>
          <GridListItem title="Efficient">
            We pride ourselves on never missing a deadline which is easy because
            most of the work was done years ago.
          </GridListItem>
          <GridListItem title="Adaptable">
            Every business has unique needs and our greatest challenge is
            shoe-horning those needs into something we already built.
          </GridListItem>
          <GridListItem title="Honest">
            We are transparent about all of our processes, banking on the simple
            fact our clients never actually read anything.
          </GridListItem>
          <GridListItem title="Loyal">
            We foster long-term relationships with our clients that go beyond
            just delivering a product, allowing us to invoice them for decades.
          </GridListItem>
          <GridListItem title="Innovative">
            The technological landscape is always evolving and so are we. We are
            constantly on the lookout for new open source projects to clone.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}



const team = [
  {
    title: 'Leadership',
    people: [
      {
        name: 'Shephali Ghimire',
        role: 'Co-Founder / Marketing Director',
        image: { src: imageLeslieAlexander },
      },
      {
        name: 'Suman Bhurtel',
        role: 'Co-Founder / CEO',
        image: { src: imageDriesVincent },
      },
    ],
  },
  {
    title: 'Team',
    people: [
      {
        name: 'Maftuna Azadova',
        role: 'Adminstrator',
        image: { src: imageChelseaHagon },
      },
      {
        name: 'Mieraf Tesfaye',
        role: 'Digital Marketing specialist ',
        image: { src: imageEmmaDorsey },
      },
      {
        name: 'Leonard Krasner',
        role: 'VP, User Experience',
        image: { src: imageLeonardKrasner },
      },
      {
        name: 'Blake Reid',
        role: 'Consultant',
        image: { src: imageBlakeReid },
      },
      {
        name: 'Patrycja Machajska',
        role: 'Business Developer',
        image: { src: imageKathrynMurphy },
      },
      {
        name: 'Maciej Zieliński',
        role: 'Accountant / Financial Advisor',
        image: { src: imageMichaelFoster },
      },

    ],
  },
]
function Team() {
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
  )
}

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Grupa Krayr is a leading recruitment agency specializing in worker leasing, temporary staffing, and overseas hiring. We focus on providing skilled workforce solutions for medium and large companies, with expertise in legalizing foreign workers from Eastern Europe and Asia.',
}

export default async function About() {
 let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="About us" title="Revolutionizing Workforce Solutions">
        <p>
        Our Strength Lies in Innovation and Commitment which
          puts our clients at the center of everything we do.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
          Grupa Krayr was founded by two enthusiastic professionals who recognized Europe&apos;s pressing need 
          for a qualified workforce to sustain its industrial leadership globally. 
          Observing the negative impacts of labor shortages on company growth, 
          coupled with the high costs and limited solutions offered by existing recruitment agencies,
           we set out to make a difference. Our mission is to provide affordable, diverse, and effective 
           staffing solutions that cater to the dynamic needs of medium and large companies.
          </p>
          <p>
          Since our inception, Grupa Krayr has been dedicated to revolutionizing recruitment and staffing solutions by 
          integrating cutting-edge technology, market trends, and industry demands. We specialize in both domestic 
          and international recruitment, addressing domestic unemployment while fulfilling the demand for 
          qualified talent by attracting skilled workers from Eastern Europe and Asia. 
          Our commitment to valuing human assets and leveraging innovative strategies ensures that 
          we deliver exceptional results, positioning us as a reliable and forward-thinking recruitment partner.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="1200+" label="Happy Talents" />
          <StatListItem value="25+" label="Happy clients" />
          <StatListItem value="$25M" label="Invoices billed" />
        </StatList>
      </Container>
      <Culture/>
      <Values/>
      <Team />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the blog"
        intro="Our team of experienced designers and developers has just one thing on their mind; working on your ideas to draw a smile on the face of your users worldwide. From conducting Brand Sprints to UX Design."
        pages={blogArticles}
      />

      <ContactSection />
    </>
  )
}
