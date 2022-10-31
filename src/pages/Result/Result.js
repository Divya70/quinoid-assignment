import React from "react";
import "./result.css";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";
import { useData } from "../../context/DataContext";
import { useNote } from "../../context/NoteContext";
import data from "../../sampleData.json";
const Result = () => {
  const { score, question, wrongScore, skippedScore, setSkippedScore } =
    useData();
  const FinalResultScore = ((score / question.length) * 100).toFixed();
  const wrongResultScore = ((wrongScore / question.length) * 100).toFixed();
  const skippedResultScore = ((skippedScore / question.length) * 100).toFixed();
  const { writeNote, setWriteNote } = useNote();
  console.log("kf", writeNote);
  return (
    <>
      <Navbar />
      <div className="result-main-sec">
        <div className="result-cont">
          <div className="score-sec">
            <div>
              Score: {score}/{question.length}
            </div>
            <strong>{FinalResultScore}%</strong>
            <div>
              <b>Total Score</b>
            </div>
          </div>
          <div
            style={{ width: 90, height: 90, margin: 10 }}
            className="circularbar"
          >
            <CircularProgressbar
              value={FinalResultScore}
              text={`${FinalResultScore}%`}
            />
            <span>Final score</span>
          </div>
          <div
            style={{ width: 90, height: 90, margin: 10 }}
            className="circularbar"
          >
            <CircularProgressbar
              value={FinalResultScore}
              text={`${FinalResultScore}%`}
            />
            <span>Correct</span>
          </div>
          <div
            style={{ width: 90, height: 90, margin: 10 }}
            className="circularbar"
          >
            <CircularProgressbar
              value={wrongResultScore}
              text={`${wrongResultScore}%`}
            />
            <span>Wrong</span>
          </div>
          <div
            style={{ width: 90, height: 90, margin: 10 }}
            className="circularbar"
          >
            <CircularProgressbar
              value={skippedResultScore}
              text={`${skippedResultScore}%`}
            />
            <span>Skipped</span>
          </div>
          <div className="scribble-result-cont">
            <p className="scribble-heading">Your Scribble Notes</p>
            <p className="scribble-para-result">{writeNote}</p>
          </div>
          <Link to="/" className="move-to-login">
            <button className="final-exit-btn">Exit</button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export { Result };
