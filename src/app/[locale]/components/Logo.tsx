import React, { useId } from 'react'
import clsx from 'clsx'
import logokrayr from 'src/images/logokrayr.png';

export function Logomark({
  invert = false,
  filled = false,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  invert?: boolean
  filled?: boolean
}) {
  let id = useId()

  return (
    <svg viewBox="0 0 8800 8800" aria-hidden="true" {...props}>
      <defs>
        <path
          id={`${id}-icon-path1`}
          d="M676 3149 l-26 -20 0 -864 0 -864 22 -21 c29 -26 71 -25 101 3 21 19
          1362 1561 1440 1655 34 41 34 75 2 107 l-24 25 -744 0 c-738 0 -745 0 -771
          -21z"
        />
        <path
          id={`${id}-icon-path2`}
          d="M1647 2188 c-14 -13 -160 -182 -326 -376 -323 -378 -327 -384 -278
          -430 l23 -22 630 0 631 0 21 23 c30 32 28 70 -6 109 -16 18 -149 175 -296 348
          -147 173 -281 327 -297 343 -36 33 -70 35 -102 5z"
        />
        <clipPath id={`${id}-icon-clip`}>
          <use href={`#${id}-icon-path1`} />
          <use href={`#${id}-icon-path2`} />
        </clipPath>
      </defs>
      <rect
        clipPath={`url(#${id}-icon-clip)`}
        className={clsx(
          'h-8 transition-all duration-300',
          invert ? 'fill-white group-hover/logo:fill-customTeal' : 'fill-customTeal',
          filled ? 'w-8' : 'w-0 group-hover/logo:w-8'
        )}
      />
      <use
        href={`#${id}-icon-path1`}
        className={clsx(
          invert ? 'stroke-white' : 'stroke-customTeal',
          'transition-all duration-300'
        )}
        fill="none"
        strokeWidth="2.5"
      />
      <use
        href={`#${id}-icon-path2`}
        className={clsx(
          invert ? 'stroke-white' : 'stroke-customTeal',
          'transition-all duration-300'
        )}
        fill="none"
        strokeWidth="1.5"
      />
    </svg>
  )
}

// export function Logo({
//   className,
//   invert = false,
//   filled = false,
//   ...props
// }: React.ComponentPropsWithoutRef<'svg'> & {
//   invert?: boolean
//   filled?: boolean
// }) {
//   let id = useId()

//   return (
//     <svg
//       viewBox="0 0 18400 2520"
//       aria-hidden="true"
//       className={clsx('group/logo', className)}
//       {...props}
//     >
//       {/* <Logomark
//         preserveAspectRatio="xMinYMid meet"
//         invert={invert}
//         filled={filled}
//       /> */}
//       <defs>
//         <path
//           id={`${id}-text-path`}
//           d="M676 3149 l-26 -20 0 -864 0 -864 22 -21 c29 -26 71 -25 101 3 21 19
//           1362 1561 1440 1655 34 41 34 75 2 107 l-24 25 -744 0 c-738 0 -745 0 -771
//           -21z M1647 2188 c-14 -13 -160 -182 -326 -376 -323 -378 -327 -384 -278
//           -430 l23 -22 630 0 631 0 21 23 c30 32 28 70 -6 109 -16 18 -149 175 -296 348
//           -147 173 -281 327 -297 343 -36 33 -70 35 -102 5z"
//         />
//       </defs>
//       <g transform="scale(0.763125, -0.69125) translate(0, -4000)">
//         <use
//           href={`#${id}-text-path`}
//           className={clsx(
//             'transition-all duration-300',
//             invert
//             ? 'stroke-white fill-white group-hover/logo:fill-amber-700'
//             : 'stroke-customTeal fill-transparent group-hover/logo:fill-amber-700'         
//            )}
//           strokeWidth="40"
//         />
//       </g>
//       <text
//         className={clsx(
//           'text-[2200px] font-bold font-display transition-all duration-300',
//           invert ? 'fill-white' : 'fill-customTeal'
//         )}
//         x="3300"
//         y="1750"
//       >
//         Grupa Krayr
//       </text>
//     </svg>
//   )
// }

export function Logo({
  className,
  invert = false,
  filled = false,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  invert?: boolean
  filled?: boolean
}) {
  return (
    <svg
      viewBox="100 200 25000 2600" // Adjusted viewBox size to fit the logo and text
      aria-hidden="true"
      className={clsx('group/logo', className)}
      {...props}
    >
   
      <image
        href={invert ? "/logo-white.png" : "/logokrayr.png"}    
        x="500"                       
        y="200"
        width="5500"                  
        height="3100"
        preserveAspectRatio="xMidYMid meet"
      />

      <text
        className={clsx(
          'text-[2200px] font-bold font-display transition-all duration-300',
          invert ? 'fill-white' : 'fill-customTeal'
        )}
        x="5500"   
        y="1900"   
      >
        Grupa Krayr
      </text>
    </svg>
  )
}


