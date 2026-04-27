import { memo } from 'react'

const BackgroundGrid = memo(() => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <svg
        className="absolute h-full w-full stroke-white/[0.03] [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="grid-pattern"
            width="80"
            height="80"
            x="50%"
            y="-1"
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 80V.5H80" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth="0" fill="url(#grid-pattern)" />
      </svg>
      <div className="absolute inset-0 bg-ink [mask-image:radial-gradient(100%_100%_at_top_left,transparent,white)] opacity-40" />
    </div>
  )
})

BackgroundGrid.displayName = 'BackgroundGrid'

export default BackgroundGrid
