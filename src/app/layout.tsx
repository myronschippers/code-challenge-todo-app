import { Josefin_Sans } from 'next/font/google';
import StyledComponentsRegistry from '@/libs/registry';
import { MainLayout } from '@/components/templates/MainLayout';

const josefinSans = Josefin_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={josefinSans.className}>
        <StyledComponentsRegistry>
          <MainLayout>{children}</MainLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
