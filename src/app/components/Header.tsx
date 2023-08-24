'use client'

import Image from 'next/image';
import golden_dancer from '../../../public/golden_dancer.png';
import { useState } from 'react';

const Hamburger = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 m-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
    )
}

const Mark = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 m-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    )
}

export const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="w-full min-h-fit fixed top-0 left-0 right-0">
            <div className='flex flex-row w-full justify-between items-center z-10 bg-white'>
                <div className='flex items-center w-full'>
                    <Image className='m-2 z-10' src={golden_dancer} width={50} height={50} alt={'dancer'} />
                    <p className='font-great-vibes text-3xl w-fit'>Dance Manager</p>
                </div>

                <ul className='hidden w-full md:flex flex-row justify-end items-center'>
                    <li className='m-4'>About</li>
                    <li className='m-4'>Features</li>
                    <li className='m-4'>Login</li>
                </ul>

                <div className='md:hidden z-10' onClick={() => setMenuOpen(menuOpen => !menuOpen)}>
                    { menuOpen ? <Mark /> : <Hamburger />}
                </div>
            </div>

            <div className={`md:hidden absolute top-0 left-0 w-full -z-10 ${menuOpen ? 'translate-y-10 transition ease-in-out duration-1000' : '-translate-y-full transition ease-in-out duration-1000'}`}>
                <ul className='flex w-full flex-col p-24 justify-around items-center bg-white h-[100vh]'>
                    <li className='m-4 p-4 text-5xl border-b-4'>About</li>
                    <li className='m-4 p-4 text-5xl border-b-4'>Features</li>
                    <li className='m-4 p-4 text-5xl border-b-4'>Login</li>
                </ul>
            </div>
        </nav>
    )
}