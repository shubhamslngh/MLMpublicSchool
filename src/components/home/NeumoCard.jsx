import React from 'react';
import { cn } from '@/lib/utils';

const variants = {
  raised: 'card-premium',
  soft: 'neumo-surface-soft',
  inset: 'card-pressed',
  navy: 'section-navy text-white border border-white/10 shadow-[0_24px_60px_-40px_rgba(11,44,111,0.6)]',
};

const padding = {
  md: 'p-6',
  lg: 'p-8 md:p-10',
};

const NeumoCard = ({ as: Comp = 'div', variant = 'raised', size = 'md', className, children, ...props }) => {
  return (
    <Comp
      className={cn('rounded-[2rem]', variants[variant], padding[size], className)}
      {...props}
    >
      {children}
    </Comp>
  );
};

export default NeumoCard;
