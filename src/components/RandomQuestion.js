import React from 'react'
import { LINK_ICON_IMG } from '../icons'
const RandomQuestion = ({index,ques}) => {
    // const handleRedirect=()=>{
    //     window.
    // }
  return (
    <div className='flex justify-center p-4'>
        <a href={ques[index]}><div className='flex justify-center items-center w-[50px] h-[50px] rounded-full bg-red-500 hover:cursor-pointer hover:bg-[#6E49A0]' >
        <img src={LINK_ICON_IMG} alt="loading" className="w-[25px] h-[25px] " />
        </div></a>
    </div>
  )
}

export default RandomQuestion