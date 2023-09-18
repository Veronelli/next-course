import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-slate-100 px-2">
            <menu className='flex justify-between h-16 items-center'>
                <Link href='/' className='p-2 rounded-md bg-lime-200'>
                    <h4 className='text-2xl'>🥑</h4>
                </Link>
                <Link href='/cart' className='p-2 rounded-md bg-white'>
                    <h4>🛒 - Carrito</h4>
                </Link>
            </menu>
        </nav>
    )
}

export {Navbar};