import { useEffect, useState } from "react"
import { ProfileData } from "../../Services/userServices.js";

export const Profile = () => {
    const [profile, setProfile] = useState({});

    useEffect(
        () => {
            ProfileData()
                .then(currentProfile => setProfile(currentProfile.data))
        }, []
    );
    console.log(profile);
    return (
        <section id="user-profile-page" className="user-profile">
            <article className="user-info">
                <img id="user-avatar-url" alt="user-profile" src="/images/female.png" />
                <div className="user-content">
                    <p>Username: {profile.username}</p>
                    <p>Email: {profile.email}</p>
                    <p>My memes count: 2</p>
                </div>
            </article>
            <h1 id="user-listings-title">User Memes</h1>
            <div className="user-meme-listings">
                {/* Display : All created memes by this user (If any) */}
                <div className="user-meme">
                    <p className="user-meme-title">Java Script joke</p>
                    <img
                        className="userProfileImage"
                        alt="meme-img"
                        src="/images/1.png"
                    />
                    <a className="button" href="#">
                        Details
                    </a>
                </div>
                <div className="user-meme">
                    <p className="user-meme-title">Bad code can present some problems</p>
                    <img
                        className="userProfileImage"
                        alt="meme-img"
                        src="/images/3.png"
                    />
                    <a className="button" href="#">
                        Details
                    </a>
                </div>
                {/* Display : If user doesn't have own memes  */}
                <p className="no-memes">No memes in database.</p>
            </div>
        </section>
    )
}