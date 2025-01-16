import { elementes } from '@/array/todo';
import img from '/logo-white.svg';
import { list } from '@/array/task';
import gb from '/gb.svg'
import { useEffect, useState } from 'react';

const HeadlineTag = () => {
    const [show, setShow] = useState(true);
    const [roll, setRoll] = useState();

    const handleToogle = () => {
        setShow(!show);
    };

    function handleRoller() {
        setRoll(scrollY)
        // console.log(roll);
    }

    window.addEventListener('scroll', handleRoller)

    return (
        <nav onScroll={handleRoller} className={`flex justify-between lg:justify-center gap-5 pt-3 pb-3 fixed w-full top-0 bg-[rgb(99,56,224)] ${roll > 100 ? 'hidden' : 'block bg-[rgb(72,72,72)]'}`}>
            <div className={`${show ? 'block' : 'hidden'} mt-[11px] ml-6`}>
                <img src={img} alt="" />
            </div>

            <div className={`flex-col ml-3 sm:flex-col lg:flex-row lg:flex gap-9 ${show ? 'hidden' : 'block translate-x-0'}`}>
                <div className={`flex flex-col sm:flex-col lg:flex-row gap-8 mt-[13px] sm:mt-[13px] md:mt-[13px] lg:mt-[13px]`}>
                    <div className='lg:hidden mt-[11px] ml-6'>
                        <img src={img} alt="" />
                    </div>
                    <ul>
                        <li className='text-white'>Home</li>
                    </ul>

                    <ul className='main'>
                        <li className='text-white'>
                            {
                                elementes[0].parents
                            }
                            <div className='part'>
                                <ul>
                                    <li className=''>
                                        {
                                            elementes[0].childes.map((el, i) => {
                                                return (
                                                    <div key={i} className=''>
                                                        <ul className='pt-2 pb-3'>
                                                            <li className='ml-3'>{el.keyA}</li>
                                                            <li className='mt-3 ml-3'>{el.keyB}</li>
                                                            <li className='mt-3 ml-3'>{el.keyc}</li>
                                                        </ul>
                                                    </div>
                                                )
                                            })
                                        }
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>

                    <ul>
                        <li className='text-white'>FAQ</li>
                    </ul>

                    <ul className='branch'>
                        <li className='text-white'>
                            {
                                list[0].parents
                            }
                            <div className='vine'>
                                <ul>
                                    <li>
                                        {
                                            list.map((el, i) => {
                                                return (
                                                    <div key={i} className='mt-[22px] pt-2 pb-3'>
                                                        <ul className='flex gap-2'>
                                                            <li className='text-pink-800 ml-3'>{el.keyA[0]}</li>
                                                            <li className='text-white'>{el.keyA[1]}</li>
                                                        </ul>
                                                        <ul className='flex gap-2 mt-3'>
                                                            <li className='ml-3'>{el.keyB[0]}</li>
                                                            <li>{el.keyB[1]}</li>
                                                        </ul>
                                                        <ul className='flex gap-2 mt-3'>
                                                            <li className='ml-3'>{el.keyC[0]}</li>
                                                            <li>{el.keyC[1]}</li>
                                                        </ul>
                                                        <ul className='flex gap-2 mt-3'>
                                                            <li className='ml-3'>{el.keyD[0]}</li>
                                                            <li>{el.keyD[1]}</li>
                                                        </ul>

                                                    </div>
                                                )
                                            })
                                        }
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>

                    <ul>
                        <li className='text-white'>More</li>
                    </ul>
                </div>


                <div className='flex gap-2 mt-2'>
                    <div className=''>
                        <button className='w-[93px] text-[13px] bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full'>
                            Sign Up
                        </button>
                    </div>
                    <div className=''>
                        <input className='w-[93px] h-[5vh] mt-1 text-blue-800 text-[13px] bg-transparent hover:text-blue-900 font-bold py-2 px-4 rounded-full' type="text" placeholder='Free Trial' />
                    </div>
                    <div className='w-[24px] mt-[0px] flex gap-2'>
                        <img src={gb} alt="" />
                        <p className='text-white mt-[6px]'>EN</p>
                    </div>
                </div>
            </div>

            <div onClick={handleToogle} className='flex gap-1 mt-4 mr-6 lg:hidden'>
                <i className="fa-solid fa-bars text-white mt-1"></i>
                <p className='text-white'>Menu</p>
            </div>
        </nav>
    )
};

export default HeadlineTag;