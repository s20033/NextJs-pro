import { MDXComponents } from '@/app/[locale]/components/MDXComponents'
import { type MDXComponents as MDXComponentsType } from 'mdx/types'


export function useMDXComponents(components: MDXComponentsType) {
  return {
    ...components,
    ...MDXComponents,
  }
}
