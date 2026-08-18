import "./globals.css";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';


const rubik = Rubik({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: 'HIS Global Conclave Edition 2 | Model United Nations',
  description: 'HIS Global Conclave Edition 2 is an exciting Model United Nations at Hindustan International School - Chennai, where students tackle global challenges with innovative solutions.',
  keywords: 'Model United Nations, MUN, HIS Global Conclave Edition 2, Hindustan International School Karapakkam, International Relations, Diplomacy, Global Issues, Student Conference, Education, Debate, Public Speaking, Leadership, Critical Thinking',
  authors: [{name: 'Bhuvanaesh R', url: 'https://www.linkedin.com/in/bhuvanaesh-r/'}, {name: 'Keshav Rajesh'}],
  creator: 'Hindustan International School, Karapakkam',
  openGraph: {
    title: 'HIS Global Conclave Edition 2 | Model United Nations',
    description: 'HIS Global Conclave Edition 2 is an MUN at Hindustan International School - Chennai, tackling global challenges.',
    url: 'https://his-global-conclave-edition-2.vercel.app/',
    siteName: 'HIS Global Conclave Edition 2',
    images: [
      {
        url: '/images/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Website Preview Image',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    images: {
      url: '/images/opengraph-image.png',
      alt: 'Website Preview Image',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{   
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubik.variable} ${rubik.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
