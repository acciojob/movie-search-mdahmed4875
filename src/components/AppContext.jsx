import { createContext, useContext } from "react";

const Context = createContext();
export const AppProvider = ({ children }) => {
  const gettingDataFromOmdb = async (movieName) => {
    try{
        const data =await (await fetch(`https://www.omdbapi.com/?s=${movieName}&apikey=99eb9fd1`)).json();
       if(data.Response==="True")return data;
        return null;
    }
    catch{
        return null;
    }

  };

  return <Context.Provider value={{gettingDataFromOmdb}}
  >{children}</Context.Provider>;
};
export const useAppContext = () => {
  return useContext(Context);
};
