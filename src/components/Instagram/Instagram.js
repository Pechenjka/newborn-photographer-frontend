import "./Instagram.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { handleGetInstagramUser } from "../../redux/Actions/userAction";

const Instagram = () => {
  const dispatch = useDispatch();
  const instagramUser = useSelector((state) => state.user.instagramUser);

  useEffect(() => {
    dispatch(handleGetInstagramUser());
  }, [dispatch]);

  const handleViewPostInstagram = (posts) => {
    if (window.innerWidth > 1024) {
      return posts.slice(0, 5);
    }
    if (window.innerWidth >= 768) {
      return posts.slice(0, 4);
    }
    if (window.innerWidth > 414) {
      return posts.slice(0, 3);
    }
    if (window.innerWidth >= 320) {
      return posts.slice(0, 2);
    }
  };

  return (
    <div className="instagram ">
      <p className="instagram__title">Подпишитесь на меня в Instagram</p>
      <a
        className="instagram__user"
        href="https://www.instagram.com/alina_mamochka_inlove/"
        target="_blank"
        rel="noreferrer"
      >
        @newbornphoto_lobacheva
      </a>
      <ul className="instagram__container">
        {handleViewPostInstagram(instagramUser).map((item, index) => {
          return (
            <li className="instagram__post-container" key={index}>
              <img className="instagram__post" src={item.media_url} alt="пост в инстаграм" />
              <a className="instagram__overlay" href={item.permalink} target="_blank" rel="noreferrer">
                <div className="instagram__post-overlay-icon" />
                <p className="instagram__post-caption">{item.username}</p>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Instagram;
