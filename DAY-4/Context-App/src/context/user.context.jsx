import { createContext, useContext, useState } from "react";

// create context
export const UserContext = createContext({});

// create hook
export function useUserContext() {
  return useContext(UserContext);
}

// wrapper comp
export function UserContextProvider(props) {
  let [input, setInput] = useState("");
  let [userList, setUserList] = useState([]);

  let handelKeyDown = (event) => {
    if (event.keyCode === 13) {
      setUserList([...userList, input]);
      setInput("");
    }
  };
  let share = {
    input,
    setInput,
    handelKeyDown,
    userList,
  };
  return (
    <UserContext.Provider value={share}>{props.children}</UserContext.Provider>
  );
}
