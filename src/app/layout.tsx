import { AppQueryClientProvider } from '@/components/AppQueryClientProvider';
import { AppThemeProvider } from '@/theme';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'Todo App',
  description: 'Todo App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <AppQueryClientProvider>
          <AppRouterCacheProvider
            options={{
              key: 'css',
            }}
          >
            <AppThemeProvider>{children}</AppThemeProvider>
          </AppRouterCacheProvider>
        </AppQueryClientProvider>
      </body>
    </html>
  );
}
