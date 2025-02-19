import React, { useEffect, useState } from "react";

const About = () => {
    const [aboutData, setAboutData] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5002/api/about") 
            .then((response) => response.json())
            .then((data) => setAboutData(data))
            .catch((error) => console.error("Error fetching about data:", error));
    }, []);

    if (!aboutData) return <p>Loading...</p>;

    return (
        <div style={{ textAlign: "center", padding: "20px", maxWidth: "600px", margin: "auto" }}>
            <h1>About Me</h1>
            
            {/* Profile Image */}
            <img 
                src={aboutData.photoUrl} 
                alt="Profile" 
                style={{ width: "200px", height: "200px", borderRadius: "50%", objectFit: "cover", marginBottom: "15px" }} 
            />
            
            {/* Name */}
            <h2>{aboutData.name}</h2>
    
            {/* Bio */}
            <p style={{ fontSize: "18px", lineHeight: "1.6" }}>{aboutData.bio}</p>
        </div>
    );
};

export default About;
