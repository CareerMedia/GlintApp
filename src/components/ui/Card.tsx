import { ReactNode } from 'react';

export default function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`glass rounded-gl p-4 ${className}`}>
      {children}
    </div>
  );
}
