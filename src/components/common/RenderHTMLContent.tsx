import { cn } from '@/lib/utils';
import React from 'react';

interface RenderHtmlContentProps extends React.HTMLAttributes<HTMLDivElement> {
  content?: string;
}

function RenderHtmlContent({ content, className }: RenderHtmlContentProps) {
  return (
    <p
      className={cn('html-text [&>p]:whitespace-normal', className)}
      dangerouslySetInnerHTML={{
        __html: content ?? '',
      }}></p>
  );
}

export default RenderHtmlContent;
