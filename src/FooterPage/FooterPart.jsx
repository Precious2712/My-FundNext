import React from 'react'

import funds from '/fundednext-white-logo.svg'
import double from '@/assets/discord-new.svg'
import facebook from '@/assets/facebook.svg'
import instagram from '@/assets/instagram_footer (1).svg'
import twist from '@/assets/twitter.svg'
import youtube from '@/assets/youtube.svg'
const FooterPart = () => {
    return (
        <div className='bg-[rgb(8,7,20)] pb-44 pt-20 opacity-8 mt-40'>

            <div className='hidden lg:flex justify-around'>
                <div>
                    <img className='' src='https://fundednext.fra1.cdn.digitaloceanspaces.com/lander-v2/logo-white.svg' alt="" />
                    <div className='flex gap-2 mt-12'>
                        <img src={double} alt="" />
                        <img src={facebook} alt="" />
                        <img src={instagram} alt="" />
                        <img src={twist} alt="" />
                        <img src={youtube} alt="" />
                    </div>
                    <p className='text-white'>support@fundednext.com</p>
                </div>

                <div>
                    <p className='text-[rgb(111,110,122)] font-sans text-[14px] font'>Models</p>
                    <div className='text-white text-[12px] mt-5 leading-7'>
                        <p>Express</p>
                        <p>Evaluation</p>
                        <p>Stellar</p>
                        <p>Stellar Lite</p>
                    </div>
                </div>

                <div>
                    <p className='text-[rgb(111,110,122)] font-sans text-[14px] font'>Education</p>
                    <div className='text-white text-[12px] mt-5 leading-7 '>
                        <p>Dashboard Tour</p>
                        <p>Economic Calendar</p>
                        <p>Blog</p>
                    </div>
                </div>

                <div>
                    <p className='text-[rgb(111,110,122)] font-sans text-[14px] font'>Community</p>
                    <div className='text-white text-[12px] mt-5 leading-7 '>
                        <p>Join Local Community</p>
                        <p>Join Discord</p>
                        <p>Join X</p>
                    </div>
                </div>

                <div>
                    <p className='text-[rgb(111,110,122)] font-sans text-[14px] font'>Important Links</p>
                    <div className='text-white text-[12px] mt-5 leading-7 '>
                        <p>FAQ</p>
                        <p>Affiliate Partner</p>
                        <p>Global Events</p>
                        <p>Risk Disclosure</p>
                        <p>Server Status</p>
                    </div>
                </div>

                <div>
                    <p className='text-[rgb(111,110,122)] font-sans text-[14px] font'>Privacy & Policy</p>
                    <div className='text-white text-[12px] mt-5 leading-7 '>
                        <p>Terms of Service</p>
                        <p>Affiliate Partner</p>
                        <p>Affiliate T&C</p>
                        <p>Privacy Policy</p>
                        <p>Cookie Policy</p>
                        <p>AML Policy</p>
                        <p>Subscribe to <br /> newsletter</p>
                    </div>
                </div>

                <div>
                    <div>
                        <p className='text-[rgb(111,110,122)] font-sans text-[14px] font'>Contact Us</p>
                        <div className='text-white text-[12px] mt-5 leading-7 '>
                            <p>Email</p>
                            <p>Live Chat</p>
                            <p>Messenger</p>
                            <p>Connect with us</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='block lg:hidden'>
                <div>
                    <img className='' src='https://fundednext.fra1.cdn.digitaloceanspaces.com/lander-v2/logo-white.svg' alt="" />
                    <div className='flex gap-2 mt-12'>
                        <img src={double} alt="" />
                        <img src={facebook} alt="" />
                        <img src={instagram} alt="" />
                        <img src={twist} alt="" />
                        <img src={youtube} alt="" />
                    </div>
                    <p className='text-white'>support@fundednext.com</p>
                </div>

                <div className=' grid grid-cols-2 '>

                    <div>
                        <p className='text-[rgb(111,110,122)] font-sans text-[14px] font'>Models</p>
                        <div className='text-white text-[12px] mt-5 leading-7'>
                            <p>Express</p>
                            <p>Evaluation</p>
                            <p>Stellar</p>
                            <p>Stellar Lite</p>
                        </div>
                    </div>

                    <div>
                        <p className='text-[rgb(111,110,122)] font-sans text-[14px] font'>Education</p>
                        <div className='text-white text-[12px] mt-5 leading-7 '>
                            <p>Dashboard Tour</p>
                            <p>Economic Calendar</p>
                            <p>Blog</p>
                        </div>
                    </div>

                    <div>
                        <p className='text-[rgb(111,110,122)] font-sans text-[14px] font'>Community</p>
                        <div className='text-white text-[12px] mt-5 leading-7 '>
                            <p>Join Local Community</p>
                            <p>Join Discord</p>
                            <p>Join X</p>
                        </div>
                    </div>

                    <div>
                        <p className='text-[rgb(111,110,122)] font-sans text-[14px] font'>Important Links</p>
                        <div className='text-white text-[12px] mt-5 leading-7 '>
                            <p>FAQ</p>
                            <p>Affiliate Partner</p>
                            <p>Global Events</p>
                            <p>Risk Disclosure</p>
                            <p>Server Status</p>
                        </div>
                    </div>

                    <div>
                        <p className='text-[rgb(111,110,122)] font-sans text-[14px] font'>Privacy & Policy</p>
                        <div className='text-white text-[12px] mt-5 leading-7 '>
                            <p>Terms of Service</p>
                            <p>Affiliate Partner</p>
                            <p>Affiliate T&C</p>
                            <p>Privacy Policy</p>
                            <p>Cookie Policy</p>
                            <p>AML Policy</p>
                            <p>Subscribe to <br /> newsletter</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <p className='text-[rgb(111,110,122)] font-sans text-[14px] font'>Contact Us</p>
                            <div className='text-white text-[12px] mt-5 leading-7 '>
                                <p>Email</p>
                                <p>Live Chat</p>
                                <p>Messenger</p>
                                <p>Connect with us</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default FooterPart
