import React, { useState } from "react";
import GlobalContext from "./globalContext";

const GlobalState = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [id, setId] = useState(null);
  const [userName, setUserName] = useState(null);
  const [chipsAmount, setChipsAmount] = useState(null);
  const [tables, setTables] = useState(null);
  const [players, setPlayers] = useState(null);
  const [userPh, setUserPh] = useState("09 123...");
  const [userSrc, setUserSrc] = useState("")

  return (
    <GlobalContext.Provider
      value={{
        isLoading,
        setIsLoading,
        userName,
        setUserName,
        chipsAmount,
        setChipsAmount,
        id,
        setId,
        tables,
        setTables,
        players,
        setPlayers,
        userPh,
        setUserPh,
        userSrc, 
        setUserSrc
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
