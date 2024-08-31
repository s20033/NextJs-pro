import clsx from 'clsx'
import { useTranslations } from 'next-intl'

function Office({
  name,
  children,
  invert = false,
}: {
  name: string
  children: React.ReactNode
  invert?: boolean
}) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-600',
      )}
    >
      <strong className={invert ? 'text-white' : 'text-neutral-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({
  invert = false,
  ...props
}: React.ComponentPropsWithoutRef<'ul'> & { invert?: boolean }) {
  const t= useTranslations("ContactDetails")
  return (
    <ul role="list" {...props}>
      <li>
        <Office name={t("polandLabel")} invert={invert}>
        Al. Jana Pawła II 11/1013  
        <br/>
        00-823, Warsaw, Poland

        </Office>
      </li>
      <li>
        <Office name={t("bulgariaLabel")}  invert={invert}>
          Gen. Totleben Blvd 2,  
          <br />
          1606 Sofia, Bulgaria

        </Office>
      </li>
    </ul>
  )
}
