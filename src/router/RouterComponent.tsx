import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Main from "../pages/Main/Main";
import AboutMe from "../pages/AboutMe/AboutMe";
import PhotoGallery from "../pages/PhotoGallery/PhotoGallery";
import Contacts from "../pages/Contacts/Contacts";
import Prices from "../pages/Prices/Prices";
import PhotoProducts from "../pages/PhotoProducts/PhotoProducts";
import NotFound from "../pages/NotFound/NotFound";
import { PropsTimeRef } from "../types";
import Admin from "../pages/Admin/Admin";
import PacketWithDetailsDescription from "../components/PacketWithDetailsDescription/PacketWithDetailsDescription";
import Basket from "../pages/Basket/Basket";

const RouterComponent: React.FC<PropsTimeRef> = ({ timerRef }) => {
  // const isStaff = true;

  return (
    <Switch>
      <Route exact path="/">
        <Main timerRef={timerRef} />
      </Route>
      <Route exact path="/aboutMe" component={AboutMe} />
      <Route
        exact
        path={[
          "/photoGallery/newborn",
          "/photoGallery/pregnancy",
          "/photoGallery/baby",
          "/photoGallery/family",
          "/photoGallery/woman",
          "/photoGallery/discharge",
          "/photoGallery/christening",
        ]}
        component={PhotoGallery}
      />
      <Route exact path="/contacts" component={Contacts} />
      <Route
        exact
        path={[
          "/prices/newborn",
          "/prices/pregnancy",
          "/prices/baby",
          "/prices/family",
          "/prices/woman",
          "/prices/discharge-christening",
        ]}
      >
        <Prices timerRef={timerRef} />
      </Route>
      <Route exact path="/prices/packets/:id" component={PacketWithDetailsDescription} />
      <Route exact path="/photo-products" component={PhotoProducts} />
      <Route exact path="/basket" >
        <Basket timerRef={timerRef}/>
      </Route>
      {/*{isStaff && <Route exact path="/admin" component={Admin} />}*/}
      <Route exact path="/not-found" component={NotFound} />
      <Route path="*">
        <Redirect to="/not-found" />
      </Route>
    </Switch>
  );
};

export default RouterComponent;
