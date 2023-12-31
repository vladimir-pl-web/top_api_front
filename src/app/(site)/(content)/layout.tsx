
import { Inter } from "next/font/google";
import classes from './SiteLayout.module.scss'
import cn from 'classnames'
import Footer from "@/app/(site)/(content)/components/Footer/Footer";
import Header from "@/app/(site)/(content)/components/Header/Header";
import Sidebar from "@/app/(site)/(content)/components/Sidebar/Sidebar";
import Menu from "@/app/components/Menu/Menu";
import { AppContextProvider } from "@/app/context/MenuContest";
import { TopLevelCategory } from "@/app/interfaces/page.interface";
import Logo from "@/app/components/Logo/Logo";
import { Search } from "@/app/components";



const inter = Inter({
   style: "normal",
   subsets: ["latin"]
});

export const metadata = {
   title: "Pages",
   description: "Generated by create next app",
};

function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <AppContextProvider menu={[]} firstCategory={TopLevelCategory.Courses}>
         <div className={cn(classes.wrapper)}>
            <Header className={classes.header} children={undefined} />
            <Sidebar>
               <Logo />
               <Search />
               <Menu />
            </Sidebar>
            <div className={cn(classes.layout)}>
               {children}
            </div>
            <Footer>Footer</Footer>
         </div>
      </AppContextProvider>
   );
}

export default RootLayout