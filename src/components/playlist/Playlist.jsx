import "./playlist.css";
import MusicPlayerSlider from "./MusicPlayerSlider";
import api from "../../api/AudioManager";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const Playlist = () => {
  const navigate = useNavigate();
  const [songList, setSongList] = useState([{}]);
  const [fileid, setFileId] = useState(0);
  const [link, setLink] = useState("");
  const [songName, setSongName] = useState("إيقاعات الكشافة");
  const handleItemClick = (id) => {
    setFileId(id);
  };
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
  useEffect(() => {
    const fetchSong = async () => {
      try {
        const item = songList.find((item) => item.id === fileid);
        setSongName(item.name);
        const response = await api.get(`get-song/${fileid}`);
        console.log(response.data);
        setLink(response.data.link);
        console.log(`response ${response.data.link}`);
        console.log(`state ${link}`);
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
    fetchSong();
  }, [fileid]);
  return (
    <div className="music-container">
      <MusicPlayerSlider link={link} name={songName} />
      <div className="playlist-container">
        {songList &&
          songList.map((item) => {
            return (
              <div
                className="item"
                key={item.id}
                onClick={() => handleItemClick(item.id)}
              >
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
