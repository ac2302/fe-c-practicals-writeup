import React from "react";
import "./Info.css";

function Info() {
    return (
        <div className="page page-container">
            <h1>C Programming Practical Journal</h1>

            <p className="src-info">
                Source Code used to generate this is available at
                https://github.com/ac2302/fe-c-practicals-writeup
            </p>

            <div className="info-container">
                <p>name: Aryan Ashish Chavan</p>
                <p>Roll No: 12</p>
                <p>Class: 5 (INFT 1) FE INFT 2020-2021</p>
                <p>Atharva College Of Engineering</p>
            </div>
        </div>
    );
}

export default Info;
