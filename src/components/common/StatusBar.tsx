import React from 'react';
import Icons from '@/components/common/Icons';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface StatusBarProps {
  title?: string;
  children: React.ReactNode;
  variant?: 'destructive' | 'default';
}

const StatusBar = ({
  children,
  title = 'Status',
  variant = 'default',
}: StatusBarProps) => {
  return (
    <Alert variant={variant} className="w-full my-2">
      <Icons.stats className="h-4 w-4" />
      <AlertTitle className="text-blue">{title}</AlertTitle>
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  );
};

export default StatusBar;
