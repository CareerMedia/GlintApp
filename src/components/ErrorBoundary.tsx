import React from 'react'

type State = { hasError: boolean; error?: any }

export default class ErrorBoundary extends React.Component<React.PropsWithChildren, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(error: any) {
    return { hasError: true, error }
  }

  componentDidCatch(error: any, errorInfo: any) {
    // You can log to a monitoring service here
    console.error('App crashed:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen grid place-items-center px-6 py-12 text-center">
          <div className="max-w-md">
            <h1 className="text-2xl font-semibold mb-2">Something went wrong</h1>
            <p className="text-soft-white/80 mb-4">The app hit an unexpected error. Try reloading or going back home.</p>
            <div className="space-x-3">
              <a href="#/" className="btn-gold inline-block rounded-xl px-4 py-2">Go Home</a>
              <button className="rounded-xl px-4 py-2 bg-white/10 border border-white/15" onClick={() => location.reload()}>Reload</button>
            </div>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <pre className="text-left mt-4 p-3 bg-black/40 rounded-lg overflow-auto text-xs">{String(this.state.error)}</pre>
            )}
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
