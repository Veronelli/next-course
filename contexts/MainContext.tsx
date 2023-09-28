import React, { ReactNode } from "react";
import { TProduct } from "types/Product";
import { ProductHandeler } from "./utils"

const MainContext = React.createContext<IPropsMainContext>({});

export interface IPropsMainContext {
    shopCart?: Array<TProduct>
    setShopCart?: Function
}
type PropsMainContextProviderType = {
    children: ReactNode
}

export default function MainContextProvider({ children }: PropsMainContextProviderType) {
    const storageHandler = new ProductHandeler();
    const [shopCart, setShopCart] = React.useState<Array<TProduct>>();

    React.useEffect(() => {
        storageHandler.getProducts("products-cart").then(res => {
            setShopCart(res)
        })
    }, [])

    React.useEffect(() => {
        storageHandler.setProduct("products-cart", shopCart)
    }, [shopCart])

    return (
        <MainContext.Provider value={{
            setShopCart,
            shopCart,
        }}>
            {children}
        </MainContext.Provider>
    )

}

export { MainContext, MainContextProvider };