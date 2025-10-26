import { useEffect, useRef } from 'react'

type Props = {
  onSelect: (country: { name: 'Mexico' | 'India', currency: 'MXN' | 'INR' }) => void
}

declare global {
  interface Window { google?: any }
}

export default function MapGoogle({ onSelect }: Props) {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!window.google || !ref.current) return

    const center = { lat: 20, lng: 10 }
    const map = new window.google.maps.Map(ref.current, {
      center,
      zoom: 2,
      mapTypeId: 'hybrid',
      disableDefaultUI: true,
      gestureHandling: 'greedy'
    })

    const markers = [
      { pos: { lat: 19.4326, lng: -99.1332 }, name: 'Mexico', currency: 'MXN', title: 'Mexico City' },
      { pos: { lat: 28.6139, lng: 77.2090 }, name: 'India', currency: 'INR', title: 'New Delhi' },
    ] as const

    markers.forEach(m => {
      const marker = new window.google.maps.Marker({
        position: m.pos,
        map,
        title: m.title,
        animation: window.google.maps.Animation.DROP
      })
      marker.addListener('click', () => onSelect({ name: m.name, currency: m.currency }))
    })
  }, [onSelect])

  return <div ref={ref} className="w-full h-full" aria-label="Google Map" />
}
