import React from "react";
export default function ProductCartItem({ item, children }) {
    return (
        <>
            <li className="flex justify-evenly rounded-b-md border-b-4 overflow-hidden border-slate-200 my-2 align-middle bg-slate-50">
                <div >
                    <img src={item.image} alt="" width={100} />
                </div>
                <div className="flex-1">
                    <p className="text-lg font-bold">{item.name}</p>
                    <p>SKU: {item.id}</p>
                </div>
                    <div className="flex">
                        {children}
                </div>
            </li>
        </>
    )
}