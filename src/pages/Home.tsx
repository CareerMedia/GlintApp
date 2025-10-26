import Button from '../components/ui/Button'

export default function Home() {
  return (
    <main className="hero-wrap">
      <div className="hero-bg"></div>
      <div className="hero-overlay"></div>
      <div className="animated-mesh"></div>

      <section className="hero-content">
        <div className="space-y-8">
          <div className="space-y-4">
            <img src="assets/logo-placeholder.svg" alt="Glint logo placeholder" className="h-10 w-auto" />
            <h1 className="text-4xl leading-tight font-semibold tracking-tight">
              Send money with <span className="text-gold">clarity</span> and confidence
            </h1>
            <p className="text-soft-white/90">
              A premium, transparent remittance experience — blazing fast, beautifully clear, and delightfully smooth.
            </p>
          </div>

          <div className="card p-5 space-y-4">
            <p className="text-soft-white/80 text-sm">
              This is a demo — no real transactions. Explore world-class UX and motion.
            </p>
            <Button to="/map" full ariaLabel="Start demo">
              Sign In
            </Button>
          </div>

          <p className="text-xs text-soft-white/70">Tip: Replace the hero image at <code>public/assets/images/hero-placeholder.svg</code>.</p>
        </div>
      </section>
    </main>
  )
}
