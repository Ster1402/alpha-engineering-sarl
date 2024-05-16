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

import { appConfig } from '@/config';

import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import RenderHtmlContent from '@/components/common/RenderHTMLContent';
import lang from '@/lang';
import { ContactSchema as FormSchema } from '@/models';
import { Textarea } from '../ui/textarea';

const ContactForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const { reset } = form;

  const resetFields = () =>
    reset({
      email: '',
      subject: '',
      message: '',
      name: '',
    });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    try {
      resetFields();

      toast({
        title: 'Success',
        description: 'Votre demande à bien été pris en compte.',
      });
    } catch (error) {
      toast({
        title: 'Sorry an error occur',
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(data, null, 2)}</code>
          </pre>
        ),
      });
    }
  };

  return (
    <FormWrapper {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full px-2 md:px-8 mx-auto space-y-2">
        {lang?.pages.contact.form.legend && (
          <legend>
            <RenderHtmlContent content={lang?.pages.contact.form.legend} />
          </legend>
        )}

        <FormField
          control={form.control}
          name={'name'}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {lang?.pages.contact.form.fields[field.name]?.label}{' '}
                {lang?.pages.contact.form.fields[field.name]?.required ? (
                  <span
                    title="required"
                    className="text-red-500 font-bold text-lg">
                    *
                  </span>
                ) : null}
              </FormLabel>
              <FormControl>
                <Input
                  type={'text'}
                  placeholder={
                    lang?.pages.contact.form.fields[field.name]?.placeholder
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
          name={'email'}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {lang?.pages.contact.form.fields[field.name]?.label}{' '}
                {lang?.pages.contact.form.fields[field.name]?.required ? (
                  <span
                    title="required"
                    className="text-red-500 font-bold text-lg">
                    *
                  </span>
                ) : null}
              </FormLabel>
              <FormControl>
                <Input
                  type={'email'}
                  placeholder={
                    lang?.pages.contact.form.fields[field.name]?.placeholder
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
          name={'subject'}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {lang?.pages.contact.form.fields[field.name]?.label}{' '}
                {lang?.pages.contact.form.fields[field.name]?.required ? (
                  <span
                    title="required"
                    className="text-red-500 font-bold text-lg">
                    *
                  </span>
                ) : null}
              </FormLabel>
              <FormControl>
                <Input
                  type={'text'}
                  placeholder={
                    lang?.pages.contact.form.fields[field.name]?.placeholder
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
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {lang?.pages.contact.form.fields[field.name]?.label}{' '}
                {lang?.pages.contact.form.fields[field.name]?.required ? (
                  <span
                    title="required"
                    className="text-red-500 font-bold text-lg">
                    *
                  </span>
                ) : null}
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder={
                    lang?.pages.contact.form.fields[field.name]?.placeholder
                  }
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex gap-2 justify-end">
          <Button
            size={'sm'}
            variant={'outline'}
            type="reset"
            onClick={resetFields}>
            {lang?.pages.contact.form.altButton}
          </Button>
          <Button size={'sm'} type="submit">
            {lang?.pages.contact.form.submitButton}
          </Button>
        </div>

        <Separator className="my-6 bg-gray-300" />
        <FormDescription className="text-black/70">
          {lang?.pages.contact.form.comment} |{' '}
          <span className="font-semibold text-blue">{appConfig.appName}</span>.
        </FormDescription>
      </form>
    </FormWrapper>
  );
};

export default ContactForm;
