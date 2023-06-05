import React from "react";
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
import { auth } from "../services/firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const About = () => {
    
  
    return (
      <main className="about">
        
        
        <p>This cherry application is intended to solve the problem 
            of managing the status of planned activities on daily, 
            weekly or monthly routine. Many people struggle with 
            remembering what they had planned to do on daily basis, 
            especially when trying to manage their time efficiently 
            while also trying to balance mental and physical wellbeing. 
            This app aims to provide a real-time solution by  keeping 
            track and ensuring all planned activities are easily accessible 
            to the user when there is urgent need to confirm what to do at 
            any time of the day by the user</p>
               
	   <footer>Created by Idara Ekong. © 2023 | <a href="https://github.com/idaraekong/Task_Manager_Cherry"> <img src="github-logo.png" alt="Cherry on Github" width="100" height="132"/> </a></footer>
       
        
      </main>
    );
  };
  
  export default About;