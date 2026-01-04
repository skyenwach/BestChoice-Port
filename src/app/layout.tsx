import type { Metadata } from "next";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";
import { ThemeProvider } from "@/components/theme-provider";
import { headingFont, bodyFont } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Olukoju BestChoice | Social Media Strategist",
  description: "I turn scrolls into sales. Data-driven social media strategy for beauty, food, real-estate & personal brands.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://olukoju.com",
    siteName: "Olukoju BestChoice",
    title: "Olukoju BestChoice | Social Media Strategist",
    description: "I turn scrolls into sales. Data-driven social media strategy for beauty, food, real-estate & personal brands.",
    images: [
      {
        url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/HR-ed-1765970933301.jpg?width=1200&height=630&resize=contain",
        width: 1200,
        height: 630,
        alt: "Olukoju BestChoice - Social Media Strategist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Olukoju BestChoice | Social Media Strategist",
    description: "I turn scrolls into sales. Data-driven social media strategy for beauty, food, real-estate & personal brands.",
    images: ["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/HR-ed-1765970933301.jpg?width=1200&height=630&resize=contain"],
  },
  keywords: ["social media strategist", "digital marketing", "content strategy", "social media management", "Instagram growth", "brand strategy"],
  authors: [{ name: "Olukoju BestChoice" }],
  creator: "Olukoju BestChoice",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="antialiased">
        <ThemeProvider defaultTheme="dark" attribute="class">
          {children}
        </ThemeProvider>
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
