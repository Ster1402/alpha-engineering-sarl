import React from 'react';
import Icons from './Icons';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import lang from '@/lang';
import CardWrapper from '@/components/cards/CardWrapper';
import { cn } from '@/lib/utils';

interface EmptyDataPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  fallbackUrl?: string;
  fallbackUrlTitle?: string;
}

function EmptyDataPanel({
  fallbackUrl,
  fallbackUrlTitle,
  className,
  ...props
}: EmptyDataPanelProps) {
  return (
    <CardWrapper className={cn('justify-center', className)} {...props}>
      <div className="flex flex-col gap-4 max-w-96 mx-auto items-center justify-center">
        <Icons.empty className="w-32 h-32" />
        <h2 className="font-heading text-lg text-blue">
          {lang.panels.emptyPanel.title}
        </h2>
        <p className="text-sm text-gray-500">
          {lang.panels.emptyPanel.description}
        </p>
        {fallbackUrl && (
          <Link href={fallbackUrl} className="w-full">
            <Button size={'lg'} className="w-full bg-blue">
              {fallbackUrlTitle ?? lang.panels.emptyPanel.fallbackUrl}
            </Button>
          </Link>
        )}
      </div>
    </CardWrapper>
  );
}

export default EmptyDataPanel;
