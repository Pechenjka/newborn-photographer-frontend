import userApi from "../../utils/userApi";
import instagramApi from "../../utils/instagramApi";
import { INSTAGRAM_USER } from "../types";

const actionInstagramUser = (dataUser) => {
  return {
    type: INSTAGRAM_USER,
    payload: dataUser,
  };
};

export const handleGetInstagramUser = () => {
  return (dispatch) => {
    instagramApi
      .getInstagramUser()
      .then((res) => {
        return res.data.map((item) => {
          return item;
        });
      })
      .then((res) => {
        dispatch(actionInstagramUser(res));
      })
      .catch((err) => console.log(err));
  };
};

export const handleNewsLetter = (email) => {
  return () => {
    userApi
      .newsLetter(email)
      .then((res) => {
        if (res) {
          return res;
        }
      })
      .catch((err) => console.log(err));
  };
};


