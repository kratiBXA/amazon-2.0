import './globals.css';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'My E-commerce App',
  description: 'An awesome online store',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="min-h-screen px-6 py-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
