import React from "react";
import { getListAvocados } from "./utils";
import { TProduct } from "types/Product";

export interface IListContext {
    listAvocados?: Array<TProduct>
    length?: number
}

const ListContext = React.createContext<IListContext>({})

function ListAvocadosProvider({children}){
    const [listAvocados, setListAvocados] = React.useState([]);
    const [length, setLength] = React.useState(0);

    React.useEffect(()=>{
        getListAvocados().then((res)=>{
            setListAvocados(res);
            setLength(res.length);
        })
    },[])
    return (
        <ListContext.Provider value={{listAvocados,length}}>
            {children}
        </ListContext.Provider>
    )
}

function ListAvocadosConsumer({children}){
    return (
        <ListContext.Consumer>{children}</ListContext.Consumer>
    )
}

function EncapsulListAvocadosContext({children}){
    return(
        <ListAvocadosProvider>
            <ListAvocadosConsumer>
                {children}
            </ListAvocadosConsumer>
        </ListAvocadosProvider>
    )
}

export { ListAvocadosConsumer, ListContext, EncapsulListAvocadosContext, ListAvocadosProvider};