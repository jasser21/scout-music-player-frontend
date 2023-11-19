import { useEffect, useState } from "react";
const url = "http://127.0.0.1:8000/audioManager/get-auth-url/";
import api from "../../api/AudioManager";
import "./authorization.css";
function Authorization() {
  const [link, setlink] = useState("");

  useEffect(() => {
    const fetchAudio = async () => {
      try {
        const response = await api.get("get-auth-url/");
        setlink(response.data.url);
        console.log(response.data.url);
      } catch (err) {
        if (err.response) {
          // if this is not in the 200 response range
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error : ${err.message}`);
        }
      }
    };
    fetchAudio();
  }, []);
  return (
    <div className="auth-container">
      <div className="text">
        <h1>grant authorization to dropbox account or make one</h1>
        <p>
          It will only take a while. than, you will listen to Music limitless
        </p>
      </div>
      <a href={link} className="href">
        <button className="btn2"> Leap In </button>
      </a>
    </div>
  );
}

export default Authorization;
