import { createContext, useRef, useState } from "react";

import Routers from "./routers/Routers";

export const AppContext = createContext();

export const AuthContext = createContext();

export const App = () => {

  const [feedbackList, setFeedbackList] = useState([]);

  const [login, setLogin] = useState();

  const [loding, setLoading] = useState(false);

  const inputRef = useRef();
  const textAreaRef = useRef();
  const selectRef = useRef();
  const commetRef = useRef();

  const emailRef = useRef();
  const passwordRef = useRef();
  const userRef = useRef();

  const values = { feedbackList, setFeedbackList, inputRef, textAreaRef, selectRef, commetRef, loding, setLoading };

  return (
    <AuthContext.Provider value={{ login, setLogin, emailRef, passwordRef, userRef }}>
      <AppContext.Provider value={values}>
        <Routers />
      </AppContext.Provider>
    </AuthContext.Provider>
  );
}


