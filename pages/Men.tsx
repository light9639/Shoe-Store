/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import HeadInfo from '../components/HeadInfo'
import ShoesJson from './data/Shoes.json';
import Dropdowns from "../components/Dropdowns";
import PageStyle from '../styles/PageStyle';
import axios from 'axios';
import { useRouter } from 'next/router';
import Data from "./data/Data.json";
import SideBar from '../components/SideBar';

export default function Men() {
    const [data, setData] = useState(Data);
    const [count, setCount] = React.useState(0);
    const [pag, setPag] = React.useState(0);
    const [btnActive, setBtnActive] = useState("");
    const router = useRouter()

    const toggleActive = (e: { target: { value: string; }; }) => {
        setBtnActive((prev) => {
            return e.target.value;
        });
    };

    return (
        <>
            <HeadInfo title="Men Product Page" contents="Men Product Page" />

            <div className="flex items-center lg:w-screen min-h-screen my-16">
                <div className="container m-auto flex flex-wrap items-start">
                    <div className="w-full pl-0 lg:pl-2 mb-0 lg:mb-4 mt-4 m-auto text-center">
                        <h1 className="text-3xl lg:text-4xl text-gray-700 dark:text-white font-bold float-none lg:float-left">
                            Men Best Sellers
                        </h1>
                        <div className='mt-8 lg:mt-3 float-none lg:float-right'>
                            <Dropdowns></Dropdowns>
                        </div>
                    </div>
                    <div className='w-full text-center mt-7 lg:mt-5 mx-auto mb-7 lg:mb-0'>
                        {
                            Data.Men.map(function (a: {name: string, number: number}, i: number | string) {
                                return (
                                    <button
                                        value={i}
                                        className={"px-4 py-2 sm:px-5 sm:py-2.5 m-1  text-white font-semibold rounded text-xs lg:text-base" + (i == btnActive ? " bg-blue-500" : " bg-gray-300")}
                                        onClick={() => { toggleActive }}
                                        key={i}
                                    >
                                        <a>{a.name}</a>
                                        {/* {
                                            color == true ?
                                                : <a className='px-4 py-2 sm:px-5 sm:py-2.5 bg-blue-500 m-1 text-white font-semibold rounded text-xs lg:text-base'>{a}</a>
                                        } */}
                                    </button>
                                )
                            })
                        }
                    </div>
                    {
                        ShoesJson.Men.map(function (a, i: number) {
                            return (
                                <>
                                    <div className="w-1/2 lg:w-1/3 pl-0 md:pl-5 lg:pl-2 mt-16  lg:pr-2" key={a.index} onClick={() => router.push(`/view/${a.index}`)}>
                                        <div className="rounded-xl m-2 sm:ml-1 dark:hover:shadow-slate-700 transform duration-500">
                                            <div className='ImgBox'>
                                                <img src={a.src} alt={a.alt} className="w-full h-full object-cover" />
                                            </div>
                                            <div className="pt-5 px-2 flex flex-col gap-2">

                                                <h2 className="tracking-tighter text-base md:text-xl overflow-ellipsis overflow-hidden whitespace-nowrap -mb-1 md:mb-0" title="Best Headphone Ever">
                                                    {a.name}
                                                </h2>

                                                <div className='tracking-tighter'>
                                                    <p className='pb-1 md:pb-2 text-sm text-gray-600 dark:text-white'>{a.info}</p>
                                                    <span className="text-base md:text-xl relative xl:absolute right-0 xl:right-3 translate-y-0 xl:-translate-y-16 mt-0">{a.price}</span>
                                                </div>

                                            </div>
                                            <div className="block md:flex pl-2 pb-2">
                                                <span className="flex items-center my-3 md:my-0">
                                                    <svg fill={a.star.first} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                    </svg>
                                                    <svg fill={a.star.second} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                    </svg>
                                                    <svg fill={a.star.third} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                    </svg>
                                                    <svg fill={a.star.four} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                    </svg>
                                                    <svg fill={a.star.five} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                    </svg>
                                                    <span className="bg-blue-100 text-blue-800 text-sm font-semibold ml-3 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">{a.Review} Reviews</span>
                                                </span>
                                                <span className="hidden md:flex md:ml-3 md:pl-3 md:py-2 md:border-l-2 border-gray-200 space-x-2s gap-1 md:gap-3">
                                                    <a href='https://ko-kr.facebook.com/' className="text-gray-500 dark:text-white transition hover:text-blue-600 dark:hover:text-blue-600">
                                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                                        </svg>
                                                    </a>
                                                    <a href='https://twitter.com/home' className="text-gray-500 dark:text-white transition hover:text-blue-600 dark:hover:text-blue-600">
                                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                                        </svg>
                                                    </a>
                                                    <a href='https://www.kakaocorp.com/page/service/service/KakaoTalk' className="text-gray-500 dark:text-white transition hover:text-blue-600 dark:hover:text-blue-600">
                                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                        </svg>
                                                    </a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }

                    <div className='w-full mx-auto mt-14 text-center'>
                        <ul className="inline-flex -space-x-px">
                            <li>
                                <a href="#" className="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Prev</a>
                            </li>
                            <li>
                                <a href="#" className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                            </li>
                            <li>
                                <a href="#" className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                            </li>
                            <li>
                                <a href="#" aria-current="page" className="py-2 px-3 text-blue-600 bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                            </li>
                            <li>
                                <a href="#" className="py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                            </li>
                        </ul>
                    </div>

                    {/* <div className='w-full mx-auto mt-14 text-center'>
                        <span
                            className="px-8 py-3 font-semibold rounded bg-blue-600 text-white cursor-pointer transition hover:opacity-75"
                            onClick={() => {
                                setCount(count + 1);
                                switch (count) {
                                    case 0:
                                        axios.get('https://codingapple1.github.io/shop/data2.json').then((결과) => {
                                            console.log(결과.data)
                                        })
                                        break;
                                    case 1:
                                        axios.get('https://codingapple1.github.io/shop/data3.json').then((결과) => {
                                            console.log(결과.data)
                                        })
                                        break;
                                    default:
                                        alert('더 이상은 없습니다.')
                                        break;
                                }
                            }}
                        >더보기</span>
                    </div> */}
                </div>
            </div>
            <style jsx>{PageStyle}</style>
        </>
    )
}

// export async function getServerSideProps() {
//     // Fetch data from external API
//     const res = await fetch(`https://.../data`)
//     const data = await res.json()

//     // Pass data to the page via props
//     return { props: { data } }
// }