import Head from "next/head";
import "../../app/globals.scss";
import { Inter } from "next/font/google";
import classes from './RootLayout.module.scss'
import cn from 'classnames'
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

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
    <div className={cn(classes.wrapper)}>
     <Header>Header</Header>
     <Sidebar>Sidebar</Sidebar>
     <main className={cn(classes.layout)}>
      {children}
     </main>
     <Footer>Footer</Footer>
    </div>

   </body>
  </html>
 );
}

export default RootLayout