import { Link } from 'react-router-dom'

const VARIANTS = {
  primary: 'bg-primary text-background hover:bg-foreground',
  outline: 'border border-foreground/40 text-foreground hover:border-primary hover:text-primary',
}

export default function Button({ as = 'a', variant = 'primary', className = '', children, ...props }) {
  const classes = `group relative inline-flex h-12 items-center justify-center gap-2 overflow-hidden px-8 font-anton text-base uppercase tracking-widest transition-colors duration-300 ${VARIANTS[variant]} ${className}`

  if (as === 'link') {
    return (
      <Link className={classes} {...props}>
        {children}
      </Link>
    )
  }
  if (as === 'button') {
    return (
      <button type="button" className={classes} {...props}>
        {children}
      </button>
    )
  }
  return (
    <a className={classes} {...props}>
      {children}
    </a>
  )
}
