import clsx from 'clsx'

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
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Poland" invert={invert}>
          11 John Paul II Avenue 
          <br />
          00-823, Warsaw, Poland
        </Office>
      </li>
      <li>
        <Office name="Bulgaria" invert={invert}>
          24 Lego Allé
          <br />
          7190, Billund, Bulgaria
        </Office>
      </li>
    </ul>
  )
}
