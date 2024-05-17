'use client';

import { cn } from '@/lib/utils';
import React from 'react';
import Icons from '../common/Icons';
import { Button } from '../ui/button';
import moment from 'moment';

interface CardItemProps extends React.HTMLAttributes<HTMLDListElement> {
  icon: React.ReactNode;
  createdAt: Date;
  updatedAt?: Date;
  onShow: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

const CardItem = ({
  icon,
  createdAt,
  updatedAt,
  onShow,
  onEdit,
  onDelete,
  className,
  children,
}: CardItemProps) => {
  return (
    <div
      className={cn(
        'rounded p-2 md:p-4 flex justify-between gap-4 sm:min-h-24 hover:bg-light-blue',
        className
      )}>
      <div className="bg-white rounded sm:p-4 flex justify-center items-center">
        {icon}
      </div>
      <div className="w-full h-full flex-1">
        {children}
        <p className="text-sm flex gap-2 items-center">
          <Icons.date className="text-blue/60 w-4 h-4" /> Created{' '}
          {moment(createdAt).fromNow()}
        </p>
        {updatedAt && (
          <p className="text-sm flex gap-2 items-center">
            <Icons.edit className="text-blue/60 w-4 h-4" /> Updated{' '}
            {moment(updatedAt).fromNow()}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <Button
          size={'icon'}
          onClick={() => onShow()}
          title="Show"
          className="border-transparent text-blue/50 hover:border-transparent bg-transparent hover:bg-transparent"
          asChild>
          <Icons.eye className="text-blue/60 hover:text-blue cursor-pointer w-6 h-6" />
        </Button>
        <Button
          size={'icon'}
          onClick={() => onEdit()}
          title="Edit"
          className="border-transparent text-blue/50 hover:border-transparent bg-transparent hover:bg-transparent"
          asChild>
          <Icons.edit className="hover:text-blue cursor-pointer w-6 h-6" />
        </Button>
        <Button
          size={'icon'}
          title="Delete"
          onClick={() => onDelete()}
          variant={'destructive'}
          className="border-transparent text-red-300 hover:border-transparent bg-transparent hover:bg-transparent"
          asChild>
          <Icons.delete
            className="hover:text-red-600 cursor-pointer w-6 h-6"
          />
        </Button>
      </div>
    </div>
  );
};

export default CardItem;
