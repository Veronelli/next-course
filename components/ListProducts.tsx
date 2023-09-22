import { ListContext, ListAvocadosConsumer } from "contexts/ListContext";
import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { ProductCard } from "./ProductCard";

function ListProducts() {
    const { listAvocados: products, length } = useContext(ListContext);
    console.log(products)
    return (
        <>
            <h1>Platzi and Next.js</h1>
            <h4>Avocatos: {length}</h4>
            <div className="grid grid-cols-5 gap-10">
                {products.map(product => {
                    return (
                        <ProductCard product={product}></ProductCard>
                    )})}
            </div>
        </>
    )
}

export { ListProducts };