// import { FunctionComponent, ReactNode } from "react";
// import WithLayout from "../HOC/LayoutWithMain";
// import { ISiteLayoutTypes } from "../Layouts/RootLayoutTypes";

// export const metadata = {
//   title: "Site Content",
//   description: "Generated by create next app",
// };

// const SiteLayout:FunctionComponent<Record<string, never> & { children?: ReactNode; }> = ({children})=> {
  
//  return (
//    <div>
//      {children}
//   </div>
//   );
// }
// export default WithLayout(SiteLayout)
import Head from "next/head";
import "../../app/globals.scss";
import { Inter } from "next/font/google";

const inter = Inter({
  style: "normal",
  subsets: ["latin"]
 });
 
 export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
 };
 
 function RootLayout({
  children,
 }: {
  children: React.ReactNode;
 }) {
  return (
   <html lang="en">
    <Head>
     <title>My next app</title>
     <link rel="preconnect" href="https://fonts.googleapis.com" />
     <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin={"anonymous"}
     />
     <link
      href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;600;700;800;900&display=swap"
      rel="stylesheet"
     />
    </Head>
    <body
     className={inter.className}
      >
        {children}
    </body>
   </html>
  );
 }
 
 export default RootLayout