import Button from '../components/ui/Button'

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-6">
      <div className="absolute inset-0 bg-glint-radial pointer-events-none"></div>

      <div className="text-center space-y-8 max-w-sm card p-8">
        <img src="assets/logo-placeholder.svg" alt="Glint logo placeholder" className="mx-auto h-12 w-auto" />
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight">Send money with <span className="text-gold">clarity</span> and confidence</h1>
          <p className="text-soft-white/80">Glint is a mock remittance experience showcasing transparent fees and premium interactions.</p>
        </div>
        <Button to="/map" full>Sign In</Button>
        <p className="text-xs text-soft-white/70">No authentication required — demo flow.</p>
      </div>
    </main>
  )
}
