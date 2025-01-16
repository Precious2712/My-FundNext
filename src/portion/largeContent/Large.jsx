import React from 'react'

import background from '/glob-img-corner (1).png'
import img1 from '@/assets/1707391656.jpeg'
import img2 from '@/assets/1707391674.jpeg'
import img3 from '@/assets/1707391689.jpeg'
import img4 from '@/assets/1707391702.jpeg'
import img5 from '@/assets/1707391719.jpeg'
import img6 from '@/assets/1707391732.jpeg'
import img7 from '@/assets/1707391745.jpeg'
import img8 from '@/assets/1707391758.jpeg'

const Large = () => {
    return (
        <div className='mt-32 rounded-[40px] backgroundImage'>

            <div className='pt-[80px] ml-20'>
                <h1 className='text-white text-[66px] font-bold'>Global Events</h1>
                <div className='mt-9 text-[20px] text-[rgb(96,92,115)] font-bold font-sans'>
                    <p>Dive into FundedNext's global events, where trading enthusiasts connect, engage, and</p>
                    <p>grow. We’re more than the best prop firm, we’re a community of new and experienced</p>
                    <p>traders committed to learning, growing, and finding success.</p>
                </div>
                <div className='mt-6 text-white'>
                    <a href="" className=''>Learn more</a>
                </div>
            </div>

            <div className=' w-[86%] overflow-x-auto m-auto'>

                <div className='overflow-x-hidden'>
                    <div className=' flex gap-2 motion '>
                        <div className='mt-12 shrink-0'>
                            <img className='w-64' src={img1} alt="" />
                        </div>
                        <div className='mt-12 shrink-0'>
                            <img className='w-64' src={img2} alt="" />
                        </div>
                        <div className='mt-12 shrink-0'>
                            <img className='w-64' src={img3} alt="" />
                        </div>
                        <div className='mt-12 shrink-0'>
                            <img className='w-64' src={img4} alt="" />
                        </div>
                        <div className='mt-12 shrink-0'>
                            <img className='w-64' src={img5} alt="" />
                        </div>
                        <div className='mt-12 shrink-0'>
                            <img className='w-64' src={img6} alt="" />
                        </div>
                        <div className='mt-12 shrink-0'>
                            <img className='w-64' src={img7} alt="" />
                        </div>
                        <div className='mt-12 shrink-0'>
                            <img className='w-64' src={img8} alt="" />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Large