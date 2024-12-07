import { Providers } from "@/components/providers";
import { fontSans } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import "@/styles/global.css";

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({ children }: WithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body style={fontSans.style}>
        <Providers>
          <div className="relative flex min-h-screen flex-col">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
