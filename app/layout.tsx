import type { Metadata } from 'next';
import './globals.css';
import './flap.css';

export const metadata: Metadata = {
  title: 'Flap Tuning Lab｜飛翔小鳥參數實驗室',
  description: '調整拍翅、重力、速度與管道參數，試飛並找出最順手的遊戲手感。',
  openGraph: {
    title: 'Flap Tuning Lab｜飛翔小鳥參數實驗室',
    description: '調整參數，找出你的最佳飛行手感。',
    type: 'website',
    images: [{ url: '/og.png', width: 1792, height: 923, alt: 'Flap Tuning Lab 飛翔小鳥參數實驗室' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flap Tuning Lab｜飛翔小鳥參數實驗室',
    description: '調整參數，找出你的最佳飛行手感。',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
