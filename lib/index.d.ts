import React from 'react'
interface BasicProps extends React.HTMLAttributes<HTMLDivElement> {
    width: number,
    height: number,
    isFullScreen?: boolean,
    container?: HTMLElement
}

// interface ScaleBox extends React.Component<BasicProps & {
//     children?: React.ReactNode;
// }>{}

// declare const ScaleBox: ScaleBox
// : React.Component<BasicProps & {
//     children?: React.ReactNode;
// }>
declare class ScaleBox extends React.Component<BasicProps & {
    children?: React.ReactNode;
}, {
    scale: number,
    boxObserver: ResizeObserver | null,
}>{
    getScale: (e?: Event | ResizeObserverEntry[]) => number
    changeScale: () => void
}
export default ScaleBox 