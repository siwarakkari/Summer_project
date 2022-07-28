import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react'
import NextLink, { LinkProps } from 'next/link'

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      className={`
      bg-dark-2 px-4 py-2 rounded-lg text-white
      hover:bg-dark-1 
      duration-200
      ${className ? className : ''}
      `}
      {...props}
    />
  )
}

export function Link({ className, ...props }: LinkProps) {
  return (
    <NextLink {...props}>
      <a
        className={`
        text-black hover:text-dark-1 duration-200
        mr-4
      ${className ? className : ''}

      `}
        {...props}
      />
    </NextLink>
  )
}
// export function Link({ className, ...props }: LinkProps) {

//     return (<NextLink />)
// }
