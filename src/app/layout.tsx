import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import TopNav from "~/components/ui/TopNav";

export const metadata: Metadata = {
  title: "cherish",
  description: "never forget",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="gap-4 flex min-h-screen flex-col items-center justify-start font-mono text-slate-800">
        <TopNav />
        <div className="flex flex-row justify-center items-center">
          {children}
        </div>
      </body>
    </html>
  );
};
