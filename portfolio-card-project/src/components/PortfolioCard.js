import { useState } from "react";
import Header from "./Header";
import Avatar from "./Avatar";
import PersonalInfo from "./PersonalInfo";
import Bio from "./Bio";

import "./PortfolioCard.css";

function PortfolioCard(){

    // 🔹 A3: Image Cycling
    const images = [
        "data:image/jpeg;base64,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",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT37abxoIHrS_EaMnm5Vzk7hr0p2j-VWg0uEA_H3U3o&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8mGIIwCrrIHybaBjHnuZ_Kvww_nmHbqQpVg&s",
    ];

    const [index, setIndex] = useState(0);

    const nextImage = () => {
        setIndex((index + 1) % images.length);
    };

    // 🔹 A3: Theme Toggle
    const [dark, setDark] = useState(false);

    // 🔹 A4: Likes
    const [likes, setLikes] = useState(0);

    // 🔹 Dynamic Data (A2)
    const bioText = "Passionate frontend developer building modern UI";
    const skills = ["React", "JavaScript", "CSS", "NodeJS"];

    return(
        <div className={dark ? "portfolio-card dark" : "portfolio-card"}>

            <Header/>

            <div className="card-content">

                {/* Avatar with click event */}
                <Avatar 
                    image={images[index]} 
                    onClick={nextImage}
                />

                {/* Personal Info */}
                <PersonalInfo
                    name="Alex Mangang"
                    role="Frontend Developer"
                    location="Imphal, Manipur"
                    email="alex@gmail.com"
                />

                {/* Bio with props */}
                <Bio bioText={bioText} skills={skills} />

                <div className="button-one">
                {/* 🔹 Buttons (A3) */}
                <button onClick={() => setDark(!dark)}>
                    Toggle Theme
                </button>

                <button onClick={() => alert("Hello User!")}>
                    Show Alert
                </button>
                </div>

                {/* 🔹 Likes (A4) */}
                <div className="button-two">
                    <button onClick={() => setLikes(likes + 1)}>
                        ❤️ Like
                    </button>
                    <p>Likes: {likes}</p>
                </div>

            </div>
        </div>
    );
}

export default PortfolioCard;