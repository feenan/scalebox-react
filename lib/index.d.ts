import React from 'react'
interface BasicProps extends React.HTMLAttributes<HTMLDivElement> {
    width: number,
    height: number,
    isFullScreen?: boolean,
    container?: HTMLElement
}

declare const ScaleBox : React.Component<BasicProps>
export default ScaleBox