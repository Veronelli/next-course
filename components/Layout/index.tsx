import React from "react";
import { Navbar } from "../Navbar/Navbar";
import style from "./layout.module.css"
import MainContextProvider from "contexts/MainContext";

const Layout = ({children}:any) =>{
    return(
        <div className={`${style.container} flex-col`}>
            <MainContextProvider>
                <Navbar/>
                <article className="flex-grow-0">
                    {children}
                </article>
            </MainContextProvider>
            <footer className="text absolute mt-10 bg-slate-600 w-10/12">
                This is the footer
            </footer>
        </div>
    )
}

export default Layout;