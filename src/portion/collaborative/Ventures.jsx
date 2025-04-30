import React from 'react'

import { Button } from '@/components/ui/button'
import x from '@/assets/twitter_new (1).svg'
import discord from '@/assets/discord-new.svg'
import tour from '@/assets/tour-guide-cover-photo (1).jpeg'

const Ventures = () => {
    return (
        <div>

            <div className='w-[89%] mt-20 py-16  rounded-[35px] bg-[rgb(26,19,55)] m-auto flex flex-wrap gap-6 justify-center lg:justify-around '>
                <div>
                    <div className='text-white text-2xl lg:text-5xl font-bold'>
                        <h1>Collaborative Venture</h1>
                        <h1>Powered by Expertise</h1>
                    </div>

                    <div className='text-[rgb(188,187,197)] text-[13px] mt-10 lg:text-[21.5px] '>
                        <p>Take a tour and step inside our dynamic workspace, and</p>
                        <p>Experience the place where the magic happens for prop</p>
                        <p>traders around the world.</p>
                    </div>

                    <div className='mt-10 flex gap-16 '>
                        <div className='flex'>
                            <div className='w-1 h-[70%] bg-[rgb(105,52,238)] rounded-[2px] rotate-120 mt-1'></div>
                            <div className='ml-2'>
                                <h1 className=' text-white text-1xl lg:text-2xl'>350+</h1>
                                <p className=' text-[13px] text-[rgb(188,187,197)] mt-1 lg:text-[17px]'>Dedicated <br /> professionals</p>
                            </div>
                        </div>

                        <div className='flex'>
                            <div className='w-1 h-[60%] bg-[rgb(40,163,238)] rounded-[2px] rotate-120 mt-1'></div>
                            <div className='ml-2'>
                                <h1 className='text-white text-1xl lg:text-2xl'>24/7</h1>
                                <p className=' text-[13px] text-[rgb(188,187,197)] mt-1 lg:text-[17px]'>Customer <br /> Support</p>
                            </div>
                        </div>

                        <div className='flex'>
                            <div className='w-1 h-[70%] bg-[rgb(223,28,96)] rounded-[2px] rotate-120 mt-1'></div>
                            <div className='ml-2'>
                                <h1 className='text-white text-[12px] lg:text-2xl'>4 Offices</h1>
                                <p className=' text-[13px] text-[rgb(188,187,197)] mt-1 lg:text-[17px]'>Around <br /> the world </p>
                            </div>
                        </div>
                    </div>

                </div>

                <div>
                    <img className='w-72 lg:w-96 five border' src={tour} alt="" />
                </div>
            </div>

            <div className='mt-20 lg:mt-40'>
                <div className='w-[95%] m-auto lg:w-[100%]'>
                    <h1 className='text-white text-center text-3xl font-bold lg:text-[70px]'>Trade Smart & Win</h1>
                    <p className='text-[rgb(158,156,168)] text-center text-[18px] mt-8 font-serif lg:text-[20px]'>Join FundedNext today and experience a trading community unlike any other.</p>
                </div>

                <div className='flex flex-wrap lg:flex justify-center gap-6 mt-8 '>
                    <Button className='w-[80%] flex gap-3 bg-[rgb(92,39,231)] py-7 rounded-[35px] lg:w-[25%]'>
                        <img src={discord} alt="" />
                        <p className='text-white font-bold text-[17px]'>Join Dicord Community</p>
                    </Button>

                    <Button className='w-[80%] flex gap-3 bg-[rgb(6,112,225)] py-7 rounded-[35px] lg:w-[25%]'>
                        <img src={x} alt="" />
                        <p className='text-white font-sans font-bold text-[17px]'>Join X Community</p>
                    </Button>
                </div>
            </div>

        </div>
    )
}

export default Ventures