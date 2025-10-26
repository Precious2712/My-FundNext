import crist from '@/assets/christ_gayle.webp'
import john from '@/assets/colin.webp'
import colins from '@/assets/martinez.webp'
import React, { useState } from "react";
const VideoModalOverlay = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className=' overflow-x-hidden flex flex-wrap gap-9 ml-3 lg:justify-center'>

            <div className=' w-full ml-0  lg:w-[30%]  '>
                <div className="flex justify-center w-[110px] rounded-full pt-1 pb-1 bg-black border-t-[2px] border-t-[rgb(82,62,96)] border-b-[2px] border-b-[rgb(82,62,96)]">
                    <p className="text-white text-[15px]">Start Talk</p>
                </div>
                <div className='mt-4'>
                    <h1 className='text-white text-4xl font-bold lg:text-5xl'>Icons</h1>
                    <h1 className='text-white text-4xl font-bold lg:text-6xl'>Around the</h1>
                    <p className='text-white text-5xl font-bold lg:text-6xl'>World</p>
                </div>
                <div className='mt-4 text-[rgb(194,192,200)]'>
                    <p className=' text-[16px]'>Global leaders are cheering for and</p>
                    <p className=''>supporting FundedNext. Now, it is</p>
                    <p className=''>your turn to be a part of the best</p>
                    <p className=''>trading challenge.</p>
                </div>
            </div>

            <div className='  overflow-x-auto w-full no-scrollbar lg:w-[60%]  box-border'>

                <div className=' flex gap-7 '>

                    <div className="relative w-[43%]  shrink-0 lg:w-[30%]">
                        {/* Image */}
                        <img
                            src={colins}
                            alt="Thumbnail"
                            className="w-full h-[] border rounded-[13px] "
                        />

                        {/* Play Button */}
                        {/* <button
                            className=" w-[26%] h-16 rounded-full absolute top-40 left-24 m-auto bg-red-500 text-white px-3 py-2 text-sm hover:bg-red-600 "
                            onClick={() => setIsModalOpen(true)}
                        >
                            ▶
                        </button> */}

                        {/* Modal */}
                        {isModalOpen && (
                            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-10 z-50">
                                <div className="bg-white rounded-lg w-11/12 max-w-lg p-4 relative">
                                    {/* Close Button */}
                                    <button
                                        className="absolute top-0 right-3 text-blue-600 hover:text-gray-800"
                                        onClick={closeModal}
                                    >
                                        ✖
                                    </button>
                                    {/* Video */}
                                    {/* <video
                                        src="https://www.w3schools.com/html/mov_bbb.mp4"
                                        className="w-full rounded"
                                        controls
                                        autoPlay
                                    /> */}
                                </div>
                            </div>
                        )}
                        <div className='mt-4 '>
                            <h1 className='text-white text-1xl font-bold'>"Passion takes you to</h1>
                            <h1 className='text-white text-1xl font-bold'>glory."</h1>
                            <p className='text-white text-1xl font-bold mt-7 '>Emi Martinez,  Footballer</p>
                        </div>
                    </div>

                    <div className="relative w-[43%]  rounded-[13px] shrink-0 lg:w-[30%] ">
                        {/* Image */}
                        <img
                            src={crist}
                            alt="Thumbnail"
                            className="w-full h-[] border rounded-[13px]"
                        />

                        {/* Play Button */}
                        {/* <button
                            className=" w-[26%] h-16 rounded-full absolute top-40 left-24 m-auto bg-red-500 text-white px-3 py-2 text-sm hover:bg-red-600 "
                            onClick={() => setIsModalOpen(true)}
                        >
                            ▶
                        </button> */}

                        {/* Modal */}
                        {isModalOpen && (
                            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                                <div className="bg-white rounded-lg w-11/12 max-w-lg p-4 relative">
                                    {/* Close Button */}
                                    <button
                                        className="absolute top-0 right-3 text-blue-600 hover:text-gray-800"
                                        onClick={closeModal}
                                    >
                                        ✖
                                    </button>
                                    {/* Video */}
                                    {/* <video
                                        src="https://www.w3schools.com/html/mov_bbb.mp4"
                                        className="w-full rounded"
                                        controls
                                        autoPlay
                                    /> */}
                                </div>
                            </div>
                        )}
                        <div className='mt-4'>
                            <h1 className='text-white text-1xl font-bold'>"Never give up, it's</h1>
                            <h1 className='text-white text-1xl font-bold'>something you should</h1>
                            <h1 className='text-white text-1xl font-bold'>look into."</h1>
                            <p className='text-white text-1xl font-bold mt-6 '>Chris Gayle , Cricketer</p>
                        </div>
                    </div>

                    <div className="relative w-[43%]  shrink-0 lg:w-[30%] ">
                        {/* Image */}
                        <img
                            src={john}
                            alt="Thumbnail"
                            className="w-full h-[] border rounded-[13px]"
                        />

                        {/* Play Button */}
                        {/* <button
                            className=" w-[26%] h-16 rounded-full absolute top-40 left-24  m-auto bg-red-500 text-white px-3 py-2 text-sm hover:bg-red-600"
                            onClick={() => setIsModalOpen(true)}
                        >
                            ▶
                        </button> */}

                        {/* Modal */}
                        {isModalOpen && (
                            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                                <div className="bg-white rounded-lg w-11/12 max-w-lg p-4 relative">
                                    {/* Close Button */}
                                    <button
                                        className="absolute top-0 right-3 text-blue-600 hover:text-gray-800"
                                        onClick={closeModal}
                                    >
                                        ✖
                                    </button>
                                    {/* Video */}
                                    {/* <video
                                        src="https://www.w3schools.com/html/mov_bbb.mp4"
                                        className="w-full rounded"
                                        controls
                                        autoPlay
                                    /> */}
                                </div>
                            </div>
                        )}
                        <div>
                            <h1 className='text-white text-1xl font-bold'>"Join FundedNext and</h1>
                            <h1 className='text-white text-1xl font-bold'>gain BIG, just like I hit</h1>
                            <h1 className='text-white text-1xl font-bold'>BIG sixes!"</h1>
                            <p className='text-white text-1xl font-bold mt-10 '>Colin Munro, Cricketer</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default VideoModalOverlay;