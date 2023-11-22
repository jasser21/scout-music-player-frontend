import { useNavigate } from "react-router-dom";
import Avatar from "../avatar/Avatar";
import "./home.css";
const Home = () => {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    // 👇️ navigate to /login
    navigate("/login");
  };

  return (
    <div className="homepage">
      <Avatar />
      <div className="textpart">
        <div className="greating">
          Welcome to <span className="spn">Souccor,</span> <br />
          Listen To Tunisian Scout Chants For Free
        </div>
        <button className="btn" type="button" onClick={navigateToLogin}>
          Let&apos;s Do It
        </button>
      </div>
    </div>
  );
};

export default Home;
