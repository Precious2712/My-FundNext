import React from 'react'
import Large from '../largeContent/Large'
import FolderHide from '../hide/FolderHide'
import Ventures from '../collaborative/ventures'

const OurTrader = () => {
    return (
        <div className='mt-20'>

            <div>
                <div className="m-auto flex justify-center items-center w-[200px] rounded-full pt-1 pb-1 bg-black border-t-[2px] border-t-[rgb(82,62,96)] border-b-[2px] border-b-[rgb(82,62,96)]">
                    <p className="text-white text-[13px]">Trader Feedback & Analysis</p>
                </div>

                <h1 className='text-white text-center font-sans font-bold text-2xl mt-5 lg:text-4xl'>Our Traders L❤️ve Us</h1>

                <div className='text-[rgb(159,157,169)] text-center mt-5 text-[17px]'>
                    <p>FundedNext shines with traders like you! See what real</p>
                    <p>traders have to say about our best-in-class prop trading</p>
                    <p>firm.</p>
                </div>

                <div className='flex justify-center gap-2 mt-7'>
                    <h1 className='text-white text-2xl '>Excellent </h1>
                    <svg className='mt-[5.5px]' xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 120 24" width="120" height="24">
                        <path className='' d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        <path d="M36 17.27L42.18 21l-1.64-7.03L46 9.24l-7.19-.61L36 2 33.19 8.63 26 9.24l5.46 4.73L29.82 21z" />
                        <path d="M60 17.27L66.18 21l-1.64-7.03L70 9.24l-7.19-.61L60 2 57.19 8.63 50 9.24l5.46 4.73L53.82 21z" />
                        <path d="M84 17.27L90.18 21l-1.64-7.03L94 9.24l-7.19-.61L84 2 81.19 8.63 74 9.24l5.46 4.73L77.82 21z" />
                        <path d="M108 17.27L114.18 21l-1.64-7.03L118 9.24l-7.19-.61L108 2 105.19 8.63 98 9.24l5.46 4.73L101.82 21z" />
                    </svg>
                </div>

                <p className='text-center mt-3 text-white text-[14px]'>Rated 4.6 / 5 based on 25,027 reviews on TrustPilot </p>

            </div>

            <div className='overflow-y-auto y-hidden h-[109vh] mt-16 '>

                <div className='w-[90.2%]  m-auto '>
                    <p className='text-[rgb(133,130,145)] text-[13px]'>Showing our 4 & 5 star reviews</p>

                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:flex gap-2 mt-2'>

                        <div className='flex flex-wrap lg:flex flex-col gap-3 text-[13px]'>

                            <div className=' bg-[rgb(248,249,250)] py-3 shadow-xl lg:w-[285px]'>
                                <svg className='ml-4' xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 120 24" width="120" height="24">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    <path d="M36 17.27L42.18 21l-1.64-7.03L46 9.24l-7.19-.61L36 2 33.19 8.63 26 9.24l5.46 4.73L29.82 21z" />
                                    <path d="M60 17.27L66.18 21l-1.64-7.03L70 9.24l-7.19-.61L60 2 57.19 8.63 50 9.24l5.46 4.73L53.82 21z" />
                                    <path d="M84 17.27L90.18 21l-1.64-7.03L94 9.24l-7.19-.61L84 2 81.19 8.63 74 9.24l5.46 4.73L77.82 21z" />
                                    <path d="M108 17.27L114.18 21l-1.64-7.03L118 9.24l-7.19-.61L108 2 105.19 8.63 98 9.24l5.46 4.73L101.82 21z" />
                                </svg>

                                <p className='mt-2 text-[13px] ml-4 text-[rgb(99,100,100)] font-sans font-bold'>Andreas Manz,10 hours ago</p>

                                <h4 className='font-bold ml-4 mt-1'>Best costumer support</h4>

                                <div className='ml-4 mt-2'>
                                    <p>I am new in the market. Needed help with</p>
                                    <p>understanding the platform. Aria blake</p>
                                    <p>took a long time and explained me</p>
                                    <p>everything step by step. She was so</p>
                                </div>

                            </div>

                            <div className=' bg-[rgb(248,249,250)] py-3 shadow-lg lg:w-[285px]'>
                                <svg className='ml-4' xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 120 24" width="120" height="24">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    <path d="M36 17.27L42.18 21l-1.64-7.03L46 9.24l-7.19-.61L36 2 33.19 8.63 26 9.24l5.46 4.73L29.82 21z" />
                                    <path d="M60 17.27L66.18 21l-1.64-7.03L70 9.24l-7.19-.61L60 2 57.19 8.63 50 9.24l5.46 4.73L53.82 21z" />
                                    <path d="M84 17.27L90.18 21l-1.64-7.03L94 9.24l-7.19-.61L84 2 81.19 8.63 74 9.24l5.46 4.73L77.82 21z" />
                                    <path d="M108 17.27L114.18 21l-1.64-7.03L118 9.24l-7.19-.61L108 2 105.19 8.63 98 9.24l5.46 4.73L101.82 21z" />
                                </svg>

                                <p className='mt-2 text-[13px] ml-4 text-[rgb(99,100,100)] font-sans font-bold '>Leonarce,12 hours ago</p>

                                <h4 className='font-bold ml-4 mt-1'>It is a good opportunity</h4>

                                <div className='ml-4 mt-1'>
                                    <p>Just received my first payout of $82 for</p>
                                    <p>passing stellar 2 phase but failed to pass</p>
                                    <p>5% threshold to received my profit split</p>
                                    <p>from challenge. Disbursement was pretty</p>
                                </div>

                            </div>

                            <div className=' bg-[rgb(248,249,250)] py-4 shadow-md lg:w-[285px]'>
                                <svg className='ml-4' xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 120 24" width="120" height="24">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    <path d="M36 17.27L42.18 21l-1.64-7.03L46 9.24l-7.19-.61L36 2 33.19 8.63 26 9.24l5.46 4.73L29.82 21z" />
                                    <path d="M60 17.27L66.18 21l-1.64-7.03L70 9.24l-7.19-.61L60 2 57.19 8.63 50 9.24l5.46 4.73L53.82 21z" />
                                    <path d="M84 17.27L90.18 21l-1.64-7.03L94 9.24l-7.19-.61L84 2 81.19 8.63 74 9.24l5.46 4.73L77.82 21z" />
                                    <path d="M108 17.27L114.18 21l-1.64-7.03L118 9.24l-7.19-.61L108 2 105.19 8.63 98 9.24l5.46 4.73L101.82 21z" />
                                </svg>

                                <p className='mt-2 text-[13px] ml-4'>Nader Boujlel, 2 days ago</p>

                                <h4 className='font-bold ml-4 mt-1'>FundedNext has been great</h4>

                                <div className='ml-4 mt-2'>
                                    <p>FundedNext has been great! Their</p>
                                    <p>support team was helpful, quick to</p>
                                    <p>respond, and made everything easy for</p>
                                    <p>me. I’m really happy with their service</p>
                                </div>
                            </div>

                            <div className=' bg-[rgb(248,249,250)] py-4 shadow-lg lg:w-[285px]'>
                                <svg className='ml-4' xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 120 24" width="120" height="24">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    <path d="M36 17.27L42.18 21l-1.64-7.03L46 9.24l-7.19-.61L36 2 33.19 8.63 26 9.24l5.46 4.73L29.82 21z" />
                                    <path d="M60 17.27L66.18 21l-1.64-7.03L70 9.24l-7.19-.61L60 2 57.19 8.63 50 9.24l5.46 4.73L53.82 21z" />
                                    <path d="M84 17.27L90.18 21l-1.64-7.03L94 9.24l-7.19-.61L84 2 81.19 8.63 74 9.24l5.46 4.73L77.82 21z" />
                                    <path d="M108 17.27L114.18 21l-1.64-7.03L118 9.24l-7.19-.61L108 2 105.19 8.63 98 9.24l5.46 4.73L101.82 21z" />
                                </svg>

                                <p className='mt-2 text-[13px] ml-4'>Ragil Bagus Fabian, 2 days ago</p>

                                <h4 className='font-bold ml-4'>good the support is very <br /> communicative</h4>

                                <div className='ml-4 mt-2'>
                                    <p>good the support is very communicative</p>
                                </div>

                            </div>

                            <div className=' bg-[rgb(248,249,250)] py-4 shadow-md lg:w-[285px]'>
                                <svg className='ml-4' xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 120 24" width="120" height="24">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    <path d="M36 17.27L42.18 21l-1.64-7.03L46 9.24l-7.19-.61L36 2 33.19 8.63 26 9.24l5.46 4.73L29.82 21z" />
                                    <path d="M60 17.27L66.18 21l-1.64-7.03L70 9.24l-7.19-.61L60 2 57.19 8.63 50 9.24l5.46 4.73L53.82 21z" />
                                    <path d="M84 17.27L90.18 21l-1.64-7.03L94 9.24l-7.19-.61L84 2 81.19 8.63 74 9.24l5.46 4.73L77.82 21z" />
                                    <path d="M108 17.27L114.18 21l-1.64-7.03L118 9.24l-7.19-.61L108 2 105.19 8.63 98 9.24l5.46 4.73L101.82 21z" />
                                </svg>

                                <p className='mt-2 text-[13px] ml-4'>Jasine Hachemi,2 days ago</p>

                                <h4 className='font-bold ml-4'>The customer support is insanely <br /> good</h4>

                                <div className='ml-4 mt-2'>
                                    <p>The customer support is insanely good!</p>
                                    <p>They always respond so fast. I brought</p>
                                    <p>multiple people to this broker 10/10 would</p>
                                    <p>recommend!!!</p>
                                </div>
                            </div>

                        </div>

                        <div className='flex flex-wrap lg:flex flex-col gap-3 text-[13px]'>

                            <div className=' bg-[rgb(248,249,250)] py-3 shadow-md lg:w-[285px]'>
                                <svg className='ml-4' xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 120 24" width="120" height="24">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    <path d="M36 17.27L42.18 21l-1.64-7.03L46 9.24l-7.19-.61L36 2 33.19 8.63 26 9.24l5.46 4.73L29.82 21z" />
                                    <path d="M60 17.27L66.18 21l-1.64-7.03L70 9.24l-7.19-.61L60 2 57.19 8.63 50 9.24l5.46 4.73L53.82 21z" />
                                    <path d="M84 17.27L90.18 21l-1.64-7.03L94 9.24l-7.19-.61L84 2 81.19 8.63 74 9.24l5.46 4.73L77.82 21z" />
                                    <path d="M108 17.27L114.18 21l-1.64-7.03L118 9.24l-7.19-.61L108 2 105.19 8.63 98 9.24l5.46 4.73L101.82 21z" />
                                </svg>

                                <p className='mt-2 text-[13px] ml-4 text-[rgb(99,100,100)] font-sans font-bold'>Monday Obidah,10 hours ago</p>

                                <h4 className='font-bold ml-4 mt-1'>Fundednext are indeed reliable and <br /> fast in all thier services </h4>

                                <div className='ml-4 mt-2'>
                                    <p>I am new in the market. Needed help with</p>
                                    <p>understanding the platform. Aria blake</p>
                                    <p>took a long time and explained me</p>
                                    <p>everything step by step. She was so</p>
                                </div>

                                <p className='text-center mt-2 text-green-700'>Read more</p>
                            </div>

                            <div className=' bg-[rgb(248,249,250)] py-3 shadow-lg lg:w-[285px]'>
                                <svg className='ml-4' xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 120 24" width="120" height="24">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    <path d="M36 17.27L42.18 21l-1.64-7.03L46 9.24l-7.19-.61L36 2 33.19 8.63 26 9.24l5.46 4.73L29.82 21z" />
                                    <path d="M60 17.27L66.18 21l-1.64-7.03L70 9.24l-7.19-.61L60 2 57.19 8.63 50 9.24l5.46 4.73L53.82 21z" />
                                    <path d="M84 17.27L90.18 21l-1.64-7.03L94 9.24l-7.19-.61L84 2 81.19 8.63 74 9.24l5.46 4.73L77.82 21z" />
                                    <path d="M108 17.27L114.18 21l-1.64-7.03L118 9.24l-7.19-.61L108 2 105.19 8.63 98 9.24l5.46 4.73L101.82 21z" />
                                </svg>

                                <p className='mt-2 text-[13px] ml-4 text-[rgb(99,100,100)] font-sans font-bold '>Max Okoth, 13 hours ago</p>

                                <h4 className='font-bold ml-4 mt-1'>great customer service experience!</h4>

                                <div className='ml-4 mt-1'>
                                    <p>great customer service experience!</p>
                                </div>

                            </div>

                            <div className=' bg-[rgb(248,249,250)] py-3 shadow-md lg:w-[285px]'>
                                <svg className='ml-4' xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 120 24" width="120" height="24">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    <path d="M36 17.27L42.18 21l-1.64-7.03L46 9.24l-7.19-.61L36 2 33.19 8.63 26 9.24l5.46 4.73L29.82 21z" />
                                    <path d="M60 17.27L66.18 21l-1.64-7.03L70 9.24l-7.19-.61L60 2 57.19 8.63 50 9.24l5.46 4.73L53.82 21z" />
                                    <path d="M84 17.27L90.18 21l-1.64-7.03L94 9.24l-7.19-.61L84 2 81.19 8.63 74 9.24l5.46 4.73L77.82 21z" />
                                    <path d="M108 17.27L114.18 21l-1.64-7.03L118 9.24l-7.19-.61L108 2 105.19 8.63 98 9.24l5.46 4.73L101.82 21z" />
                                </svg>

                                <p className='mt-2 text-[13px] ml-4 text-[rgb(99,100,100)] font-sans font-bold '>abdullah hussein, 16 hours ago</p>

                                <h4 className='font-bold ml-4 mt-1'>Amazing</h4>

                                <div className='ml-4 mt-1'>
                                    <p>Amazing, helpful , fast replies</p>
                                </div>
                            </div>

                            <div className=' bg-[rgb(248,249,250)] py-3 shadow-lg lg:w-[285px]'>
                                <svg className='ml-4' xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 120 24" width="120" height="24">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    <path d="M36 17.27L42.18 21l-1.64-7.03L46 9.24l-7.19-.61L36 2 33.19 8.63 26 9.24l5.46 4.73L29.82 21z" />
                                    <path d="M60 17.27L66.18 21l-1.64-7.03L70 9.24l-7.19-.61L60 2 57.19 8.63 50 9.24l5.46 4.73L53.82 21z" />
                                    <path d="M84 17.27L90.18 21l-1.64-7.03L94 9.24l-7.19-.61L84 2 81.19 8.63 74 9.24l5.46 4.73L77.82 21z" />
                                    <path d="M108 17.27L114.18 21l-1.64-7.03L118 9.24l-7.19-.61L108 2 105.19 8.63 98 9.24l5.46 4.73L101.82 21z" />
                                </svg>

                                <p className='mt-2 text-[13px] ml-4 text-[rgb(99,100,100)] font-sans font-bold '>Ali Lilo,17 hours ago</p>

                                <h4 className='font-bold ml-4'>The support is good and the <br /> company's…</h4>

                                <div className='ml-4 mt-1'>
                                    <p>The support is good and the company's</p>
                                    <p>servers are good. I am now waiting for</p>
                                    <p>the payout . I hope everything is fine.</p>
                                </div>

                            </div>

                            <div className=' bg-[rgb(248,249,250)] py-3 shadow-md lg:w-[285px]'>
                                <svg className='ml-4' xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 120 24" width="120" height="24">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    <path d="M36 17.27L42.18 21l-1.64-7.03L46 9.24l-7.19-.61L36 2 33.19 8.63 26 9.24l5.46 4.73L29.82 21z" />
                                    <path d="M60 17.27L66.18 21l-1.64-7.03L70 9.24l-7.19-.61L60 2 57.19 8.63 50 9.24l5.46 4.73L53.82 21z" />
                                    <path d="M84 17.27L90.18 21l-1.64-7.03L94 9.24l-7.19-.61L84 2 81.19 8.63 74 9.24l5.46 4.73L77.82 21z" />
                                    <path d="M108 17.27L114.18 21l-1.64-7.03L118 9.24l-7.19-.61L108 2 105.19 8.63 98 9.24l5.46 4.73L101.82 21z" />
                                </svg>

                                <p className='mt-2 text-[13px] ml-4 text-[rgb(99,100,100)] font-sans font-bold '>asandaosama,20 hours ago</p>

                                <h4 className='font-bold ml-4 mt-1'>great service super happy no <br /> complains…</h4>

                                <div className='ml-4 mt-1'>
                                    <p>great service super happy no complains!</p>
                                    <p>at all calm agents and they make sure</p>
                                    <p>you are sorted with whatever query you</p>
                                    <p>have big shout to andrew best buddy</p>
                                </div>
                            </div>

                        </div>

                        <div className='flex flex-wrap lg:flex flex-col gap-3 text-[13px]'>

                            <div className=' bg-[rgb(248,249,250)] py-3 shadow-md lg:w-[285px]'>
                                <svg className='ml-4' xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 120 24" width="120" height="24">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    <path d="M36 17.27L42.18 21l-1.64-7.03L46 9.24l-7.19-.61L36 2 33.19 8.63 26 9.24l5.46 4.73L29.82 21z" />
                                    <path d="M60 17.27L66.18 21l-1.64-7.03L70 9.24l-7.19-.61L60 2 57.19 8.63 50 9.24l5.46 4.73L53.82 21z" />
                                    <path d="M84 17.27L90.18 21l-1.64-7.03L94 9.24l-7.19-.61L84 2 81.19 8.63 74 9.24l5.46 4.73L77.82 21z" />
                                    <path d="M108 17.27L114.18 21l-1.64-7.03L118 9.24l-7.19-.61L108 2 105.19 8.63 98 9.24l5.46 4.73L101.82 21z" />
                                </svg>

                                <p className='mt-2 text-[13px] ml-4 text-[rgb(99,100,100)] font-sans font-bold '>Alaba Alasan,11 hours ago</p>

                                <h4 className='font-bold ml-4 mt-1'>Quick service and response <br /> delivery </h4>

                                <div className='ml-4 mt-1'>
                                    <p>The most significant experience I have</p>
                                    <p>with FundedNext is quick service and</p>
                                    <p>response delivery. The company is</p>
                                    <p>faithful and customer focused institutional</p>
                                    <p>frame work. With FundedNext, I have</p>
                                    <p>gotten a lot of trading experience.</p>
                                </div>
                            </div>

                            <div className=' bg-[rgb(248,249,250)] py-3 shadow-lg lg:w-[285px]'>
                                <svg className='ml-4' xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 120 24" width="120" height="24">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    <path d="M36 17.27L42.18 21l-1.64-7.03L46 9.24l-7.19-.61L36 2 33.19 8.63 26 9.24l5.46 4.73L29.82 21z" />
                                    <path d="M60 17.27L66.18 21l-1.64-7.03L70 9.24l-7.19-.61L60 2 57.19 8.63 50 9.24l5.46 4.73L53.82 21z" />
                                    <path d="M84 17.27L90.18 21l-1.64-7.03L94 9.24l-7.19-.61L84 2 81.19 8.63 74 9.24l5.46 4.73L77.82 21z" />
                                    <path d="M108 17.27L114.18 21l-1.64-7.03L118 9.24l-7.19-.61L108 2 105.19 8.63 98 9.24l5.46 4.73L101.82 21z" />
                                </svg>

                                <p className='mt-2 text-[13px] ml-4 text-[rgb(99,100,100)] font-sans font-bold '>Zakaria MouGui,13 hours ago</p>

                                <h4 className='font-bold ml-4 mt-1'>Amazing prices</h4>

                                <div className='ml-4 mt-1'>
                                    <p>Amazing prices, number one support in</p>
                                    <p>the industry, flexible trading experience.</p>
                                </div>

                            </div>

                            <div className=' bg-[rgb(248,249,250)] py-3 shadow-md lg:w-[285px]'>
                                <svg className='ml-4' xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 120 24" width="120" height="24">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    <path d="M36 17.27L42.18 21l-1.64-7.03L46 9.24l-7.19-.61L36 2 33.19 8.63 26 9.24l5.46 4.73L29.82 21z" />
                                    <path d="M60 17.27L66.18 21l-1.64-7.03L70 9.24l-7.19-.61L60 2 57.19 8.63 50 9.24l5.46 4.73L53.82 21z" />
                                    <path d="M84 17.27L90.18 21l-1.64-7.03L94 9.24l-7.19-.61L84 2 81.19 8.63 74 9.24l5.46 4.73L77.82 21z" />
                                    <path d="M108 17.27L114.18 21l-1.64-7.03L118 9.24l-7.19-.61L108 2 105.19 8.63 98 9.24l5.46 4.73L101.82 21z" />
                                </svg>

                                <p className='mt-2 text-[13px] ml-4 text-[rgb(99,100,100)] font-sans font-bold '>Aziz Alasfoor,16 hours ago</p>

                                <h4 className='font-bold ml-4 mt-1'>Very fast 👌</h4>

                                <div className='ml-4 mt-2'>
                                    <p>It was very was giving Phase 2</p>
                                </div>
                            </div>

                            <div className=' bg-[rgb(248,249,250)] py-4 shadow-lg lg:w-[285px]'>
                                <svg className='ml-4' xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 120 24" width="120" height="24">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    <path d="M36 17.27L42.18 21l-1.64-7.03L46 9.24l-7.19-.61L36 2 33.19 8.63 26 9.24l5.46 4.73L29.82 21z" />
                                    <path d="M60 17.27L66.18 21l-1.64-7.03L70 9.24l-7.19-.61L60 2 57.19 8.63 50 9.24l5.46 4.73L53.82 21z" />
                                    <path d="M84 17.27L90.18 21l-1.64-7.03L94 9.24l-7.19-.61L84 2 81.19 8.63 74 9.24l5.46 4.73L77.82 21z" />
                                    <path d="M108 17.27L114.18 21l-1.64-7.03L118 9.24l-7.19-.61L108 2 105.19 8.63 98 9.24l5.46 4.73L101.82 21z" />
                                </svg>

                                <p className='mt-1 tex-[13px] ml-4 text-[rgb(99,100,100)] font-sans font-bold '>John Joshua Gallardo, 17 hours ago</p>

                                <h4 className='font-bold ml-4'>Thank you big help </h4>

                                <div className='ml-4 mt-1'>
                                    <p>Thank you big help</p>
                                </div>

                            </div>

                            <div className=' bg-[rgb(248,249,250)] py-4 shadow-md lg:w-[285px]'>
                                <svg className='ml-4' xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 120 24" width="120" height="24">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    <path d="M36 17.27L42.18 21l-1.64-7.03L46 9.24l-7.19-.61L36 2 33.19 8.63 26 9.24l5.46 4.73L29.82 21z" />
                                    <path d="M60 17.27L66.18 21l-1.64-7.03L70 9.24l-7.19-.61L60 2 57.19 8.63 50 9.24l5.46 4.73L53.82 21z" />
                                    <path d="M84 17.27L90.18 21l-1.64-7.03L94 9.24l-7.19-.61L84 2 81.19 8.63 74 9.24l5.46 4.73L77.82 21z" />
                                    <path d="M108 17.27L114.18 21l-1.64-7.03L118 9.24l-7.19-.61L108 2 105.19 8.63 98 9.24l5.46 4.73L101.82 21z" />
                                </svg>

                                <p className='mt-2 text-[13px] ml-4'>سید جواد حسینی خواه, 21 hours ago</p>

                                <h4 className='font-bold ml-4 mt-1'>خیلی عالی ممنون از لطف همه همکارام</h4>

                                <div className='ml-4 mt-2'>
                                    <p>خیلی عالی ممنون از لطف همه همکارام</p>
                                </div>
                            </div>

                        </div>

                        <div className='flex flex-wrap lg:flex flex-col gap-3 text-[13px]'>

                            <div className=' bg-[rgb(248,249,250)] py-4 shadow-md lg:w-[285px]'>
                                <svg className='ml-4' xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 120 24" width="120" height="24">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    <path d="M36 17.27L42.18 21l-1.64-7.03L46 9.24l-7.19-.61L36 2 33.19 8.63 26 9.24l5.46 4.73L29.82 21z" />
                                    <path d="M60 17.27L66.18 21l-1.64-7.03L70 9.24l-7.19-.61L60 2 57.19 8.63 50 9.24l5.46 4.73L53.82 21z" />
                                    <path d="M84 17.27L90.18 21l-1.64-7.03L94 9.24l-7.19-.61L84 2 81.19 8.63 74 9.24l5.46 4.73L77.82 21z" />
                                    <path d="M108 17.27L114.18 21l-1.64-7.03L118 9.24l-7.19-.61L108 2 105.19 8.63 98 9.24l5.46 4.73L101.82 21z" />
                                </svg>

                                <p className='mt-2 text-[13px] ml-4'>goat face, 1 day ago</p>

                                <h4 className='font-bold ml-4'>new in the market</h4>

                                <div className='ml-4 mt-2'>
                                    <p>I am new in the market. Needed help with</p>
                                    <p>understanding the platform. Aria blake</p>
                                    <p>took a long time and explained me</p>
                                    <p>everything step by step. She was so</p>
                                </div>

                                <p className='text-center mt-3'>Read more</p>
                            </div>

                            <div className=' bg-[rgb(248,249,250)] py-4 shadow-lg lg:w-[285px]'>
                                <svg className='ml-4' xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 120 24" width="120" height="24">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    <path d="M36 17.27L42.18 21l-1.64-7.03L46 9.24l-7.19-.61L36 2 33.19 8.63 26 9.24l5.46 4.73L29.82 21z" />
                                    <path d="M60 17.27L66.18 21l-1.64-7.03L70 9.24l-7.19-.61L60 2 57.19 8.63 50 9.24l5.46 4.73L53.82 21z" />
                                    <path d="M84 17.27L90.18 21l-1.64-7.03L94 9.24l-7.19-.61L84 2 81.19 8.63 74 9.24l5.46 4.73L77.82 21z" />
                                    <path d="M108 17.27L114.18 21l-1.64-7.03L118 9.24l-7.19-.61L108 2 105.19 8.63 98 9.24l5.46 4.73L101.82 21z" />
                                </svg>

                                <p className='mt-2 text-[13px] ml-4'>Hishan Mohamed,1 day ago</p>

                                <h4 className='font-bold ml-4'>It is a good opportunity</h4>

                                <div className='ml-4 mt-2'>
                                    <p>It is a good opportunity</p>
                                </div>

                            </div>

                            <div className=' bg-[rgb(248,249,250)] py-4 shadow-md lg:w-[285px]'>
                                <svg className='ml-4' xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 120 24" width="120" height="24">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    <path d="M36 17.27L42.18 21l-1.64-7.03L46 9.24l-7.19-.61L36 2 33.19 8.63 26 9.24l5.46 4.73L29.82 21z" />
                                    <path d="M60 17.27L66.18 21l-1.64-7.03L70 9.24l-7.19-.61L60 2 57.19 8.63 50 9.24l5.46 4.73L53.82 21z" />
                                    <path d="M84 17.27L90.18 21l-1.64-7.03L94 9.24l-7.19-.61L84 2 81.19 8.63 74 9.24l5.46 4.73L77.82 21z" />
                                    <path d="M108 17.27L114.18 21l-1.64-7.03L118 9.24l-7.19-.61L108 2 105.19 8.63 98 9.24l5.46 4.73L101.82 21z" />
                                </svg>

                                <p className='mt-2 text-[13px] ml-4'>Nader Boujlel, 2 days ago</p>

                                <h4 className='font-bold ml-4'>FundedNext has been great</h4>

                                <div className='ml-4 mt-2'>
                                    <p>FundedNext has been great! Their</p>
                                    <p>support team was helpful, quick to</p>
                                    <p>respond, and made everything easy for</p>
                                    <p>me. I’m really happy with their service</p>
                                </div>
                            </div>

                            <div className=' bg-[rgb(248,249,250)] py-4 shadow-lg lg:w-[285px]'>
                                <svg className='ml-4' xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 120 24" width="120" height="24">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    <path d="M36 17.27L42.18 21l-1.64-7.03L46 9.24l-7.19-.61L36 2 33.19 8.63 26 9.24l5.46 4.73L29.82 21z" />
                                    <path d="M60 17.27L66.18 21l-1.64-7.03L70 9.24l-7.19-.61L60 2 57.19 8.63 50 9.24l5.46 4.73L53.82 21z" />
                                    <path d="M84 17.27L90.18 21l-1.64-7.03L94 9.24l-7.19-.61L84 2 81.19 8.63 74 9.24l5.46 4.73L77.82 21z" />
                                    <path d="M108 17.27L114.18 21l-1.64-7.03L118 9.24l-7.19-.61L108 2 105.19 8.63 98 9.24l5.46 4.73L101.82 21z" />
                                </svg>

                                <p className='mt-1 text-[13px] ml-4 text-[rgb(99,100,100)] font-sans font-bold '>omid abdi,18 hours ago</p>

                                <h4 className='font-bold ml-4 mt-1'>best platform trade</h4>

                                <div className='ml-4 mt-1'>
                                    <p>i think is best platform trade prop</p>
                                </div>

                            </div>

                            <div className=' bg-[rgb(248,249,250)] py-4 shadow-md lg:w-[285px]'>
                                <svg className='ml-4' xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 120 24" width="120" height="24">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    <path d="M36 17.27L42.18 21l-1.64-7.03L46 9.24l-7.19-.61L36 2 33.19 8.63 26 9.24l5.46 4.73L29.82 21z" />
                                    <path d="M60 17.27L66.18 21l-1.64-7.03L70 9.24l-7.19-.61L60 2 57.19 8.63 50 9.24l5.46 4.73L53.82 21z" />
                                    <path d="M84 17.27L90.18 21l-1.64-7.03L94 9.24l-7.19-.61L84 2 81.19 8.63 74 9.24l5.46 4.73L77.82 21z" />
                                    <path d="M108 17.27L114.18 21l-1.64-7.03L118 9.24l-7.19-.61L108 2 105.19 8.63 98 9.24l5.46 4.73L101.82 21z" />
                                </svg>

                                <p className='mt-1 text-[13px] ml-4 text-[rgb(99,100,100)] font-sans font-bold '>FX PRO,23 hours ago</p>

                                <h4 className='font-bold ml-4 mt-1'>Thanks Ania to solve my problem 🫡 <br /> 🫡🫡</h4>

                                <div className='ml-4 mt-1'>
                                    <p>Thanks Ania to solve my problem 🫡🫡🫡</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>

            <div className='hidden lg:block'>
                <Large />
            </div>

            <div className='overflow-x-hidden block lg:hidden'>
                <FolderHide />
            </div>

            <Ventures />

        </div>
    )
}

export default OurTrader