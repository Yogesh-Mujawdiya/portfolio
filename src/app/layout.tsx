import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://yogesh-mujawdiya.vercel.app/"),
  authors: {
    name: "Yogesh",
    url: "https://yogesh-mujawdiya.vercel.app/",
  },
  generator: "Next.js",
  keywords: [
    "Next.js",
    "Portfolio",
    "Yogesh",
    "Full Stack Developer",
    "Freelancer",
  ],
  referrer: "origin-when-cross-origin",
  robots: "all",
  title: "Yogesh Portfolio",
  alternates: {
    canonical: "https://yogesh-mujawdiya.vercel.app/",
    languages: {
      "en-US": "https://yogesh-mujawdiya.vercel.app/",
      "en-GB": "https://yogesh-mujawdiya.vercel.app/",
    },
  },
  openGraph: {
    type: "profile",
    firstName: "Yogesh",
    lastName: "Kumar",
    username: "yogesh-mujawdiya",
    gender: "male",
  },
  twitter: {
    card: "summary",
    site: "https://yogesh-mujawdiya.vercel.app/",
  },
  bookmarks: ["https://yogesh-mujawdiya.vercel.app/"],
  creator: "Yogesh",
  publisher: "Yogesh",
  description:
    "I'm a Software Developer who is a highly motivated person with strong technical, problem-solving with excellent time management, leadership, and team skills who is likely to create an impact on the organization/work, I'm a part of and always loves to socialize and experience new things in life. I have a great experience in Python, Java, Angular, React, Microservices and Backend Technologies including Machine Learning.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
