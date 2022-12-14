import axios from 'axios'
import React, { useEffect, useState } from 'react'
import HeadInfo from '@components/HeadInfo/HeadInfo'
import DetailSide from '@components/DetailSide/DetailSide'
import Loading from '../loading';
import { DetailType } from "@lib/TypeBox";
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Fade from 'react-reveal/Fade';
import Pagination from "@components/Pagination/Pagination";
import Image from 'next/image';

export default function DetailMain(): JSX.Element {
    const [list, setList] = useState<DetailType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [page, setPage] = useState<number>(1);
    const [limit, setLimit] = useState<number>(3);
    const offset: number = (page - 1) * limit;
    const API_URL = 'https://raw.githubusercontent.com/light9639/Shoe-Store/main/data/Detail.json';

    function getData() {
        axios.get(API_URL).then((res) => {
            setList(res.data.Post)
        })
    }

    useEffect(() => {
        getData();
        axios.get("").then((res) => {
            setLoading(false);
        });
        if (localStorage.getItem("Detail_pageNum") != null) {
            setPage(parseInt(`${localStorage.getItem("Detail_pageNum")}`));
        }
    }, []);

    return (
        <React.Fragment>
            <HeadInfo title="Detail Page" contents="Detail Page" />

            {loading ? <Loading></Loading>
                : <React.Fragment>
                    <div className="container mx-auto flex flex-wrap py-6">

                        <section className="w-full lg:w-2/3 flex flex-col items-center px-3">

                            {
                                list.slice(offset, offset + limit).map(function (item: DetailType, idx: number) {
                                    return (
                                        <article className="flex flex-col shadow my-4 w-full" key={idx}>
                                            <Link href={`/Detail/${item?.index - 1}`} className="hover:opacity-75 w-full max-h-[520px] h-full overflow-hidden">
                                                <Fade><Image src={item?.src} alt={item?.alt} width={1443} height={750} className="w-full" /></Fade>
                                            </Link>

                                            <div className="bg-white dark:bg-slate-900 flex flex-col justify-start p-6">
                                                <Fade bottom>
                                                    <a className="text-gray-900 dark:text-blue-700 text-sm font-bold uppercase pb-4">Sports</a>
                                                    <a className="text-3xl font-bold pb-4">{item?.h2}</a>
                                                    <p className="text-sm pb-3">
                                                        ??? ?????? <a className="font-semibold">Lee dong ho</a>??? ?????? {item?.date} ?????????????????????.
                                                    </p>
                                                    <a className="pb-6">{item.p2}..</a>
                                                    <Link href={`/Detail/${item?.index - 1}`} className="uppercase text-gray-800 hover:text-blue-600 dark:text-white dark:hover:text-blue-600 transition flex">
                                                        Continue Reading <FontAwesomeIcon icon={faArrowRight} className="w-3.5 ml-2 mt-0.5" />
                                                    </Link>
                                                </Fade>
                                            </div>
                                        </article>
                                    )
                                })
                            }

                            <Pagination
                                total={list.length}
                                limit={limit}
                                page={page}
                                setPage={setPage}
                                Name={"Detail"}
                            />

                        </section>

                        <DetailSide></DetailSide>

                    </div>
                </React.Fragment>
            }
        </React.Fragment>
    )
}