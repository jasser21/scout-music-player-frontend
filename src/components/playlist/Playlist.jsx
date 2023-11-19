import "./playlist.css";
import MusicPlayerSlider from "./MusicPlayerSlider";
import api from "../../api/AudioManager";
import { useEffect, useState } from "react";
const Playlist = () => {
  const [songList, setSongList] = useState([{ file_id: "", name: "" }]);
  useEffect(() => {
    const fetchAudio = async () => {
      try {
        const response = await api.get("listit/");
        console.log(response.data);
        setSongList(response.data.data);
        console.log(songList);
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
    <div className="music-container">
      <MusicPlayerSlider />
      <div className="playlist-container">
        {songList &&
          songList.map((item) => {
            return (
              <div className="item" key={item.file_id}>
                {" "}
                <p>{item.name}</p>{" "}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Playlist;
