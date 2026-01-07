import React from 'react';
import Link from 'next/link';

import { cn } from "@/lib/utils";
import { Spotlight } from './ui/Spotlight';
import { Button } from "./ui/moving-border";

import { Boxes } from "./ui/background-boxes";

function HeroSection() {
    return (
        <div className='h-auto md:h-screen w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>

            <Spotlight
                className="-top-40 left-0 md:-top-20 md:left-60"
                fill="#009689"
            />

            <Boxes />

            <div className='p-4 relative z-10 w-full text-center flex justify-center items-center flex-col gap-5 mt-36'>
                <h1 className='mt-20 md:mt-0 text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>BECOME A SUPER TRADER</h1>
                <p className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-2xl mx-auto'>Unlock the secrets of the top 1% professional institutional traders with the Lucknow Trading House VIP Membership. Get unlimited access to powerful institutional trading ideas, in depth trading education and world class technology enabled ecosystem.</p>


                <Link href={"/courses"} className='mt-4 w-max'>
                    <Button
                        borderRadius='1.75rem'
                        className='bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800'
                    >
                        Explore Courses
                    </Button>
                </Link>


                <div className="stock-ticker mt-28 text-sm overflow-hidden select-none flex border-y border-white p-2">
                    <ul className='shrink-0 min-w-full flex justify-between items-center'>
                        <li className="minus">
                            <span className="company">TATA MOTORS</span>
                            <span className="price">181.16</span>
                            <span className="change">-1.36 (-0.75%)</span>
                        </li>
                        <li className="plus">
                            <span className="company">Reliance Power</span>
                            <span className="price">199.40</span>
                            <span className="change">+7.43 (+3.87%)</span>
                        </li>
                        <li className="plus">
                            <span className="company">TATA STEEL</span>
                            <span className="price">587.65</span>
                            <span className="change">+4.09 (+0.70%)</span>
                        </li>
                        <li className="minus">
                            <span className="company">Hindustan Copper</span>
                            <span className="price">138.75</span>
                            <span className="change">-6.54 (-4.50%)</span>
                        </li>
                        <li className="plus">
                            <span className="company">Indian Ren. Energy</span>
                            <span className="price">790.92</span>
                            <span className="change">+2.75 (+0.35%)</span>
                        </li>
                        <li className="minus">
                            <span className="company">Groww</span>
                            <span className="price">407.54</span>
                            <span className="change">-2.80 (-0.68%)</span>
                        </li>
                        <li className="plus">
                            <span className="company">Solar Industries India</span>
                            <span className="price">487.05</span>
                            <span className="change">+5.31 (+1.10%)</span>
                        </li>
                        <li className="minus">
                            <span className="company">Vodafone Idea</span>
                            <span className="price">60.34</span>
                            <span className="change">-0.37 (-0.61%)</span>
                        </li>
                    </ul>

                    <ul aria-hidden="true" className='shrink-0 min-w-full flex justify-between items-center'>
                        <li className="minus">
                            <span className="company">Yes Bank</span>
                            <span className="price">181.16</span>
                            <span className="change">-1.36 (-0.75%)</span>
                        </li>
                        <li className="plus">
                            <span className="company">OLA Electric Mobility</span>
                            <span className="price">199.40</span>
                            <span className="change">+7.43 (+3.87%)</span>
                        </li>
                        <li className="plus">
                            <span className="company">Indian Energy Exchange</span>
                            <span className="price">587.65</span>
                            <span className="change">+4.09 (+0.70%)</span>
                        </li>
                        <li className="minus">
                            <span className="company">Nippon India</span>
                            <span className="price">138.75</span>
                            <span className="change">-6.54 (-4.50%)</span>
                        </li>
                        <li className="plus">
                            <span className="company">HDFC Bank</span>
                            <span className="price">790.92</span>
                            <span className="change">+2.75 (+0.35%)</span>
                        </li>
                        <li className="minus">
                            <span className="company">Tata Gold Exchange</span>
                            <span className="price">407.54</span>
                            <span className="change">-2.80 (-0.68%)</span>
                        </li>
                        <li className="plus">
                            <span className="company">Suzlon Energy</span>
                            <span className="price">487.05</span>
                            <span className="change">+5.31 (+1.10%)</span>
                        </li>
                        <li className="minus">
                            <span className="company">Reliance Infrastructure</span>
                            <span className="price">60.34</span>
                            <span className="change">-0.37 (-0.61%)</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;
