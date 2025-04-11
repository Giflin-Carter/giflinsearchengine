import React from "react";
import viteLogo from '/vite.svg';


const ProfileCard = ({profile}) => {
    return (
    
        <div
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 auto",
            backgroundColor:"",
            width:"400px",
            height:"400px",
            paddingTop:"10%"
          }}>
        <div style={{ border: "1px solid black", padding: "100px", maxWidth: "300px",backgroundColor:"gray"}}>
            <img
                style={{
                    border: "3px solid black",
                    borderRadius: "50%",
                    textSizeAdjust: "100%",
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                    marginBottom: "5px",
                    justifyContent:"center"
                    
                }}
                src={viteLogo}
                alt="Profile"
            />
            <div style={{color:"black"}}>
                <div style={{ marginBottom: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>Name: </span>
                    <span>{profile.name}</span>
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>Department: </span>
                    <span>{profile.department}</span>
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>Year: </span>
                    <span>{profile.year}</span>
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>Mobile: </span>
                    <span>{profile.mobile}</span>
                </div>
                <div>
                    <span style={{ fontWeight: "bold" }}>Address: </span>
                    <span>{profile.address}</span>
                </div>
            </div>
            <a href="https://www.linkedin.com/in/giflin-carter-b120892a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
                LinkedIn profile
                </a>
        </div>
        </div>
    );
};

export default ProfileCard;