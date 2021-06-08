import "./Main.scss";
import MainPhoto from "../../images/DSC_449312w (1).jpg";
import Gallery from "../Gallery/Gallery";

function Main() {
  return (
    <div className="main">
      <img className="main__photo" src={MainPhoto} alt="слайд-шоу" />
      <Gallery />
    </div>
  );
}

export default Main;
