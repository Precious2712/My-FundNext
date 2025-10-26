import haand from '/condition-hand.svg'
import screen from '/trading-platform.webp'
import comm from '/community.webp'
import customer from '/customer-support.webp'
import cards from '/credit-card.webp'
import paypals from '/payment-3.webp'
import locals from '/payment-4.webp'
import shopee from '/payment-5.webp'
import pm from '/payment-6.webp'
import pix from '/payment-7.webp'
import tee from '/payment-9.webp'
import ss from '/payment-10.webp'
import etherium from '/payment-11.webp'
import news from '/stellar-plan-new.svg'
import lite from '/stellar-lite-plan.svg'
import eva from '/evaluation-plan.svg'
import expres from '/express-plan.svg'
import update from '/Guaranteed%20Payout-update.png'

const FundWWallet = () => {
    return (
        <div className=''>

            <div className="flex flex-col items-center pt-10">
                <div className="flex justify-center w-[150px] rounded-full pt-1 pb-1 bg-black border-t-[2px] border-t-[rgb(82,62,96)] border-b-[2px] border-b-[rgb(82,62,96)]">
                    <p className="text-white text-[15px]">Why FundedNext</p>
                </div>

                <h1 className="hidden lg:block text-center text-3xl text-white font-bold mt-4 sm:text-6xl">Trade with the Most</h1>
                <h1 className="hidden lg:block text-center text-3xl text-white font-bold mt-3 sm:text-6xl">Reliable Prop Firm</h1>
                <h1 className='block font-bold text-white text-1xl mt-5 lg:hidden'>Trade with the most Most Reliable Prop Firm</h1>

                <div className="flex mt-5 ">
                    <p className="text-white mt-1">Accurate</p>
                    <hr className="w-6 border-t border-gray-400 rotate-90 mt-4" />
                    <p className="text-white mt-1">Fast</p>
                    <hr className="w-6 border-t border-gray-400 rotate-90 mt-4" />
                    <p className="text-white mt-1">Stable</p>
                    <hr className="w-6 mt-4 border-t border-gray-400 rotate-90" />
                    <p className="text-white mt-1">Trustworthy</p>
                </div>
            </div>

            <div className='mt-16 w-full flex flex-wrap gap-4 items-stretch lg:flex justify-center'>

                <div className='depatch flex gap-4 w-[92%] flex-col lg:w-[30%]'>
                    <div className='rounded-[13px] bg-[rgb(119,75,249)] pt-12 pb-12 flex justify-between  lg:flex'>
                        <div className='ml-6 lg:ml-5'>
                            <h1 className='font-bold text-white text-2xl'>Guaranteed <br /> Payouts</h1>
                            <p className='hidden text-white lg:block mt-6 leading-7'>Get paid in 24 <br /> hours or <br /> we pay $1,000 <br /> extra.</p>
                            <p className='text-white mt-6 lg:hidden'>Get paid in 24 hours or <br /> we pay $1,000 extra.</p>
                        </div>
                        <div className='  lg:mt-9 mr-0'>
                            <img src={update} alt="" />
                        </div>
                    </div>

                    <div className='rounded-[13px] bg-[rgb(0,123,214)] pt-12 pb-12 flex justify-between lg:flex'>
                        <div>
                            <div className='ml-6'>
                                <h1 className='hidden font-bold text-white text-2xl leading-8 lg:block'>Best <br /> Trading <br /> Conditions</h1>
                                <h1 className='block font-bold text-white text-2xl lg:hidden'>Best Trading Conditions</h1>
                            </div>
                            <div className='mt-6 ml-6'>
                                <li className='text-white'>Raw Spreads</li>
                                <li className='text-white'>Guaranteed
                                    <div className='ml-6'>
                                        <p>payouts within</p>
                                        <p>24 hours</p>
                                    </div>
                                </li>
                                <li className='text-white'>Low
                                    <div className='ml-6'>
                                        <p>commissions</p>
                                    </div>
                                </li>
                            </div>
                        </div>

                        <div className='mr-6'>
                            <img className='' src={haand} alt="" />
                        </div>
                    </div>
                </div>

                <div className="relative bg-[rgb(60,19,146)] rounded-[15px] w-[90%] pb-4 min-h-[40vh] sm:w-[71%] md:w-[84%] lg:w-[55%]">
                    <div className="mt-10 ml-7 lg:ml-16">
                        <h1 className="font-bold text-[rgb(255,209,27)] text-[20px]">〽️ YOUR CHOICE!</h1>
                        <h1 className="font-bold text-white text-3xl mt-2">Best Trading Platforms</h1>
                    </div>
                    <p className="font-bold text-white text-[15.3px] mt-8 ml-7 lg:ml-16">
                        Trade on MT4, MT5 & cTrader platforms
                    </p>
                    <p className="text-[rgb(159,146,192)] mt-12 ml-7 lg:ml-16">
                        Our MQ licenses and advanced in-house <br />
                        technology ensure enhanced experience, <br />
                        security, and efficiency.
                    </p>

                    <div className=" absolute bottom-0 right-0 w-[35%] lg:w-[74%] ">
                        <img src={screen} alt="" className="" />
                    </div>
                </div>
            </div>

            <div className='w-[85%] hidden lg:flex lg:flex-row lg:justify-between mt-5 m-auto'>
                <p className='text-[rgb(75,71,93)] text-[17px] tracking-[4px]'>FundedNext Community & Support</p>
                <p className='text-[rgb(75,71,93)] tracking-[11px]'>.......................................</p>
            </div>

            <div className=' w-full h-full lg:w-[88%] m-auto mt-7'>
                <div className=' items-stretch flex flex-col lg:flex-row gap-4 lg:h-[67vh]'>

                    <div className="w-[89%] relative pb-10 m-auto overflow-hidden bg-[rgb(22,18,52)] bg-opacity-90 rounded-[18px] lg:w-[48%] h-full ">
                        <video
                            className="absolute top-0 left-0 w-full object-cover opacity-30  lg:w-full h-full"
                            src="https://fundednext.fra1.cdn.digitaloceanspaces.com/lander-v2/Globe%20Animation.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                        ></video>

                        <div className="relative z-10 text-white top-[70px] left-[20px]">
                            <h1 className="text-2xl">Empowering Traders in <br /> 195+ Countries</h1>
                        </div>

                        <div className='mt-[120px] ml-[20px] flex gap-9'>
                            <div className='flex'>
                                <div className='w-1 h-[70%] bg-[rgb(105,52,238)] rounded-[2px] rotate-120 mt-1'></div>
                                <div className='ml-2'>
                                    <h1 className='text-white text-2xl'>$95M+</h1>
                                    <p className=' text-[12px] text-[rgb(188,187,197)] mt-1 lg:text-[17px]'>Total <br /> Rewards</p>
                                </div>
                            </div>

                            <div className='flex'>
                                <div className='w-1 h-[60%] bg-[rgb(40,163,238)] rounded-[2px] rotate-120 mt-1'></div>
                                <div className='ml-2'>
                                    <h1 className='text-white text-2xl'>97k+</h1>
                                    <p className=' text-[12px] text-[rgb(188,187,197)] mt-1 lg:text-[17px]'>Traders</p>
                                </div>
                            </div>

                            <div className='flex'>
                                <div className='w-1 h-[70%] bg-[rgb(223,28,96)] rounded-[2px] rotate-120 mt-1'></div>
                                <div className='ml-2'>
                                    <h1 className='text-white text-2xl'>5hrs</h1>
                                    <p className=' text-[12px] text-[rgb(188,187,197)] mt-1 lg:text-[17px]'>Avg. Reward <br /> Time</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-[89%]  m-auto bg-[rgb(23,21,58)] rounded-[18px] lg:w-[26%] h-full pb-10'>
                        <img className='mt-9 ml-6' src={comm} alt="" />
                        <h1 className='hidden lg:block text-white text-2xl mt-5 ml-6'>FundedNext <br /> Community</h1>
                        <h1 className='block text-white text-2xl ml-6 lg:hidden'>FundedNext Community</h1>
                        <p className='hidden lg:text-[rgb(188,188,199)] mt-5 ml-6 lg:block'>Serving over <br /> 700,000+ members</p>
                        <p className='block text-[rgb(188,188,199)] ml-6 mt-3 lg:hidden'>Serving over 700,000+ members</p>
                        <div className='flex flex-row mt-3 ml-6'>
                            <img className='w-[30px]' src="https://fundednext.fra1.cdn.digitaloceanspaces.com/lander-v2/discord.svg" alt="" />
                            <img className='w-[30px]' src="https://fundednext.fra1.cdn.digitaloceanspaces.com/lander-v2/facebook.svg" alt="" />
                            <img className='w-[30px]' src="https://fundednext.fra1.cdn.digitaloceanspaces.com/lander-v2/twitter.svg" alt="" />
                            <img className='w-[30px]' src="https://fundednext.fra1.cdn.digitaloceanspaces.com/lander-v2/youtube.svg" alt="" />
                        </div>
                    </div>

                    <div className='w-[89%] m-auto bg-[rgb(23,21,58)] rounded-[18px] lg:w-[26%] h-full pb-10'>
                        <img className='mt-9 ml-6' src={customer} alt="" />
                        <h1 className='hidden lg:block text-white text-2xl mt-5 ml-6'>24/7 <br /> Pro Support</h1>
                        <h1 className='block text-white text-2xl ml-6 lg:hidden'>24/7 Pro Support</h1>
                        <p className='hidden lg:block text-[rgb(188,188,199)] mt-5 ml-6'>With a 50-second <br /> average response <br /> time, we’re a prop <br /> trading firm that truly <br /> cares about our <br /> traders.</p>
                        <p className='block text-[rgb(188,188,199)] mt-3 ml-6 lg:hidden'>With a 50-second average response time we’re a prop trading <br /> firm that truly cares about our traders.</p>
                    </div>
                </div>
            </div>

            <div className='mt-20'>

                <div className="m-auto w-[150px] rounded-full pt-1 pb-1 bg-black border-t-[2px] border-t-[rgb(82,62,96)] border-b-[2px] border-b-[rgb(82,62,96)]">
                    <p className="text-white text-[15px] text-center">Start a Challenge</p>
                </div>

                <h1 className='font-bold text-white text-[27px] mt-4 text-center lg:text-6xl '>FundedNext Challenges</h1>

                <div className=' mt-8 lg:mt-20 overflow-x-auto w-full  items-stretch no-scrollbar lg:h-[90vh]'>

                    <div className='flex gap-4 mt-7'>
                        <div className='bg-[rgb(91,6,138)] pb-9 mt- w-[300px] border-t-[rgb(146,36,255)] border-t-[40px] border-b-[8px] border-b-[rgb(146,36,255)] border-r-[8px] border-r-[rgb(146,36,255)] border-l-[8px] border-l-[rgb(146,36,255)] rounded-[20px] shrink-0'>
                            <h1 className='text-center mt-[-30px] text-white font-bold'>POPULAR PLAN</h1>

                            <div className='mt-7 ml-6'>
                                <img src={news} alt="" />
                                <h1 className='text-3xl font-serif font-bold text-white mt-3'>Stellar</h1>
                                <div className='mt-3 text-[rgb(159,133,196)] font-sans'>
                                    <p>The most popular package</p>
                                    <p>amongst FundedNext traders</p>
                                </div>
                            </div>

                            <div className='ml-3 mt-10 text-[rgb(159,133,196)] font-sans'>

                                <div className='flex '>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="40"
                                        height="30"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path d="M8 12l3 3 5-5"></path>
                                    </svg>
                                    <p>Upto 95% Profit Split</p>

                                </div>

                                <div className='flex'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="40"
                                        height="30"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path d="M8 12l3 3 5-5"></path>
                                    </svg>
                                    <p>15% Profit Share in Challenge <br /> phase</p>
                                </div>

                                <div className='flex mt-3'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="40"
                                        height="30"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path d="M8 12l3 3 5-5"></path>
                                    </svg>
                                    <p>Up to 150% Reward</p>
                                </div>

                                <div className='flex mt-3'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="40"
                                        height="30"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path d="M8 12l3 3 5-5"></path>
                                    </svg>
                                    <p>No time limit</p>
                                </div>

                                <div className='flex mt-3'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="40"
                                        height="30"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path d="M8 12l3 3 5-5"></path>
                                    </svg>
                                    <p>News Trading Allowed</p>
                                </div>


                            </div>

                        </div>

                        <div className='bg-[rgb(54,57,105)] w-[300px] pt-6 mt-11 rounded-[20px] shrink-0 lg:h-[78vh]'>
                            <div className='ml-5 text-[rgb(166,171,193)]'>
                                <img src={lite} alt="" />
                                <h1 className='text-3xl font-serif font-bold text-white mt-3'>Stellar Lite</h1>
                                <div className='mt-3'>
                                    <p>The most affordable package for</p>
                                    <p>new and upcoming traders</p>
                                </div>
                            </div>

                            <div className='ml-3 mt-10 text-[rgb(166,171,193)]'>
                                <div className='flex'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="40"
                                        height="30"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path d="M8 12l3 3 5-5"></path>
                                    </svg>
                                    <p>Upto 95% Profit Split</p>

                                </div>

                                <div className='flex mt-3'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="40"
                                        height="30"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path d="M8 12l3 3 5-5"></path>
                                    </svg>
                                    <p>15% Profit Share in Challenge <br /> phase</p>
                                </div>

                                <div className='flex mt-3'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="40"
                                        height="30"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path d="M8 12l3 3 5-5"></path>
                                    </svg>
                                    <p>Up to 150% Reward</p>
                                </div>

                                <div className='flex mt-3'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="40"
                                        height="30"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path d="M8 12l3 3 5-5"></path>
                                    </svg>
                                    <p>No time limit</p>
                                </div>

                                <div className='flex mt-3'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="40"
                                        height="30"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path d="M8 12l3 3 5-5"></path>
                                    </svg>
                                    <p>News Trading Allowed</p>
                                </div>


                            </div>
                        </div>

                        <div className='bg-[rgb(49,28,119)] w-[300px] pt-6 mt-11 rounded-[20px] shrink-0 lg:'>
                            <div className='ml-5 text-[rgb(143,140,194)]'>
                                <img src={eva} alt="" />
                                <h1 className='text-3xl font-serif font-bold text-white mt-3'>Evaluation</h1>
                                <div className='mt-3'>
                                    <p>The most affordable package for</p>
                                    <p>new and upcoming traders</p>
                                </div>
                            </div>

                            <div className='ml-3 mt-10 text-[rgb(143,140,194)]'>
                                <div className='flex'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="40"
                                        height="30"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path d="M8 12l3 3 5-5"></path>
                                    </svg>
                                    <p>Upto 95% Profit Split</p>

                                </div>

                                <div className='flex mt-3'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="40"
                                        height="30"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path d="M8 12l3 3 5-5"></path>
                                    </svg>
                                    <p>15% Profit Share in Challenge <br /> phase</p>
                                </div>

                                <div className='flex mt-3'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="40"
                                        height="30"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path d="M8 12l3 3 5-5"></path>
                                    </svg>
                                    <p>Up to 150% Reward</p>
                                </div>

                                <div className='flex mt-3'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="40"
                                        height="30"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path d="M8 12l3 3 5-5"></path>
                                    </svg>
                                    <p>No time limit</p>
                                </div>

                                <div className='flex mt-3'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="40"
                                        height="30"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path d="M8 12l3 3 5-5"></path>
                                    </svg>
                                    <p>News Trading Allowed</p>
                                </div>


                            </div>
                        </div>

                        <div className='bg-[rgb(11,56,138)] w-[300px] pt-6 mt-11 rounded-[20px] shrink-0 lg:'>
                            <div className='ml-5'>
                                <img src={expres} alt="" />
                                <h1 className='text-3xl font-serif font-bold text-white mt-3'>Express</h1>
                                <div className='mt-3 text-[rgb(88,115,167)]'>
                                    <p>The most affordable package for</p>
                                    <p>new and upcoming traders</p>
                                </div>
                            </div>

                            <div className='ml-3 mt-10 text-[rgb(88,115,167)]'>
                                <div className='flex'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="40"
                                        height="30"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path d="M8 12l3 3 5-5"></path>
                                    </svg>
                                    <p>Upto 95% Profit Split</p>

                                </div>

                                <div className='flex mt-3'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="40"
                                        height="30"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path d="M8 12l3 3 5-5"></path>
                                    </svg>
                                    <p>15% Profit Share in Challenge <br /> phase</p>
                                </div>

                                <div className='flex mt-3'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="40"
                                        height="30"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path d="M8 12l3 3 5-5"></path>
                                    </svg>
                                    <p>Up to 150% Reward</p>
                                </div>

                                <div className='flex mt-3'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="40"
                                        height="30"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path d="M8 12l3 3 5-5"></path>
                                    </svg>
                                    <p>No time limit</p>
                                </div>

                                <div className='flex mt-3'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="40"
                                        height="30"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path d="M8 12l3 3 5-5"></path>
                                    </svg>
                                    <p>News Trading Allowed</p>
                                </div>


                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='y-hidden w-4/5 m-auto overflow-x-auto mt-20'>
                <p className='font-bold text-center text-[rgb(114,111,129)]'>AVAILABLE PAYMENT METHODS</p>
                <div className=' w-[90px] movement mt-12'>
                    <img className='' src={cards} alt="" />
                    <img className='' src={paypals} alt="" />
                    <img className='' src={locals} alt="" />
                    <img className='' src={shopee} alt="" />
                    <img className='' src={pm} alt="" />
                    <img className='' src={pix} alt="" />
                    {/* <img className='' src={bitcoin} alt="" /> */}
                    <img className='' src={tee} alt="" />
                    <img className='' src={ss} alt="" />
                    <img className='' src={etherium} alt="" />
                </div>
            </div>

        </div>
    )
};

export default FundWWallet;