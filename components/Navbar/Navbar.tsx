import React from 'react';
import Link from 'next/link';
import { MainContext } from 'contexts/MainContext';

const Navbar: React.FC = () => {
    const { shopCart } = React.useContext(MainContext);
    
    return (
        <nav className="bg-slate-100 px-2">
            <menu className='flex justify-between h-16 items-center'>
                <Link href='/' className='p-2 rounded-md bg-lime-200'>
                    <h4 className='text-2xl'>🥑</h4>
                </Link>
                <Link href='/product_cart' className='p-2 rounded-md bg-white'>
                    <h4>🛒 - Carrito ({shopCart?.length})</h4>
                </Link>
            </menu>
        </nav>
    )
}

export {Navbar};