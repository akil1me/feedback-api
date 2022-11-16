import { createContext, useEffect, useRef, useState } from "react";

import { APP_API } from "./data/app-api/app-api";

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

  useEffect(() => {
    setLoading(true)
    fetch(APP_API)
      .then(res => res.json())
      .then(data => setFeedbackList(data))
      .finally(() => setLoading(false))
  }, []);

  const values = { feedbackList, setFeedbackList, inputRef, textAreaRef, selectRef, commetRef, loding };

  return (
    <AuthContext.Provider value={{ login, setLogin, emailRef, passwordRef, userRef }}>
      <AppContext.Provider value={values}>
        <Routers />
      </AppContext.Provider>
    </AuthContext.Provider>
  );
}


