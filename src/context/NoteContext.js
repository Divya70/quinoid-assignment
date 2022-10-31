import { createContext, useContext, useState } from "react";

const NoteContext = createContext();
const NoteProvider = ({ children }) => {
  const [writeNote, setWriteNote] = useState("");
  return (
    <NoteContext.Provider value={{ writeNote, setWriteNote }}>
      {children}
    </NoteContext.Provider>
  );
};
const useNote = () => useContext(NoteContext);
export { NoteProvider, useNote };
