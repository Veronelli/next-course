import React from "react";
import { Navbar } from "../Navbar/Navbar";
import style from "./layout.module.css"

const Layout: React.FC = ({children}:React.PropsWithChildren) =>{
    return(
        <div className={style.container }>
            <Navbar/>
            {children}
            <footer className="text">
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