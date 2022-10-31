import React, { useEffect, useState } from "react";
import "./test.css";
import data from "../../sampleData.json";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { WarnModal } from "../../components/WarnModal";
import { ExitModal } from "../../components/ExitModal";
import { useData } from "../../context/DataContext";
import { useNote } from "../../context/NoteContext";
import { Result } from "../Result/Result";
const Test = () => {
  const {
    category,
    setCategory,
    score,
    setScore,
    question,
    setQuestion,
    wrongScore,
    setWrongScore,
    skippedScore,
    setSkippedScore,
  } = useData();
  console.log("skippeddd", skippedScore);
  const [warnModal, setWarnModal] = useState(false);
  const [exitModal, setExitModal] = useState(false);
  const [currentQuesIndex, setCurrentQuesIndex] = useState(0);

  const [correctAns, setCorrectAns] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [markedAnswers, setMarkedAnswers] = useState(new Array(data.length));

  const isQuesEnd = currentQuesIndex === question.length - 1;
  const [isOptionClicked, setIsOptionClicked] = useState(false);
  const { writeNote, setWriteNote } = useNote();
  const [timeOut, setTimeOut] = useState(false);
  const [timer, setTimer] = useState(300);

  const intervalFunction = () => {
    let j = 0;
    for (let i = 300; i >= 0; i--) {
      j = j + 1;
      setTimeout(() => {
        setTimer(i);
      }, j * 1000);
    }
  };

  useEffect(() => {
    intervalFunction();
  }, []);

  useEffect(() => {
    setQuestion(data.filter((item) => item.category === category));
  }, [category, setQuestion]);

  const clickHandleAnswer = (currentAnswerID, correctAnswerID) => {
    if (currentAnswerID === correctAnswerID) {
      setScore(score + 1);
      setCorrectAns(correctAns + 1);
      setIsOptionClicked(true);
    } else {
      setWrongScore(wrongScore + 1);
      setIsOptionClicked(true);
    }
  };

  const handleNextOption = () => {
    const nextQuestion = currentQuesIndex + 1;
    if (nextQuestion < question.length) {
      setCurrentQuesIndex(nextQuestion);
    } else {
      showResult(true);
    }
    if (isOptionClicked) {
      setIsOptionClicked(false);
    } else {
      setSkippedScore(skippedScore + 1);
    }
  };
  const submitHandler = () => {
    setWarnModal(true);
  };
  const noteHandler = (e) => {
    setWriteNote(e.target.value);
  };
  return (
    <>
      {showResult ? (
        <Result />
      ) : (
        <>
          <Navbar />
          <p className="time-para">{timer}</p>
          <div className="test-cont">
            <div className="test-sec">
              <div className="ques-number">
                Question {currentQuesIndex + 1}of {question.length}
              </div>
              {question?.[currentQuesIndex]?.question}
              <div className="options-sec">
                {question?.[currentQuesIndex]?.options.map((item) => {
                  return (
                    <div
                      className="options"
                      key={item.id}
                      onClick={() =>
                        clickHandleAnswer(
                          item.id,
                          question?.[currentQuesIndex]?.correct_option
                        )
                      }
                    >
                      <button type="button">{item.value}</button>
                    </div>
                  );
                })}
              </div>
              <div className="button-sec">
                <button className="exit-btn" onClick={() => setExitModal(true)}>
                  Exit
                </button>
                {exitModal && <ExitModal closeModal={setExitModal} />}
                <button
                  className="exit-btn"
                  onClick={() => setCurrentQuesIndex(currentQuesIndex - 1)}
                >
                  Back
                </button>
                {isQuesEnd ? (
                  <div>
                    <button className="next-btn" onClick={submitHandler}>
                      Submit
                    </button>
                    {warnModal && <WarnModal closeModal={setWarnModal} />}
                  </div>
                ) : (
                  <button className="next-btn" onClick={handleNextOption}>
                    Next
                  </button>
                )}
              </div>
            </div>
            <div className="notepad-sec">
              <div className="notepad-heading">Notepad</div>
              <div className="scribble-cont">
                <textarea
                  cols="55"
                  rows="5"
                  id="note"
                  name="note"
                  placeholder="scribble your notes here..."
                  onChange={noteHandler}
                ></textarea>
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};
export { Test };
