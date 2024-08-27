import { useEffect, useState, createContext } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import SearchBar from "./Components/SearchBar/SearchBar";
import UserProfile from "./Components/UserProfile/UserProfile";

export const StoreUsersData = createContext(null);
export const Theme = createContext(null);

function App() {
  //Start Create context

  // UseState to store the GitHub user data
  const [allUsersInfo, setAllUsersInfo] = useState([]);
  function UsersInfoUpdate(value) {
    setAllUsersInfo(value);
  }

  // Theme state
  const [mode, setMode] = useState(true);
  function changeTheme(value) {
    setMode(value);
  }

  // UseEffect to update body background based on theme mode
  useEffect(() => {
    document.body.style.backgroundColor = mode ? "#FFFFFF" : "#141D2F";
  }, [mode]);
  //End Create context

  return (
    <>
      <StoreUsersData.Provider value={{ allUsersInfo, UsersInfoUpdate }}>
        <Theme.Provider value={{ mode, changeTheme }}>
          <Header />
          <SearchBar />
          <UserProfile allUsersInfo={allUsersInfo} />
        </Theme.Provider>
      </StoreUsersData.Provider>
    </>
  );
}

export default App;
