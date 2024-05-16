import '@/styles/globals.css';
import type { Metadata } from 'next';
import { cn } from '@/lib/utils';
import { appConfig } from '@/config/app';
import ThemeProvider from '@/providers/ThemeProvider';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: {
    default: appConfig.title,
    template: `${appConfig.title} | %s`,
  },
  description: appConfig.description,
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          'font-sans antialiased selection:bg-gold selection:text-white'
        )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
