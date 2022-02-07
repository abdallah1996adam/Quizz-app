import React, { useEffect, useState } from "react";

interface Props{
  questionNumber:number;
  onDone:()=> void
  setStop:(value:boolean)=> void
}

const CountdownComponent:React.FC<Props> = ({questionNumber, onDone, setStop}) => {
  const [timer, setTimer] = useState<number>(30);


  useEffect(() => {
    if(timer === 0){
      return setStop(true)
    } 
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    //clean up function to stop the timer
    return () => clearInterval(interval);
  }, [timer,setStop]);
  

  useEffect(()=>{
    setTimer(30)
  }, [questionNumber])

  return <>{timer}</>;
};

export default CountdownComponent;
