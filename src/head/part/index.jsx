import profit from '/profit-split-feature.svg'
import upto from '/upto-account-feature.svg'
import addon from '/addons-feature.svg'
import time from '/time-limit-feature.svg'
import { Button } from '@/components/ui/button';
import trading from '@/assets/news-trading.svg'
import competition from '@/assets/monthly-competition.svg'
import gain from '@/assets/ProftShareIcon.svg'
import balance from '@/assets/balanceIcon.svg'
import reset from '@/assets/reset-popup.svg'

const Introductions = () => {
    return (
        <div className="mt-12 lg:mt-20">
            <div className="ml-4 sm:ml-6 md:ml-10 lg:ml-[230px]">
                <div className='w-[240px] rounded-full pt-1 pb-1 pl-4 bg-[rgb(29,27,75)]'>
                    <p className=' text-[rgb(98,99,167)]'>Our Platform, Your Success</p>
                </div>

                <div className="hidden lg:block mt-5">
                    <h1 className="font-bold text-white text-2xl sm:text-4xl md:text-5xl lg:text-[52px]">Empowering Promising</h1>
                    <h1 className="mt-2 font-bold text-white text-2xl sm:text-4xl md:text-5xl lg:text-[53px]">Traders Worldwide</h1>
                </div>

                <div className='block lg:hidden mt-9'>
                    <h1 className='font-bold text-white text-3xl'>Empowering Promising Traders Worldwide</h1>
                </div>

                <div className="mt-12 overflow-x-auto w-full no-scrollbar">
                    <div className="flex gap-8 w-full">
                        <div className="shrink-0">
                            <img src={profit} alt="" />
                            <h1 className="font-bold text-white mt-3 text-1xl">Up to 95%</h1>
                            <span className="text-white">of Profit Split</span>
                        </div>
                        <div className="shrink-0">
                            <img src={upto} alt="" />
                            <h1 className="font-bold text-white mt-3 text-1xl">Up to $300k</h1>
                            <span className="text-white">Trading Accounts</span>
                        </div>
                        <div className="shrink-0">
                            <img src={addon} alt="" />
                            <h1 className="font-bold text-white mt-3 text-1xl">Add-Ons</h1>
                            <span className="text-white">to Enhance Trading</span>
                        </div>
                        <div className="shrink-0">
                            <img src={time} alt="" />
                            <h1 className="font-bold text-white mt-3 text-1xl">No time limit</h1>
                            <span className="text-white">in Challenge Phase</span>
                        </div>
                    </div>
                </div>

                <div className='mt-16 md:flex flex-wrap sm:gap-5 md:gap-6 lg:gap-4'>
                    <div className='btn'>
                        <Button>Start Challange</Button>
                    </div>
                    <div className='buton'>
                        <Button>Free Trial</Button>
                    </div>
                </div>
            </div>

            <div className='mt-20 ml-14'>
                <div className='selext'>
                    <div className=" w-[150px] rounded-full pt-1 pb-1 bg-black border-t-[2px] border-t-[rgb(82,62,96)] border-b-[2px] border-b-[rgb(82,62,96)]">
                        <p className="text-white text-[15px] text-center">Key Highlight</p>
                    </div>
                    <h1 className='font-bold text-white text-1xl  mt-6 lg:text-[25px] ml-0'>Maximize Your Trading Success with</h1>
                    <h1 className='font-bold text-white text-1xl  mt-1 lg:text-[25px] ml-0'>FundedNext.</h1>
                </div>
            </div>

            <div className='mt-9 ml-12 overflow-x-auto no-scroll'>
                <div className='flex gap-4'>
                    <div className='w-[75%]  bg-[rgb(17,18,45)] rounded-[20px] shrink-0 sm:w-[43%] h-[51vh] md:w-[34%] lg:w-[22%]'>
                        <img className='mt-5 ml-7' src={gain} alt="" />
                        <h1 className='font-bold text-white  text-[19px] ml-7 mt-3'>15% Profit Share in</h1>
                        <h1 className='font-bold text-white text-[19px] ml-7'>Challenge Phase</h1>
                        <div className='mt-2 ml-7'>
                            <p className='font-bold text-[rgb(156,157,168)] text-[13px] leading-6'>
                                FundedNext is the only <br />
                                trading prop firm that offers a <br />
                                15% profit share from the <br />
                                Challenge Phase profits, so <br />
                                you can start earning <br />
                                immediately.
                            </p>
                        </div>
                    </div>

                    <div className='w-[75%] min-h-[30vh] bg-[rgb(17,18,45)] rounded-[20px] shrink-0 sm:w-[43%] h-[51vh] md:w-[34%2] lg:w-[22%]'>
                        <img className='mt-5 ml-7' src={balance} alt="" />
                        <h1 className='font-bold text-white  text-[19px] ml-7 mt-3'>Balance-Based</h1>
                        <h1 className='font-bold text-white text-[19px] ml-7'>Drawdown</h1>
                        <div className='mt-2 ml-7'>
                            <p className='font-bold text-[rgb(156,157,168)] text-[13px] leading-6'>
                                FundedNext offers a balance- <br />
                                based drawdowns, ensuring <br />
                                traders can hold their trades <br />
                                tension-free. <br />
                            </p>
                        </div>
                    </div>

                    <div className='w-[75%] min-h-[30vh] bg-[rgb(17,18,45)] rounded-[20px] shrink-0 sm:w-[43%] h-[51vh] md:w-[34%2] lg:w-[22%]'>
                        <img className='mt-5 ml-7' src={trading} alt="" />
                        <h1 className='font-bold text-white  text-[19px] ml-7 mt-3'>News Trading</h1>
                        <div className='mt-2 ml-7'>
                            <p className='font-bold text-[rgb(156,157,168)] text-[13px] leading-6'>
                                FundedNext allows news <br />
                                trading so you can quickly <br />
                                make profits by utilizing big <br />
                                market movements when a <br />
                                high-impact news is <br />
                                announced.
                            </p>
                        </div>
                    </div>

                    <div className='w-[75%] min-h-[30vh] bg-[rgb(17,18,45)] rounded-[20px] shrink-0 sm:w-[43%] h-[51vh] md:w-[34%2] lg:w-[22%]'>
                        <img className='mt-5 ml-7' src={reset} alt="" />
                        <h1 className='font-bold text-white  text-[19px] ml-7 mt-3'>Reset & Topup</h1>
                        <div className='mt-2 ml-7'>
                            <p className='font-bold text-[rgb(156,157,168)] text-[13px] leading-6'>
                                Reset or top-up your account <br />
                                to restart your trading <br />
                                journey, even if you’ve <br />
                                violated any rules. <br />
                            </p>
                        </div>
                    </div>

                    <div className='w-[75%] min-h-[30vh] bg-[rgb(17,18,45)] rounded-[20px] shrink-0 sm:w-[43%] h-[51vh] md:w-[34%2] lg:w-[22%]'>
                        <img className='mt-5 ml-7' src={competition} alt="" />
                        <h1 className='font-bold text-white  text-[19px] ml-7 mt-3'>Monthly Competition</h1>
                        <div className='mt-2 ml-7'>
                            <p className='font-bold text-[rgb(156,157,168)] text-[13px] leading-6'>
                                FundedNext hosts free <br />
                                monthly competitions where <br />
                                you can compete for <br />
                                exclusive rewards. <br />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Introductions;