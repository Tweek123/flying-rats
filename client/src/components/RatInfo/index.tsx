import React from "react";
import './index.css'

interface Props {
    nickname: string,
    width: number
    height: number
}

export const RatsInfo: React.FC<Props> = ({nickname, width, height}) => { 
  return <div className="rat-info">
            <div>{nickname}</div>
            <div>{width}</div>
            <div>{height}</div>
         </div>
}
