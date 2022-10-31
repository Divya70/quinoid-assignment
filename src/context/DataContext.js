import { createContext, useContext, useState } from "react";

const DataContext = createContext([]);
const DataProvider = ({ children }) => {
  const [category, setCategory] = useState();
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState([]);
  const [wrongScore, setWrongScore] = useState(0);
  const [skippedScore, setSkippedScore] = useState(0);
  return (
    <DataContext.Provider
      value={{
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
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
const useData = () => useContext(DataContext);
export { DataProvider, useData };
