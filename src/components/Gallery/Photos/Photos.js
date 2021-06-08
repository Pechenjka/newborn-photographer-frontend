import "./Photos.scss";
import {useDispatch, useSelector} from "react-redux";
import {openImagePopup, showImage} from "../../../redux/Actions/photosActions";

function Photos() {
  const dispatch =useDispatch()
  const getPhotos = useSelector((state) => state.photos.getPhotos);

  //В зависимости от разрешения показывать разное кол-во фотографий
  const handleFilterPhoto = (arrPhotos) => {
    if (window.innerWidth >= 1280) {
      return arrPhotos.slice(0, 12);
    }
    if (window.innerWidth >= 768) {
      return arrPhotos.slice(0, 8);
    }
    if (window.innerWidth >= 320) {
      return arrPhotos.slice(0, 5);
    }
  };

  const handleOpenImagePopup = (getPhotos) => {
    dispatch(openImagePopup())
    dispatch(showImage(getPhotos))
  }


  return (
    <div className="photos">
      {handleFilterPhoto(getPhotos).map((item) => {
        return (
          <figure className="photos__image-container">
            <img key={item.name} src={item.file} className="photos__image" onClick={()=>handleOpenImagePopup(item.file)}/>
          </figure>
        );
      })}
    </div>
  );
}

export default Photos;
