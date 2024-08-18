import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <head>
        <title>Streaming SSR Example</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
