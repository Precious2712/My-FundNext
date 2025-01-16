import React from 'react'
import logo from '@/assets/fundednext-white-logo.svg'
import ftmo from '@/assets/play-icon (1).svg'
import { tablerow } from '@/array/table'
import { rows } from '@/array/row'
const HideContent = () => {
    return (
        <div className="w-full  flex overflow-x-hidden mt-12 items-stretch">

            <div className="  flex flex-col rounded-[69px] ">
                {
                    tablerow.map((el, i) => (
                        <div key={i} className="rounded-[29px] text-white">
                            <table className="border-collapse bg-[rgb(36,21,57)]  w-full">
                                <tbody className='rounded-[129px]'>
                                    <tr className="">
                                        <td className=" p-[4.5px] w-[260px] ">
                                            {
                                                (el.txt || el.text).map((item, index) => (
                                                    <div key={index}>
                                                        {item}
                                                    </div>
                                                ))
                                            }
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    ))
                }
            </div>

            <div className='bg-[rgb(16,10,40)] w-full  overflow-x-auto no-scrollbar '>

                <div className='flex shrink-0 h-full'>
                    {
                        rows.map((el, i) => (
                            <div key={i} className="shrink-0 ">
                                <table className="border-collapse w-full">
                                    <tbody>
                                        <tr>
                                            <td className="bg-[rgb(16,10,40)] p-[3px] w-[190px] px-2 ">
                                                <img src={logo} alt="" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                {
                                    el.arry.map((tx, j) => (
                                        <div key={j} className=' text-center '>
                                            <table className='border-collapse w-full'>
                                                <tbody>
                                                    <tr>
                                                        <td className=' p-[8.3px] text-white'>
                                                            {/* Check if tx.text is an array or string */}
                                                            {
                                                                Array.isArray(tx.text)
                                                                    ? tx.text.map((e, k) => (
                                                                        <div className='' key={k}>{e}</div>
                                                                    ))
                                                                    : tx.text
                                                            }

                                                            {/* Check if tx.txt is an array or string */}
                                                            {
                                                                Array.isArray(tx.txt)
                                                                    ? tx.txt.map((e, k) => (
                                                                        <div className='' key={k}>{e}</div>
                                                                    ))
                                                                    : tx.txt
                                                            }
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>




            </div>

        </div>
    )
}

export default HideContent
