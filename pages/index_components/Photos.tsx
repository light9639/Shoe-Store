import { RouteType } from '../Type/TypeBox'

export default function Photos(props: RouteType): JSX.Element {

    return (
        <>
            <div className="py-16">

                <div className="block lg:w-full max-w-screen-2xl m-auto lg:relative">
                    <img className="inset-0 h-full w-full object-cover object-center" src="https://static-breeze.nike.co.kr/kr/ko_kr//cmsstatic/structured-content/65250/220905_mlp_p6_bg.jpg" alt="Woman workcationing on the beach" />
                </div>
                <div className="px-8 py-6 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:w-1/2 lg:px-12">
                    <div className="max-w-lg m-auto text-center">
                        <h1 className="mt-6 text-2xl font-bold text-gray-900 leading-tight sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl dark:text-white tracking-tighter">
                            조던 X 파리 생제르맹 컬렉션
                        </h1>
                        <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl dark:text-white tracking-tighter">
                            스포츠와 스트리트 룩의 만남. <br />
                            새로운 조던 X 파리 생제르맹 컬렉션을 만나보세요.
                        </p>
                        <div className="mt-4 sm:mt-6">
                            <a href="#" className="Black_border" onClick={() => props.router.push(`/Detail/${4}`)}>더 알아보기</a>
                            <a href="#" className="Black_box" onClick={() => props.router.push(`/Detail/${4}`)}>구매하기</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}