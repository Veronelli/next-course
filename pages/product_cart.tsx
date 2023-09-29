import { MainContext } from "contexts/MainContext"
import React from "react"
import { TProduct } from "types/Product"
export default function ModalProductCart(){
    const { shopCart } = React.useContext(MainContext)
    console.log(shopCart)
    return (
        <>
            <div className="flex flex-col my-12 justify-center">
                <div className="flex justify-center">
                    <h1 className="text-3xl font-bold border-b-2 border-slate-300">Carrito</h1>
                </div>
                <ul className="mt-9">
                    {
                        shopCart.map((product: TProduct)=>(
                            <>
                                <li>
                                    {product.id}
                                </li>
                            </>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}
