import "./UserProfile.css";
import { useContext } from "react";
import { StoreUsersData } from "../../App";
import { Theme } from "../../App";

export default function UserProfile() {
  const passedValue = useContext(StoreUsersData);
  const themePassedValue = useContext(Theme);

  return (
    <>
      {passedValue.allUsersInfo.map((data) => {
        const formattedDate = new Date(data.created_at).toLocaleDateString(
          "en-GB",
          {
            day: "2-digit",
            month: "long",
            year: "numeric",
          }
        );

        return (
          <div
            key={data.id}
            id="user-profile-container"
            className={
              themePassedValue.mode
                ? "light-user-profile-container"
                : "dark-user-profile-container"
            }
          >
            {/* Start profile info */}
            <div className="profile-info">
              <div className="user-image">
                <img src={data.avatar_url} alt="" />
              </div>
              <div className="user-name-and-date">
                <div className="user-name">
                  <h3>{data.name}</h3>
                  <h4>@{data.login}</h4>
                </div>
                <div className="formatted-date">
                  <span className="user-joined">Joined {formattedDate}</span>
                </div>
              </div>
            </div>
            <p id="user-bio" className={data.bio ? "" : "not-available"}>
              {data.bio ? data.bio : "This profile has no bio."}
            </p>
            {/* End profile info */}

            {/* Start user stats*/}
            <ul className="user-stats">
              <li>
                <p className="user-stat-title">Repos</p>
                <h2 className="user-stat-number">{data.public_repos}</h2>
              </li>
              <li>
                <p className="user-stat-title">Followers</p>
                <h2 className="user-stat-number">{data.followers}</h2>
              </li>
              <li>
                <p className="user-stat-title">Following</p>
                <h2 className="user-stat-number">{data.following}</h2>
              </li>
            </ul>
            {/* End user stats*/}

            {/* Start user links*/}
            <div className="user-links">
              <div className="first-link">
                <img
                  src="/assets/icon-location.svg"
                  alt=""
                  className={data.location ? "user-stats-img" : "not-available"}
                />
                <p className={data.location ? "" : "not-available"}>
                  {data.location ? data.location : "Not Available"}
                </p>
              </div>

              <div className="second-link">
                <img
                  src="/assets/icon-twitter.svg"
                  alt=""
                  className={
                    data.twitter_username ? "user-stats-img" : "not-available"
                  }
                />
                <p className={data.twitter_username ? "" : "not-available"}>
                  {data.twitter_username
                    ? data.twitter_username
                    : "Not Available"}
                </p>
              </div>

              <div className="third-link">
                <img
                  src="/assets/icon-website.svg"
                  alt=""
                  className={data.html_url ? "user-stats-img" : "not-available"}
                />
                <p className={data.html_url ? "" : "not-available"}>
                  {data.html_url ? data.html_url : "Not Available"}
                </p>
              </div>

              <div className="forth-link">
                <img
                  src="/assets/icon-company.svg"
                  alt=""
                  className={data.company ? "user-stats-img" : "not-available"}
                />
                <p className={data.company ? "" : "not-available"}>
                  {data.company ? data.company : "Not Available"}
                </p>
              </div>
            </div>
            {/* End user links*/}
          </div>
        );
      })}
    </>
  );
}
