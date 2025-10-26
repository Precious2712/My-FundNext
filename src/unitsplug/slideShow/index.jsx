import news from '/stellar-plan-new.svg'
import lite from '/stellar-lite-plan.svg'
import eva from '/evaluation-plan.svg'
import expres from '/express-plan.svg'
import { useState } from 'react';

const Booking = () => {
    const [first, setFirst] = useState(true);

    const [second, setSeconds] = useState(false);



    return (
        <div className=" bg-[rgb(67,25,151)] mt-16 pt-20 pb-[100px] lg:mt-[160px]">
            <h1 className='font-bold text-white text-center text-3xl lg:text-[50px]'>Choose the Best Plan</h1>

            <div className='rounded-full w-[95%] px-4 m-auto bg-[rgb(23,10,60)] py-3 mt-10 lg:w-[51%] flex gap-5 justify-center'>
                <div className='flex gap-2 justify-center items-center bg-white rounded-full py-2 w-[100px]  md:w-[73px] lg:w-[22%]'>
                    <img className='hidden lg:block' src={news} alt="" />
                    <p className='text-black text-[11px] lg:mt-1 lg:text-[17px]'>Stellar</p>
                </div>

                <div className='flex gap-2 justify-center hover:bg-[rgb(29,20,66)] rounded-full py-2 w-[100px]  md:w-[93px] lg:w-[22%]'>
                    <img className='hidden lg:block' src={lite} alt="" />
                    <p className='text-white text-[11px] lg:mt-1 lg:text-[17px]'>StellarLite</p>
                </div>

                <div className='flex gap-2 justify-center hover:bg-[rgb(29,20,66)] rounded-full py-2 w-[90px]  md:w-[93px] lg:w-[22%]'>
                    <img className='hidden lg:block' src={eva} alt="" />
                    <p className='text-white text-[11px] lg:mt-1 lg:text-[17px]'>Evaluation</p>
                </div>

                <div className='flex gap-2 justify-center hover:bg-[rgb(29,20,66)] rounded-full py-2 w-[90px]  md:w-[93px] lg:w-[22%]'>
                    <img className='hidden lg:block' src={expres} alt="" />
                    <p className='text-white text-[11px] lg:mt-1 lg:text-[17px]'>Express</p>
                </div>
            </div>

            <div className='flex gap-4 justify-center mt-10'>
                <p>Select Preference</p>
                <div className='flex'>
                    <input type="radio" name="" id="" />
                    <p>2-Steps</p>
                </div>

                <div className={`flex`}>
                    <input type="radio" name="" id="" />
                    <p>1-Steps</p>
                </div>

            </div>

            <div className='mt-8 overflow-x-hidden hidden lg:block'>

                <table className='border-collaspe w-full text-white bg-[rgb(13,10,54)]'>
                    <tbody className='w-[10%]'>
                        <tr className='w-[10%] bg-red-800'>
                            <td className='w-[] bg-[rgb(21,11,63)] p-[20px] '>Account Size</td>
                            <td className='w-[13%] bg-[rgb(21,11,63)] p-[20px] text-center'>$6,000</td>
                            <td className='w-[13%] bg-[rgb(21,11,63)] p-[20px] text-center'>$15,000</td>
                            <td className='w-[13%] bg-[rgb(21,11,63)] p-[20px] text-center'>$25,000</td>
                            <td className='w-[13%] bg-[rgb(21,11,63)] p-[20px] text-center'>$50,000</td>
                            <td className='w-[13%] bg-[rgb(21,11,63)] p-[20px] text-center'>$100,000</td>
                            <td className='w-[13%] bg-[rgb(21,11,63)] p-[20px] text-center'>$200,000</td>
                        </tr>
                    </tbody>
                </table>

                <table className='border-collaspe w-full '>
                    <tbody className='w-[10%]'>
                        <tr className='w-[10%] '>
                            <td className='w-[] bg-[rgb(22,11,63)]'></td>
                            <td className='w-[13%] bg-[rgb(16,11,59)] text-center'>
                                <button className="bg-blue-500 text-white px-4 py-2 rounded w-full font-bold">Get Plan <br /> $59</button>
                            </td>
                            <td className='w-[13%] bg-[rgb(16,11,59)] text-center'>
                                <button className="bg-blue-500 text-white px-4 py-2 rounded w-full font-bold">Get Plan <br /> $119</button>
                            </td>
                            <td className='w-[13%] bg-[rgb(21,11,63)] text-center'>
                                <button className="bg-blue-500 text-white px-4 py-2 rounded w-full font-bold">Get Plan <br /> $119</button>
                            </td>
                            <td className='w-[13%] bg-[rgb(16,11,59)] text-center'>
                                <button className="bg-blue-500 text-white px-4 py-2 rounded w-full font-bold">Get Plan <br /> $299</button>
                            </td>
                            <td className='w-[13%] bg-[rgb(16,11,59)] text-center'>
                                <button className="bg-blue-500 text-white px-4 py-2 rounded w-full font-bold">Get Plan <br /> $548</button>
                            </td>
                            <td className='w-[13%] bg-[rgb(16,11,59)] text-center'>
                                <button className="bg-blue-500 text-white px-4 py-2 rounded w-full font-bold">Get Plan <br /> $999</button>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <table className='border-collaspe w-full text-white '>
                    <tbody className=''>
                        <tr className=''>
                            <td className='w-[] bg-[rgb(13,10,54)] p-[20px] '>15% Profit Share From Challenge Phase</td>
                            <td className='w-[13%] bg-[rgb(13,10,54)] p-[20px] text-center'>$117</td>
                            <td className='w-[13%] bg-[rgb(13,10,54)] p-[20px] text-center'>$292.50</td>
                            <td className='w-[13%] bg-[rgb(13,10,54)] p-[20px] text-center'>$487.50</td>
                            <td className='w-[13%] bg-[rgb(13,10,54)] p-[20px] text-center'>$975</td>
                            <td className='w-[13%] bg-[rgb(13,10,54)] p-[20px] text-center'>$1,950</td>
                            <td className='w-[13%] bg-[rgb(13,10,54)] p-[20px] text-center'>$3,900</td>
                        </tr>
                    </tbody>
                </table>

                <table className='border-collaspe w-full text-white '>
                    <tbody className=''>
                        <tr className=''>
                            <td className='w-[] bg-[rgb(17,16,62)] p-[20px] '>Profit Target</td>
                            <td className='w-[13%] bg-[rgb(17,16,62)] p-[20px] text-center'>P1: 8%, P2: 5%</td>
                            <td className='w-[13%] bg-[rgb(17,16,62)] p-[20px] text-center'>P1: 8%, P2: 5%</td>
                            <td className='w-[13%] bg-[rgb(17,16,62)] p-[20px] text-center'>P1: 8%, P2: 5%</td>
                            <td className='w-[13%] bg-[rgb(17,16,62)] p-[20px] text-center'>P1: 8%, P2: 5%</td>
                            <td className='w-[13%] bg-[rgb(17,16,62)] p-[20px] text-center'>P1: 8%, P2: 5%</td>
                            <td className='w-[13%] bg-[rgb(17,16,62)] p-[20px] text-center'>P1: 8%, P2: 5%</td>
                        </tr>
                    </tbody>
                </table>

                <table className='border-collaspe w-full text-white '>
                    <tbody className='w-[10%]'>
                        <tr className='w-[10%] bg-red-800'>
                            <td className='w-[] bg-[rgb(13,10,54)] p-[20px] '>Maximum Daily Loss</td>
                            <td className='w-[13%] bg-[rgb(13,10,54)] p-[20px] text-center'>5% ($300)</td>
                            <td className='w-[13%] bg-[rgb(13,10,54)] p-[20px] text-center'>5% ($750)</td>
                            <td className='w-[13%] bg-[rgb(13,10,54)] p-[20px] text-center'>5% ($1,250)</td>
                            <td className='w-[13%] bg-[rgb(13,10,54)] p-[20px] text-center'>5% ($2,500)</td>
                            <td className='w-[13%] bg-[rgb(13,10,54)] p-[20px] text-center'>5% ($5,000)</td>
                            <td className='w-[13%] bg-[rgb(13,10,54)] p-[20px] text-center'>5% ($10,000)</td>
                        </tr>
                    </tbody>
                </table>

                <table className='border-collaspe w-full text-white '>
                    <tbody className=''>
                        <tr className=''>
                            <td className='w-[] bg-[rgb(17,16,62)] p-[20px] '>Maximum Overall Loss</td>
                            <td className='w-[13%] bg-[rgb(17,16,62)] p-[20px] text-center'>10% ($600)</td>
                            <td className='w-[13%] bg-[rgb(17,16,62)] p-[20px] text-center'>10% ($1,500)</td>
                            <td className='w-[13%] bg-[rgb(17,16,62)] p-[20px] text-center'>10% ($2,500)</td>
                            <td className='w-[13%] bg-[rgb(17,16,62)] p-[20px] text-center'>10% ($5,000)</td>
                            <td className='w-[13%] bg-[rgb(17,16,62)] p-[20px] text-center'>10% ($10,000)</td>
                            <td className='w-[13%] bg-[rgb(17,16,62)] p-[20px] text-center'>10% ($20,000)</td>
                        </tr>
                    </tbody>
                </table>

                <table className='border-collaspe w-full text-white '>
                    <tbody className='w-[10%]'>
                        <tr className='w-[10%] bg-red-800'>
                            <td className='w-[] bg-[rgb(13,10,54)] p-[20px] '>Balance Based Drawdown</td>
                            <td className='w-[13%] bg-[rgb(13,10,54)] p-[20px] text-center'><i className="fa-solid fa-check text-white mt-1"></i></td>
                            <td className='w-[13%] bg-[rgb(13,10,54)] p-[20px] text-center'><i className="fa-solid fa-check text-white mt-1"></i></td>
                            <td className='w-[13%] bg-[rgb(13,10,54)] p-[20px] text-center'><i className="fa-solid fa-check text-white mt-1"></i></td>
                            <td className='w-[13%] bg-[rgb(13,10,54)] p-[20px] text-center'><i className="fa-solid fa-check text-white mt-1"></i></td>
                            <td className='w-[13%] bg-[rgb(13,10,54)] p-[20px] text-center'><i className="fa-solid fa-check text-white mt-1"></i></td>
                            <td className='w-[13%] bg-[rgb(13,10,54)] p-[20px] text-center'><i className="fa-solid fa-check text-white mt-1"></i></td>
                        </tr>
                    </tbody>
                </table>

                <table className='border-collaspe w-full text-white '>
                    <tbody className=''>
                        <tr className=''>
                            <td className='w-[] bg-[rgb(17,16,62)] p-[20px] '>Minimum Trading</td>
                            <td className='w-[13%] bg-[rgb(17,16,62)] p-[20px] text-center'>5days</td>
                            <td className='w-[13%] bg-[rgb(17,16,62)] p-[20px] text-center'>5days</td>
                            <td className='w-[13%] bg-[rgb(17,16,62)] p-[20px] text-center'>5days</td>
                            <td className='w-[13%] bg-[rgb(17,16,62)] p-[20px] text-center'>5days</td>
                            <td className='w-[13%] bg-[rgb(17,16,62)] p-[20px] text-center'>5days</td>
                            <td className='w-[13%] bg-[rgb(17,16,62)] p-[20px] text-center'>5days</td>
                        </tr>
                    </tbody>
                </table>

                <table className='border-collaspe w-full text-white '>
                    <tbody className='w-[10%]'>
                        <tr className='w-[10%] bg-red-800'>
                            <td className='w-[] bg-[rgb(13,10,54)] p-[20px] '>Profit Split Upto</td>
                            <td className='w-[13%] bg-[rgb(13,10,54)] p-[20px] text-center'>95%</td>
                            <td className='w-[13%] bg-[rgb(13,10,54)] p-[20px] text-center'>95%</td>
                            <td className='w-[13%] bg-[rgb(13,10,54)] p-[20px] text-center'>95%</td>
                            <td className='w-[13%] bg-[rgb(13,10,54)] p-[20px] text-center'>95%</td>
                            <td className='w-[13%] bg-[rgb(13,10,54)] p-[20px] text-center'>95%</td>
                            <td className='w-[13%] bg-[rgb(13,10,54)] p-[20px] text-center'>95%</td>
                        </tr>
                    </tbody>
                </table>

                <table className='border-collaspe w-full text-white '>
                    <tbody className=''>
                        <tr className=''>
                            <td className='w-[] bg-[rgb(17,16,62)] p-[20px] '>News Trading</td>
                            <td className='w-[13%] bg-[rgb(17,16,62)] p-[20px] text-center'><i className="fa-solid fa-check text-white mt-1"></i></td>
                            <td className='w-[13%] bg-[rgb(17,16,62)] p-[20px] text-center'><i className="fa-solid fa-check text-white mt-1"></i></td>
                            <td className='w-[13%] bg-[rgb(17,16,62)] p-[20px] text-center'><i className="fa-solid fa-check text-white mt-1"></i></td>
                            <td className='w-[13%] bg-[rgb(17,16,62)] p-[20px] text-center'><i className="fa-solid fa-check text-white mt-1"></i></td>
                            <td className='w-[13%] bg-[rgb(17,16,62)] p-[20px] text-center'><i className="fa-solid fa-check text-white mt-1"></i></td>
                            <td className='w-[13%] bg-[rgb(17,16,62)] p-[20px] text-center'><i className="fa-solid fa-check text-white mt-1"></i></td>
                        </tr>
                    </tbody>
                </table>

                <table className='border-collaspe w-full text-white '>
                    <tbody className='w-[10%]'>
                        <tr className='w-[10%] bg-red-800'>
                            <td className='w-[] bg-[rgb(13,10,54)] p-[20px] '>First Reward</td>
                            <td className='w-[13%] bg-[rgb(13,10,54)] p-[20px] text-center'>Monthly%</td>
                            <td className='w-[13%] bg-[rgb(13,10,54)] p-[20px] text-center'>Monthly%</td>
                            <td className='w-[13%] bg-[rgb(13,10,54)] p-[20px] text-center'>Monthly%</td>
                            <td className='w-[13%] bg-[rgb(13,10,54)] p-[20px] text-center'>Monthly%</td>
                            <td className='w-[13%] bg-[rgb(13,10,54)] p-[20px] text-center'>Monthly%</td>
                            <td className='w-[13%] bg-[rgb(13,10,54)] p-[20px] text-center'>Monthly%</td>
                        </tr>
                    </tbody>
                </table>

            </div>

            <div className='w-[80%] bg-[rgb(17,15,62)] mt-2 rounded-[16px] pt-4 min-h-[50vh] m-auto block lg:hidden'>
                <h1 className='text-center text-white text-2xl font-bold'>Account Size</h1>
                <h1 className='text-center text-white text-1xl font-bold mt-4'>$6000</h1>
                <div className='flex justify-center'>
                    <button className="bg-blue-500 text-white text-sm px-4 py-2 mt-4 rounded w-[79%] font-bold ">Get Plan <br /> $59</button>
                </div>

                <table className='border-collaspe w-full text-white text-xs'>
                    <tbody>
                        <tr>
                            <td className='bg-[rgb(4,8,41)] w-[70%] p-4'>15% Profit Share From Challenge <br /> Phase</td>
                            <td className='bg-[rgb(4,8,41)] text-center p-4'>$117</td>
                        </tr>
                    </tbody>

                    <tbody className=''>
                        <tr>
                            <td className='bg-[rgb(17,20,51)] w-[70%] p-4'>Profit Target</td>
                            <td className='bg-[rgb(17,20,51)] text-center p-4'>P1: 8%, P2: 5%</td>
                        </tr>
                    </tbody>

                    <tbody className=''>
                        <tr>
                            <td className='bg-[rgb(4,8,41)] w-[70%] p-4'>Maximum Daily Loss</td>
                            <td className='bg-[rgb(4,8,41)] text-center p-4'>5% ($300)</td>
                        </tr>
                    </tbody>

                    <tbody className=''>
                        <tr>
                            <td className='bg-[rgb(17,20,51)] w-[70%] p-4'>Maximum Overall Loss</td>
                            <td className='bg-[rgb(17,20,51)] text-center p-4'>10% ($600)</td>
                        </tr>
                    </tbody>

                    <tbody className=''>
                        <tr>
                            <td className='bg-[rgb(4,8,41)] w-[70%] p-4'>Maximum Overall Loss</td>
                            <td className='bg-[rgb(4,8,41)] text-center p-4'>10% ($600)</td>
                        </tr>
                    </tbody>

                    <tbody className=''>
                        <tr>
                            <td className='bg-[rgb(17,20,51)] w-[70%] p-4'>Balance Based Drawdown</td>
                            <td className='bg-[rgb(17,20,51)] text-center p-4'> <i className="fa-solid fa-check text-white mt-1"></i></td>
                        </tr>
                    </tbody>

                    <tbody className=''>
                        <tr>
                            <td className='bg-[rgb(4,8,41)] w-[70%] p-4'>Minimum Trading</td>
                            <td className='bg-[rgb(4,8,41)] text-center p-4'>5 Days</td>
                        </tr>
                    </tbody>

                    <tbody className=''>
                        <tr>
                            <td className='bg-[rgb(17,20,51)] w-[70%] p-4'>Profit Split Upto</td>
                            <td className='bg-[rgb(17,20,51)] text-center p-4'>95%</td>
                        </tr>
                    </tbody>

                    <tbody className=''>
                        <tr>
                            <td className='bg-[rgb(4,8,41)] w-[70%] p-4'>News Trading</td>
                            <td className='bg-[rgb(4,8,41)] text-center p-4'> <i className="fa-solid fa-check text-white mt-1"></i></td>
                        </tr>
                    </tbody>

                    <tbody className=''>
                        <tr>
                            <td className='bg-[rgb(17,20,51)] w-[70%] p-4'>First Reward</td>
                            <td className='bg-[rgb(17,20,51)] text-center p-4'>Monthly</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
};

export default Booking;