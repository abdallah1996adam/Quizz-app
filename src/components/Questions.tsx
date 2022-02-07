import React, { useEffect, useState } from "react";

interface Props {
  setQuestionNumber: (value: number) => void;
  data: {
    id: number;
    question: string;
    answers: {
      text: string;
      correct: boolean;
    }[];
  }[];
  questionNumber: number;
  setStop:(value:boolean)=> void

}

const Questions: React.FC<Props> = ({
  questionNumber,
  setQuestionNumber,
  data,
  setStop
}) => {
  //to get the current question
  const [question, setQuestion] = useState<any>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<any>(null);
  const [className, setClasseName] = useState<string>("answer");

  useEffect(() => {
    //@ts-ignore
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  //to not repeat calltime function many times 
  const delay = (duration: number, callBack: any) => {
    setTimeout(() => {
      callBack();
    }, duration);
  };

  const handleClick = (a: any) => {
    setSelectedAnswer(a);
    setClasseName("answer active");
    delay(3000, () =>
      setClasseName(a.correct ? "answer correct" : "answer wrong")
    );
    delay(6000, () => {
      if(a.correct){
          //@ts-ignore
        setQuestionNumber((prev) => prev +1 )
        selectedAnswer(null)
      }else{
        setStop(true)
      }
    }  );
  };

  return (
    <div className="CountdownComponent">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((a: any) => (
          <div
            className={selectedAnswer === a ? className : "answer"}
            onClick={() => handleClick(a)}
          >
            {a.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;
