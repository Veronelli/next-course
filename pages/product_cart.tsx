import ProductCartItem from "components/ProductCartItem"
import { MainContext } from "contexts/MainContext"
import React from "react"
import { TProduct } from "types/Product"
export default function ModalProductCart() {
    const { shopCart , setShopCart} = React.useContext(MainContext)
    console.log(shopCart)

    const deleteFromCartProductItem = (idProduct: number) => {
        const deletedProductItem = shopCart.filter((item, index)=> idProduct !== index);
        setShopCart(deletedProductItem);
    }

    return (
        <>
            <div className="flex flex-col my-12 justify-center">
                <div className="flex justify-center">
                    <h1 className="text-3xl font-bold border-b-2 border-slate-300">Carrito</h1>
                </div>
                <ul className="mt-9">
                    {
                        shopCart?.map((product: TProduct, index: number) => (
                            <>
                                <ProductCartItem item={product} key={index}>
                                    <button onClick={()=>deleteFromCartProductItem(index)} className="px-5 py-3 text-fuchsia-50 font-bold bg-red-600">
                                        Delete
                                    </button>
                                </ProductCartItem>
                            </>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}
