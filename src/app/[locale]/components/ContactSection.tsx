'use client'
import { useLocale, useTranslations } from 'next-intl'
import { Button } from './Button'
import { Container } from './Container'
import { FadeIn } from './FadeIn'
import { Offices } from './Offices'
import { usePathname } from 'next/navigation'

export function ContactSection() {
  const localActiveLanguage = useLocale();
  const pathname = usePathname();
  const t = useTranslations("contactSection")
  const contactHref = pathname.startsWith(`/${localActiveLanguage}/contact`)
    
    ? `/${localActiveLanguage}/contact`: `/${localActiveLanguage}/contact`;

  return (
    <>
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-customTeal px-6 py-20 sm:mx-0 sm:py-16 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
              {t("title")}
            </h2>
            <h4 className="font-display text-1xl font-medium text-white [text-wrap:balance] sm:text-1xl">
            {t("subtitle")}
            </h4>
            <div className="mt-6 flex">
              <Button href={`${contactHref}`} invert>
              {t("buttonText")}
              </Button>
            </div>
            <div className="mt-10 border-t border-white/10 pt-10">
              <h3 className="font-display text-base font-semibold text-white">
              {t("officesTitle")}
              </h3>
              <Offices
                invert
                className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
              />
            </div>
          </div>
        </div>
      </FadeIn>
      </Container>
  </>
  )
}
