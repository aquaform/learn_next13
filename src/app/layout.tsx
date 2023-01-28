import './globals.css';
// import  { Noto_Sans } from '@next/font/google'
//
// const noto_sans = Noto_Sans({
//     subsets: ['cyrillic', 'latin'],
//     weight: ['300', '400', '500', '700', '800'],
//     variable: '--noto-sans'
// })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      {/*


        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <title>Учу некст</title>
      <head />
      <body>{children}</body>
    </html>
  );
}
