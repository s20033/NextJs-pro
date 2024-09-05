'use client'
import Link from 'next/link'
import emailjs from '@emailjs/browser';
import { Container } from './Container'
import { FadeIn } from './FadeIn'
import { Logo } from './Logo'
import { socialMediaProfiles } from './SocialMedia'
import { useLocale, useTranslations } from 'next-intl'
import { useRef } from 'react';



const navigation = [
  {
    title: 'work',
    links: [
      { title: 'ourWork', href: '/work' },
      { title: 'career', href: '/career' },
      {
        title: 'seeAll',
        href: '/work',
      },
    ],
  },
  {
    title: 'company',
    links: [
      { title: 'about', href: '/about' },
      { title: 'process', href: '/process' },
      { title: 'blog', href: '/blog' },
      { title: 'contactUs', href: '/contact' },
    ],
  },
  {
    title: 'connect',
    links: socialMediaProfiles,
  },
]

function Navigation() {
  const t = useTranslations('navigation')
  const tSocial = useTranslations('socialMedia')
  const localActiveLanguage = useLocale()

  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        {navigation.map((section, sectionIndex) => (
          <li key={sectionIndex}>
            <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
              {t(section.title)}
            </div>
            <ul role="list" className="mt-4 text-sm text-neutral-700">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="mt-4">
                  <Link
                    href={link.href.startsWith('http')
                      ? link.href
                      : `/${localActiveLanguage}${link.href}`}
                    className="transition hover:text-neutral-950"
                  >
                    {link.href.startsWith('http') ? tSocial(link.title) : t(link.title)}                    </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  
  )
}

function ArrowIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  )
}

function NewsletterForm() {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (form.current) {
      emailjs.sendForm('service_aixzu6y', 'template_0jiinx7', form.current, 'w07if5kw3bnm_lOKS')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        })
        .finally(() => {
          window.location.reload(); 
        });
    } else {
      console.error('Form reference is not defined');
    }
  };

  const t = useTranslations("newsletter")
  return (
    <form ref={form} onSubmit={sendEmail} className="max-w-sm">
      <h2 className="font-display text-sm font-semibold tracking-wider text-neutral-950">
        {t("title")}
      </h2>
      <p className="mt-4 text-sm text-neutral-700">
      {t("description")}
      </p>
      <div className="relative mt-6">
        <input
          type="email"
          placeholder={t("placeHolder")}
          autoComplete="email"
          name='email'
          aria-label="Email address"
          className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
        />
        <div className="absolute inset-y-1 right-1 flex justify-end">
          <button
            type="submit"
            aria-label="Submit"
            className="flex aspect-square h-full items-center justify-center rounded-xl bg-emerald-950 text-white transition hover:bg-amber-700"
          >
            <ArrowIcon className="w-4" />
          </button>
        </div>
      </div>
    </form>
  )
}

export function Footer() {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <Navigation />
          <div className="flex lg:justify-end">
            <NewsletterForm />
          </div>
        </div>
        <div className="mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          <Link href="/" aria-label="Home">
            <Logo className="h-8"  />
          </Link>
          <p className="text-sm text-neutral-700">
            © Grupa Krayr. {new Date().getFullYear()}
          </p>
        </div>
      </FadeIn>
    </Container>
  )
}
