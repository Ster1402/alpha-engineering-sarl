'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Form as FormWrapper,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { ROUTES, appConfig } from '@/config';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import RenderHtmlContent from '@/components/common/RenderHTMLContent';
import lang from '@/lang';
import { ProfileSchema as FormSchema } from '@/models';
import React from 'react';
import Link from 'next/link';
import { PasswordInput } from '../common/form/PasswordInput';

const ProfileForm = () => {
  const [isPending, startTransition] = React.useTransition();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const { reset } = form;

  const resetFields = () => {
    reset({
      user: {
        username: '',
        name: '',
        surname: '',
        email: '',
        password: '',
        phoneNumber: '',
      },
      newPassword: '',
    });
  };

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    // startTransition(async () => {
    // });
  };

  return (
    <FormWrapper {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-2">
        <FormField
          control={form.control}
          name={'user.username'}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {lang?.pages.profile.form.fields[field.name]?.label}{' '}
                {/* {lang?.pages.profile.form.fields[field.name]?.required ? (
                  <span
                    title="required"
                    className="text-red-500 font-bold text-lg">
                    *
                  </span>
                ) : null} */}
              </FormLabel>
              <FormControl>
                <Input
                  type={'text'}
                  disabled={isPending}
                  placeholder={
                    lang?.pages.profile.form.fields[field.name]?.placeholder
                  }
                  {...field}
                  className="input-field"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name={'user.name'}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {lang?.pages.profile.form.fields[field.name]?.label}{' '}
                {/* {lang?.pages.profile.form.fields[field.name]?.required ? (
                  <span
                    title="required"
                    className="text-red-500 font-bold text-lg">
                    *
                  </span>
                ) : null} */}
              </FormLabel>
              <FormControl>
                <Input
                  type={'text'}
                  disabled={isPending}
                  placeholder={
                    lang?.pages.profile.form.fields[field.name]?.placeholder
                  }
                  {...field}
                  className="input-field"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name={'user.email'}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {lang?.pages.profile.form.fields[field.name]?.label}{' '}
                {/* {lang?.pages.profile.form.fields[field.name]?.required ? (
                  <span
                    title="required"
                    className="text-red-500 font-bold text-lg">
                    *
                  </span>
                ) : null} */}
              </FormLabel>
              <FormControl>
                <Input
                  type={'email'}
                  disabled={isPending}
                  placeholder={
                    lang?.pages.profile.form.fields[field.name]?.placeholder
                  }
                  {...field}
                  className="input-field"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name={'user.password'}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {lang?.pages.register.form.fields[field.name]?.label}{' '}
                {/* {lang?.pages.register.form.fields[field.name]?.required ? (
                    <span
                      title="required"
                      className="text-red-500 font-bold text-lg">
                      *
                    </span>
                  ) : null} */}
              </FormLabel>
              <FormControl>
                <PasswordInput
                  disabled={isPending}
                  placeholder={
                    lang?.pages.profile.form.fields[field.name]?.placeholder
                  }
                  {...field}
                  className="input-field"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex gap-2 justify-end">
          <Button
            variant={'outline'}
            type="reset"
            disabled={isPending}
            onClick={resetFields}>
            {lang?.pages.register.form.altButton}
          </Button>
          <Button type="submit" disabled={isPending}>
            {lang?.pages.register.form.submitButton}
          </Button>
        </div>

        <Separator className="my-6 bg-gray-300" />
        <FormDescription className="text-black/70">
          {lang?.pages.register.form.comment} |{' '}
          <Link href={ROUTES.HOME}>
            <span className="font-semibold text-blue">{appConfig.appName}</span>
            .
          </Link>
        </FormDescription>
      </form>
    </FormWrapper>
  );
};

export default ProfileForm;
