import "./globals.css";
import { Header, header } from './components/header'
import { Metadata } from "next";

export const metadata = {
  title: 'To do List',
  description: 'A melhor lista de tarefas do mundo',
  openGraph: {
    title: 'To  do List',
    url: 'https://todolist.com',
    siteName: 'To do List',
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`
          antialiased
          from-red-900
          to-black
          bg-gradient-to-bl
          `}
      >
        <Header />

        {children}
      </body>
    </html>
  );
}
