import AppRoutes from './routes/AppRoutes'
import ErrorBoundary from './components/ErrorBoundary'

export default function App() {
  return (
    <div className="min-h-screen app-aurora text-soft-white font-sans">
      <ErrorBoundary>
        <AppRoutes />
      </ErrorBoundary>
    </div>
  )
}
