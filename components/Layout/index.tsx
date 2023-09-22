import React from "react";
import { Navbar } from "../Navbar/Navbar";
import style from "./layout.module.css"

const Layout: React.FC = ({children}:React.PropsWithChildren) =>{
    return(
        <div className={`${style.container} flex-col`}>
            <Navbar/>
            <article className="flex-grow-0">
                {children}
            </article>
            <footer className="text absolute mt-10 bg-slate-600 w-10/12">
                This is the footer
            </footer>
        <style jsx>
            {`
            .text{
                color: white;
            }
            `}
        </style>
        </div>
    )
}

export default Layout;