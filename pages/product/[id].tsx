import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import DataBase from 'databases/db'
import { IPropsMainContext, MainContext } from 'contexts/MainContext';
import { Main } from 'next/document';
import { TProduct } from 'types/Product';

const ProductItem = () => {
    const {shopCart, setShopCart} = React.useContext<IPropsMainContext>(MainContext);
    const { query: { id } }: any = useRouter();
    const dataBase = new DataBase();
    const [product, setProduct] = React.useState<TProduct>({});
    dataBase.getById(id).then(res => {
        setProduct(res);
    })

    const setToCartProducts = ()=>{
        const newProductToCart = [...shopCart, product]
        setShopCart(newProductToCart)
    }

    return (
        <div className='flex mt-11 justify-around w-full'>
            {product &&
                <>
                    <div style={{ width: "300px" }} className='flex mr-7 border-2 border-l-zinc-200 justify-center'>
                        <img src={product.image}></img>
                    </div>
                    <div className='flex-1 flex flex-col'>
                        <div className='flex flex-1 flex-col'>
                            <div>
                                <h2 className='text-lg font-bold'>{product.name}</h2>

                                <span className='text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-orange-200 text-orange-700 rounded-full'>SKU: {product.sku}</span>
                            </div>
                            <div className='pt-4'>
                                {product.attributes && <p>{product?.attributes?.description}</p>}
                            </div>
                        </div>

                        <button onClick={setToCartProducts} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 w-full">
                            <b>COMPRAR</b>
                            <svg className="w- h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </button>
                    </div>
                </>}
        </div>
    )

}

export default ProductItem