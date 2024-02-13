import { useState } from "react";
import { RANDOM_ICON_IMG } from "./icons";
import RandomQuestion from "./components/RandomQuestion";
import { leetcodeQuestions } from "./components/Questions";

function App() {
  const[show,setShow] = useState(false)
  const[index,setIndex] = useState(0)
  const[ques] =  useState(leetcodeQuestions)
  const handleRandomClick=()=>{
    setShow(true)
    let randomIndex=  Math.floor(Math.random()*ques.length)
    setIndex(randomIndex)
  }
  return (
    <>
      <div className="flex justify-center pl-20 pr-20 pt-20 pb-4">
        <div className="text-4xl font-bold text-[#33B1C2]">Hi.</div>
      </div>
      <div className="flex justify-center p-5">
        <div className="w-[75px] h-[75px] rounded-full bg-[#278FA6] flex justify-center items-center cursor-pointer hover:bg-[#247E92]" onClick={()=>handleRandomClick()}>
          <img src={RANDOM_ICON_IMG} alt="loading" className="w-[40px] h-[40px]" />
        </div>
      </div>
      {show && <RandomQuestion index = {index} ques={ques}/>}
    </>
  );
}

export default App;
