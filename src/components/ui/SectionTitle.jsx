export default function SectionTitle({ title, className = '' }) {
  return (
    <div className={`mb-10 flex items-center gap-4 ${className}`}>
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        className="animate-[spin_7s_linear_infinite] fill-muted-foreground"
        aria-hidden="true"
      >
        <path d="M11 0h2v9.17l6.48-6.48 1.42 1.42L14.83 10.5H24v2h-9.17l6.48 6.48-1.42 1.42L13 13.83V24h-2v-9.17l-6.48 6.48-1.42-1.42 6.07-6.06H0v-2h9.17L3.1 4.1l1.42-1.42L11 9.17z" />
      </svg>
      <h2 className="text-xl uppercase leading-none">{title}</h2>
    </div>
  )
}
