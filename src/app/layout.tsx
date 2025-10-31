import "/globals.css";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";


const rubik = Rubik({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: 'HIS Global Conclave Edition 2 - Homepage',
  description: 'The HIS Global Conclave is an exciting Model United Nations (MUN) conducted by us at Hindustan International School, Chennai. It invites students to discuss global challenges and propose innovative solutions.',
  keywords: 'Model United Nations, MUN, HIS Global Conclave, Hindustan International Scrool Karapakkam, International Relations, Diplomacy, Global Issues, Student Conference, Education, Debate, Public Speaking, Leadership, Critical Thinking',
  authors: [{name: 'Bhuvanaesh R', url: 'https://www.linkedin.com/in/bhuvanaesh-r-456372343/'}, {name: 'Keshav Rajesh'}],
  creator: '---- IGNORE ----',
  openGraph: {
    title: 'HIS Global Conclave Edition 2 - Homepage',
    description: 'The HIS Global Conclave is an exciting Model United Nations (MUN) conducted by us at Hindustan International School, Chennai. It invites students to discuss global challenges and propose innovative solutions.',
    url: 'To be added later',
    type: 'website',
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
      </body>
    </html>
  );
}
