import { GENERAL_INFO } from '../../data/portfolio'

export default function StickyEmail() {
  return (
    <div className="fixed bottom-32 left-0 z-40 hidden lg:block">
      <a
        href={`mailto:${GENERAL_INFO.email}`}
        className="block px-3 text-xs tracking-[0.15em] text-muted-foreground transition-colors hover:text-primary"
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
      >
        {GENERAL_INFO.email}
      </a>
    </div>
  )
}
