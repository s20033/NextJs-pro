import React from 'react'
import { ContactSection } from '../components/ContactSection'
import { Container } from '../components/Container'
import { MDXComponents } from '../components/MDXComponents'
import { PageLinks } from '../components/PageLinks'
import { formatDate } from '@/lib/formatDate'
import { type Article, type MDXEntry, loadArticles } from '@/lib/mdx'
import { FadeIn } from '../components/FadeIn'

export default async function BlogArticleWrapper({
  article,
  children,
  params: { locale },
}: {
  article: MDXEntry<Article>
  children: React.ReactNode
  params: { locale: string }
}) {
  const allArticles = await loadArticles(locale)

  const moreArticles = allArticles
    .filter(({ metadata }) => metadata !== article.metadata)
    .slice(0, 2)




  return (
    <div>
      <Container as="article" className="mt-24 sm:mt-32 lg:mt-40">
         <FadeIn> 
          <header className="mx-auto flex max-w-5xl flex-col text-center">
            <h1 className="mt-6 font-display text-5xl font-medium tracking-tight text-customTeal [text-wrap:balance] sm:text-6xl">
              {article.title}
            </h1>
            <time
              dateTime={article.date}
              className="order-first text-sm text-neutral-950"
            >
              {formatDate(article.date, locale)}
            </time>
            <p className="mt-6 text-sm font-semibold text-neutral-950">
            &#9997; {article.author.name}, {article.author.role} 
            </p>
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
          pages={moreArticles.map((article) => ({
            ...article,
            href: `/${locale}${article.href}`,
          }))}
        />
      )}

      <ContactSection />
    </div>
  )
}
