import { ListContext, ListAvocadosConsumer, IListContext } from "contexts/ListContext";
import React, { useContext } from "react";
import {v4 as uuidv4} from "uuid";
import { ProductCard } from "./ProductCard";
import { TProduct } from "types/Product";

function ListProducts() {
    const { listAvocados: products, length } = useContext<IListContext>(ListContext);
    return (
        <>
            <h1>Platzi and Next.js</h1>
            <h4>Avocatos: {length}</h4>
            <div className="grid grid-cols-5 gap-10">
                {products &&
                    products.map(product=>{return(
                        <ProductCard key={product.id} product={product}></ProductCard>
                    )})
                }
            </div>
        </>
    )
}

export { ListProducts };