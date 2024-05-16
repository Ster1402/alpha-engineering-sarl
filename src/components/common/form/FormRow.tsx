import { cn } from '@/lib/utils';
import React, { HTMLAttributes, ReactNode } from 'react';

interface FormRowProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export default function FormRow({ children, className }: FormRowProps) {
  return (
    <div className={cn('input-group', className)}>
      {children}
    </div>
  );
}
