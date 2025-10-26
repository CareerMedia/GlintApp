export default function Loader({ label }: { label?: string }) {
  return (
    <div className="flex items-center gap-2">
      <svg width="20" height="20" viewBox="0 0 24 24" className="animate-spin">
        <circle cx="12" cy="12" r="10" stroke="white" strokeOpacity="0.2" strokeWidth="4" fill="none"/>
        <path d="M22 12a10 10 0 0 1-10 10" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round"/>
      </svg>
      {label && <span>{label}</span>}
    </div>
  );
}
