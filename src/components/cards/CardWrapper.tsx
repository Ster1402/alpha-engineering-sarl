import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface CardWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  contentClassName?: string;
}

function CardWrapper({
  className,
  contentClassName,
  children,
  ...props
}: CardWrapperProps) {
  return (
    <Card
      {...props}
      className={cn('min-h-96 py-4 flex flex-col justify-start', className)}>
      <CardContent className={cn('flex flex-col', contentClassName)}>
        {children}
      </CardContent>
    </Card>
  );
}

export default CardWrapper;
