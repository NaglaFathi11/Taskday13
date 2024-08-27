import "./SearchBar.css";
import { useState, useContext } from "react";
import { StoreUsersData } from "../../App";
import { Theme } from "../../App";
import { ErrorState } from "../../App";

export default function SearchBar() {
  const passedValue = useContext(StoreUsersData);
  const themePassedValue = useContext(Theme);
  const ErrorStatePassedValue = useContext(ErrorState);

  //   console.log(passedValue);
  // Start gitHubUseName value function

  //Input Value
  const [userName, setUserName] = useState("");

  function handleOnChange(event) {
    setUserName(event.target.value);
    // console.log(event.target.value);
  }

  // End gitHubUseName value function

  // Start get data from Api and send it in db.json file functions
  async function handleSearchBtn() {
    // console.log(userName);
    try {
      const response = await fetch(`https://api.github.com/users/${userName}`);

      // In cast the user account not found
      // const reservedWords = ["admin", "support", "about", "contact", "help"];
      if (response.status === 404) {
        ErrorStatePassedValue.updateErrorMessage(true);
      } else {
        const userNameData = await response.json();

        // setAllUsersInfo((prevUsersInfo) => [...prevUsersInfo, userNameData]);
        passedValue.UsersInfoUpdate([userNameData]);
        ErrorStatePassedValue.updateErrorMessage(false);
        setUserName("");
      }

      // const sendResponse = await fetch("http://localhost:3001/useNames", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ userNameData }),
      // });
      // await sendResponse.json();
      // // const sendResponseInfo = await sendResponse.json();   console.log(sendResponseInfo);
    } catch (error) {
      console.error(error);
    }
  }
  // useEffect(() => {
  //   console.log(allUsersInfo);
  // }, [allUsersInfo]);
  // End get data from Api and send it in db.json file functions
  return (
    <div>
      {/* Start search bar */}
      <section
        id="search-bar"
        className={
          themePassedValue.mode ? "light-search-bar" : "dark-search-bar"
        }
      >
        <img src="/assets/icon-search.svg" alt="" className="search-img" />
        <input
          placeholder="Search GitHub username..."
          className="search-input"
          onChange={handleOnChange}
          value={userName}
        >
          {}
        </input>
        {ErrorStatePassedValue.errorMessage ? (
          <span
            className={
              ErrorStatePassedValue.errorMessage ? "notFound-userName" : ""
            }
          >
            Not Found
          </span>
        ) : null}
        <button
          type="submit"
          onClick={handleSearchBtn}
          disabled={userName ? false : true}
          className={userName ? "active-search-btn" : "disabled-search-btn"}
        >
          Search
        </button>
      </section>
      {/* Start search bar */}
    </div>
  );
}
