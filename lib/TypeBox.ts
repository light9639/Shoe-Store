export interface status {
    statusCode: any
}

export interface Res {
    res: any,
    err: any
}

export interface GreetingsProps {
    name: string;
}

export interface RouteType {
    router: any
}

export interface ShoeType {
    name: string;
    img: string;
    href: string;
    text: string;
}

export type providerType = {
    name: string;
    content: string;
    color: string;
    svg: string;
}

export type DetailType = {
    index: number;
    src: string;
    src2: string;
    alt: string;
    h2: string;
    p1: string;
    p2: string;
    date: string;
}

export type AboutType = {
    src: string;
    p1: string;
    p2: string;
}

export type BannerType = AboutType & { alt: string; h2: string; }

export type LoginType = {
    name: string;
    content: string;
    class: string;
    svg: string;
}

export type ServiceType = {
    svg1: string;
    svg2: string;
    svg3: string;
    color: string;
    title: string;
    content: string;
}

export type MainSideType = {
    name: string;
    svg: string;
    svg2: string;
}