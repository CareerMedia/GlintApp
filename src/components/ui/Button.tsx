import { Link } from 'react-router-dom'
import { ReactNode } from 'react'
import clsx from 'clsx'

type Props = {
  children: ReactNode
  onClick?: () => void
  to?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  className?: string
  full?: boolean
  ariaLabel?: string
}

export default function Button({ children, onClick, to, type = 'button', disabled, className, full, ariaLabel }: Props) {
  const classes = clsx(
    'btn-gold rounded-xl px-5 py-3 font-semibold shadow-glint',
    'focus-ring select-none',
    full && 'w-full',
    disabled && 'opacity-60 pointer-events-none',
    className
  )

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick} aria-disabled={disabled} aria-label={ariaLabel}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled} aria-label={ariaLabel}>
      {children}
    </button>
  )
}
