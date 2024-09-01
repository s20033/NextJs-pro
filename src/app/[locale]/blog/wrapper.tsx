import React from 'react'
import { ContactSection } from '../components/ContactSection'
import { Container } from '../components/Container'
import { FadeIn } from '../components/FadeIn'
import { MDXComponents } from '../components/MDXComponents'
import { PageLinks } from '../components/PageLinks'
import { formatDate } from '@/lib/formatDate'
import { type Article, type MDXEntry, loadArticles } from '@/lib/mdx'
import Image from 'next/image'

export default async function BlogArticleWrapper({
  article,
  children,
  params: { locale },
}: {
  article: MDXEntry<Article>
  children: React.ReactNode
  params: { locale: string }
}) {
  let allArticles = await loadArticles(locale)
  let moreArticles = allArticles
    .filter(({ metadata }) => metadata !== article)
    .slice(0, 2)

  return (
    <>
      <Container as="article" className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <header className="relative mb-10 xl:mb-0">
            <div className="pointer-events-none absolute left-0 top-0 z-50 flex h-20 items-center justify-center lg:left-auto lg:right-0 lg:top-auto lg:h-auto lg:items-end">
              <time
                dateTime={article.date}
                className="pointer-events-auto block text-sm leading-6 text-neutral-600 dark:text-neutral-400 lg:mt-6"
              >
                {formatDate(article.date, locale)}
              </time>
            </div>
            <h1 className="mt-6 font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
              {article.title}
            </h1>
            <div className="mt-8 flex items-center gap-4 text-sm">
              <Image
                src={article.author.image.src}
                alt={article.author.name}
                className="h-12 w-12 rounded-full object-cover"
                width={48}
                height={48}
              />
              <div className="leading-tight">
                <div className="font-semibold text-neutral-950">{article.author.name}</div>
                <div className="text-neutral-600">{article.author.role}</div>
              </div>
            </div>
          </header>
        </FadeIn>

        <FadeIn>
          <MDXComponents.wrapper className="mt-24 sm:mt-32 lg:mt-40">
            {children}
          </MDXComponents.wrapper>
        </FadeIn>
      </Container>

      {moreArticles.length > 0 && (
        <PageLinks
          className="mt-24 sm:mt-32 lg:mt-40"
          title="More articles"
          pages={moreArticles.map(article => ({
            ...article,
            href: `/${locale}${article.href}`
          }))}
        />
      )}

      <ContactSection />
    </>
  )
}