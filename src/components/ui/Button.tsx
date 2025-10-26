import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
};

export default function Button({ children, onClick, type = 'button', className = '', disabled = false }: Props) {
  return (
    <motion.button
      type={type}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      whileHover={{ y: disabled ? 0 : -1 }}
      onClick={onClick}
      disabled={disabled}
      className={`glint-gradient text-black font-semibold rounded-xl px-5 py-3 shadow-glint focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-gold-end)] disabled:opacity-50 ${className}`}
    >
      {children}
    </motion.button>
  );
}
