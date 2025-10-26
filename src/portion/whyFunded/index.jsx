import logo from '@/assets/fundednext-white-logo.svg'
import ftmo from '@/assets/play-icon (1).svg'
import HideContent from '@/zip/HideContent';

const WhyPickIndices = () => {
    return (
        <div className="mt-[100px] lg:mt-[220px]">

            <div className="flex gap-1 justify-center w-[135px] rounded-full pt-1 pb-1 bg-black border-t-[2px] border-t-[rgb(82,62,96)] border-b-[2px] border-b-[rgb(82,62,96)] m-auto">
                <p className="text-white text-[15px]">Compare</p>
                <p className="text-white text-[15px]">Market</p>
            </div>

            <div className="mt-5">
                <h1 className="font-bold text-white text-center mt-5 text-2xl lg:text-6xl">Why Choose FundedNext</h1>
                <p className="text-[rgb(194,192,200)] text-center mt-4 text-[18px]">Explore the features that make FundedNext stand out</p>
                <p className="text-[rgb(194,192,200)] text-center text-[18px] ">from so many other trading prop firms.</p>
            </div>

            <div className=' hidden w-[90%] m-auto rounded-[14px]  text-white text-[14px] font-bold mt-16 overflow-x-hidden lg:block'>

                <table className='border-collaspe w-full '>
                    <tbody className='hover:bg-[rgb(33,27,55)]'>
                        <tr className=''>
                            <td className='bg-[rgb(33,27,55)] p-4 w-[22%] '>VARIABLES</td>
                            <td className='bg-[rgb(33,27,55)] px-6 w-[18%]'>
                                <img className='' src={logo} alt="" />
                            </td>
                            <td className='bg-[rgb(33,27,55)] px-6 w-[18%]'>
                                <img src='https://fundednext.fra1.cdn.digitaloceanspaces.com/lander-v2/2.svg' alt="" />
                            </td>
                            <td className='bg-[rgb(33,27,55)] px-6 w-[18%]'>
                                <img src="https://fundednext.fra1.cdn.digitaloceanspaces.com/lander-v2/4.svg" alt="" />
                            </td>
                            <td className='bg-[rgb(33,27,55)] px-6 w-[18%]'>
                                <img src="https://fundednext.fra1.cdn.digitaloceanspaces.com/lander-v2/3.svg" alt="" />
                            </td>
                        </tr>
                    </tbody>
                </table>

                <table className='border-collaspe text-xs w-full bg-red-800 lg:text-sm'>
                    <tbody>
                        <tr>
                            <td className='bg-[rgb(28,22,51)] p-4 w-[22%]'>Profit Share from Challenge Phase</td>
                            <td className='bg-[rgb(28,22,51)] px-6 w-[18%] '>
                                <p className='text-white text-center'>15%</p>
                            </td>
                            <td className='bg-[rgb(28,22,51)] px-6 w-[18%] '>
                                <p className='text-white text-center'>0%</p>
                            </td>
                            <td className='bg-[rgb(28,22,51)] px-6 w-[18%] '>
                                <p className='text-white text-center'>0%</p>
                            </td>
                            <td className='bg-[rgb(28,22,51)] px-6 w-[18%] '>
                                <p className='text-white text-center'>0%</p>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <table className='border-collaspe w-full bg-red-800 '>
                    <tbody>
                        <tr>
                            <td className='bg-[rgb(28,22,51)] px-4  w-[22%]'>Account Profit Share </td>
                            <td className='bg-[rgb(28,22,51)] px-6 w-[18%] '>
                                <p className='text-white text-center'>80% | 95% with Add-on</p>
                            </td>
                            <td className='bg-[rgb(28,22,51)] p-4 w-[18%] '>
                                <p className='text-white text-center'>80%</p>
                            </td>
                            <td className='bg-[rgb(28,22,51)] p-4 w-[18%] '>
                                <p className='text-white text-center'>80%</p>
                            </td>
                            <td className='bg-[rgb(28,22,51)] p-4 w-[18%] '>
                                <p className='text-white text-center'>80%</p>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <table className='border-collaspe w-full bg-red-800 '>
                    <tbody>
                        <tr>
                            <td className='bg-[rgb(28,22,51)] p-4 w-[22%]'>Profit Target </td>
                            <td className='bg-[rgb(28,22,51)] px-6 w-[18%] '>
                                <p className='text-white text-center'>8%/5%</p>
                            </td>
                            <td className='bg-[rgb(28,22,51)] px-6 w-[18%] '>
                                <p className='text-white text-center'>10%/5%</p>
                            </td>
                            <td className='bg-[rgb(28,22,51)] px-6 w-[18%] '>
                                <p className='text-white text-center'>8%/5%</p>
                            </td>
                            <td className='bg-[rgb(28,22,51)] px-6 w-[18%] '>
                                <p className='text-white text-center'>8%/5%</p>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <table className='border-collaspe w-full bg-red-800 '>
                    <tbody>
                        <tr>
                            <td className='bg-[rgb(28,22,51)] p-4 w-[22%]'>Drawdown </td>
                            <td className='bg-[rgb(28,22,51)] px-6 w-[18%] '>
                                <p className='text-white text-center'>Balance-Based</p>
                            </td>
                            <td className='bg-[rgb(28,22,51)] px-6 w-[18%] '>
                                <p className='text-white text-center'>Balance-Based</p>
                            </td>
                            <td className='bg-[rgb(28,22,51)] px-6 w-[18%] '>
                                <p className='text-white text-center'>Balance-Based</p>
                            </td>
                            <td className='bg-[rgb(28,22,51)] px-6 w-[18%] '>
                                <p className='text-white text-center'>Balance-Based</p>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <table className='border-collaspe w-full bg-red-800 '>
                    <tbody>
                        <tr>
                            <td className='bg-[rgb(28,22,51)] p-4 w-[22%]'>Account Reset Option </td>
                            <td className='bg-[rgb(28,22,51)] px-6 w-[18%] '>
                                <td className='w-[13%]  p-[20px] text-center'><i className="fa-solid fa-check text-white mt-1"></i></td>
                            </td>
                            <td className='bg-[rgb(28,22,51)] px-6 w-[18%] '>
                                <p className='text-white text-center'> ✖</p>
                            </td>
                            <td className='bg-[rgb(28,22,51)] px-6 w-[18%] '>
                                <p className='text-white text-center'> ✖</p>
                            </td>
                            <td className='bg-[rgb(28,22,51)] px-6 w-[18%] '>
                                <p className='text-white text-center'> ✖</p>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <table className='border-collaspe w-full bg-red-800 '>
                    <tbody>
                        <tr>
                            <td className='bg-[rgb(28,22,51)] p-4 w-[22%]'>One Step Challenge </td>
                            <td className='bg-[rgb(28,22,51)] px-6 w-[18%] '>
                                <td className='w-[13%]  p-[20px] text-center'><i className="fa-solid fa-check text-white mt-1"></i></td>
                            </td>
                            <td className='bg-[rgb(28,22,51)] px-6 w-[18%] '>
                                <p className='text-white text-center'> ✖</p>
                            </td>
                            <td className='bg-[rgb(28,22,51)] px-6 w-[18%] '>
                                <p className='text-white text-center'> ✖</p>
                            </td>
                            <td className='bg-[rgb(28,22,51)] px-6 w-[18%] '>
                                <p className='text-white text-center'> ✖</p>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <table className='border-collaspe w-full bg-red-800 '>
                    <tbody>
                        <tr>
                            <td className='bg-[rgb(28,22,51)] p-4 w-[22%]'>Free Competitions </td>
                            <td className='bg-[rgb(28,22,51)] px-6 w-[18%] '>
                                <td className='w-[13%]  p-[20px] text-center'><i className="fa-solid fa-check text-white mt-1"></i></td>
                            </td>
                            <td className='bg-[rgb(28,22,51)] px-6 w-[18%] '>
                                <p className='text-white text-center'> ✖</p>
                            </td>
                            <td className='bg-[rgb(28,22,51)] px-6 w-[18%] '>
                                <p className='text-white text-center'> ✖</p>
                            </td>
                            <td className='bg-[rgb(28,22,51)] px-6 w-[18%] '>
                                <p className='text-white text-center'> ✖</p>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <table className='border-collaspe w-full bg-red-800 '>
                    <tbody>
                        <tr>
                            <td className='bg-[rgb(28,22,51)] p-4 w-[22%]'>Global Meetup </td>
                            <td className='bg-[rgb(28,22,51)] px-6 w-[18%] '>
                                <td className='w-[13%]  p-[20px] text-center'>5 Countries</td>
                            </td>
                            <td className='bg-[rgb(28,22,51)] px-6 w-[18%] '>
                                <p className='text-white text-center'> 0</p>
                            </td>
                            <td className='bg-[rgb(28,22,51)] px-6 w-[18%] '>
                                <p className='text-white text-center'> 0</p>
                            </td>
                            <td className='bg-[rgb(28,22,51)] px-6 w-[18%] '>
                                <p className='text-white text-center'> 0</p>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <table className='border-collaspe w-full bg-red-800 '>
                    <tbody>
                        <tr>
                            <td className='bg-[rgb(28,22,51)] p-4 w-[22%]'>Jurisdiction </td>
                            <td className='bg-[rgb(28,22,51)] px-6 w-[18%] '>
                                <td className='w-[13%]  p-[20px] text-center'>UAE</td>
                            </td>
                            <td className='bg-[rgb(28,22,51)] px-6 w-[18%] '>
                                <p className='text-white text-center'> Czech Republic</p>
                            </td>
                            <td className='bg-[rgb(28,22,51)] px-6 w-[18%] '>
                                <p className='text-white text-center'> UAE</p>
                            </td>
                            <td className='bg-[rgb(28,22,51)] px-6 w-[18%] '>
                                <p className='text-white text-center'> UK</p>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <table className='border-collaspe w-full bg-red-800 '>
                    <tbody>
                        <tr>
                            <td className='bg-[rgb(28,22,51)] p-4 w-[22%]'>Lowest Package with Price </td>
                            <td className='bg-[rgb(28,22,51)] px-6 w-[18%] '>
                                <td className='w-[13%]  p-[20px] text-center'>5K/$32</td>
                            </td>
                            <td className='bg-[rgb(28,22,51)] px-6 w-[18%] '>
                                <p className='text-white text-center'> 5K/$32</p>
                            </td>
                            <td className='bg-[rgb(28,22,51)] px-6 w-[18%] '>
                                <p className='text-white text-center'> 5K/$36</p>
                            </td>
                            <td className='bg-[rgb(28,22,51)] px-6 w-[18%] '>
                                <p className='text-white text-center'> 10K/$97</p>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <table className='border-collaspe w-full bg-red-800 '>
                    <tbody>
                        <tr>
                            <td className='bg-[rgb(28,22,51)] p-4 w-[22%]'>Challenge Fee Reward </td>
                            <td className='bg-[rgb(28,22,51)] px-6 w-[18%] '>
                                <td className='w-[13%]  p-[20px] text-center'>1st Withdrawal</td>
                            </td>
                            <td className='bg-[rgb(28,22,51)] px-6 w-[18%] '>
                                <p className='text-white text-center'>1st Withdrawal </p>
                            </td>
                            <td className='bg-[rgb(28,22,51)] px-6 w-[18%] '>
                                <p className='text-white text-center'> 4st Withdrawal</p>
                            </td>
                            <td className='bg-[rgb(28,22,51)] px-6 w-[18%] '>
                                <p className='text-white text-center'> ✖</p>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <table className='border-collaspe w-full bg-red-800 '>
                    <tbody>
                        <tr>
                            <td className='bg-[rgb(28,22,51)] p-4 w-[22%]'>Payout Guarantee in 24 hours </td>
                            <td className='bg-[rgb(28,22,51)] px-6 w-[18%] '>
                                <td className='w-[13%]  p-[20px] text-center'>Yes</td>
                            </td>
                            <td className='bg-[rgb(28,22,51)] px-6 w-[18%] '>
                                <p className='text-white text-center'>No </p>
                            </td>
                            <td className='bg-[rgb(28,22,51)] px-6 w-[18%] '>
                                <p className='text-white text-center'> No</p>
                            </td>
                            <td className='bg-[rgb(28,22,51)] px-6 w-[18%] '>
                                <p className='text-white text-center'> ✖</p>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <table className='border-collaspe w-full bg-red-800 '>
                    <tbody>
                        <tr>
                            <td className='bg-[rgb(28,22,51)] p-4 w-[22%]'>News </td>
                            <td className='bg-[rgb(28,22,51)] px-6 w-[18%] '>
                                <td className='w-[13%]  p-[20px] text-center'>Allowed</td>
                            </td>
                            <td className='bg-[rgb(28,22,51)] px-6 w-[18%] '>
                                <p className='text-white text-center'>Allowed </p>
                            </td>
                            <td className='bg-[rgb(28,22,51)] px-6 w-[18%] '>
                                <p className='text-white text-center'> Restricted</p>
                            </td>
                            <td className='bg-[rgb(28,22,51)] px-6 w-[18%] '>
                                <p className='text-white text-center'> Restricted</p>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <table className='border-collaspe w-full bg-red-800 '>
                    <tbody>
                        <tr>
                            <td className='bg-[rgb(28,22,51)] p-4 w-[22%]'>Platform Offering </td>
                            <td className='bg-[rgb(28,22,51)] px-6 w-[18%] '>
                                <td className='w-[13%]  p-[20px] text-center text-[10px]'>Platform 4, Platform 5, cTrade</td>
                            </td>
                            <td className='bg-[rgb(28,22,51)] px-6 w-[18%] '>
                                <p className='text-white text-center text-[10px]'>Platform 4, Platform 5, cTrader, </p>
                                <p className='text-center text-[10px]'>DXtrade</p>
                            </td>
                            <td className='bg-[rgb(28,22,51)] px-6 w-[18%] '>
                                <p className='text-white text-center text-[10px]'>Match trader, cTrader, </p>
                                <p className='text-center text-[10px]'>Tradelocker</p>
                            </td>
                            <td className='bg-[rgb(28,22,51)] px-6 w-[18%] '>
                                <p className='text-white text-center text-[10px]'>MetaTrader 5, cTrader, and DX </p>
                                <p className='text-center text-[10px]'>Trade</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className='block lg:hidden'>
                <HideContent />
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" width="24" height="24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
        </div>
    )
};

export default WhyPickIndices;