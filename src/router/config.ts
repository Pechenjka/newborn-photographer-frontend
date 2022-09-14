import { Admin } from "../pages/Admin";
import { Profile } from "../pages/Profile";
import { AddNewPacket } from "../pages/Admin/components/AddNewPacket";
import { Main } from "../pages/Main";
import { AboutMe } from "../pages/AboutMe";
import PhotoGallery from "../pages/PhotoGallery/PhotoGallery";
import Prices from "../pages/Prices/Prices";
import Contacts from "../pages/Contacts/Contacts";
import Basket from "../pages/Basket/Basket";
import { PacketWithDetailsDescription } from "../components/PacketWithDetailsDescription";
import PhotoProducts from "../pages/PhotoProducts/PhotoProducts";
import NotFound from "../pages/NotFound/NotFound";
import { Login } from "../components/Login";
import { Register } from "../components/Register";
import { IRoute } from "../types";
import { AddNewPhoto } from "../pages/Admin/components/AddNewPhoto";
import { FormOrder } from "../pages/Basket/components/FormOrder";
import { OrderList } from "../pages/Admin/components/OrderList";

export const routes: IRoute[] = [
  { component: Main, path: "/", name: "main", isAdmin: false, isAuth: false },
  { component: AboutMe, path: "/aboutMe", name: "aboutMe", isAdmin: false, isAuth: false },
  {
    component: PhotoGallery,
    path: [
      "/photoGallery/newborn",
      "/photoGallery/pregnancy",
      "/photoGallery/baby",
      "/photoGallery/family",
      "/photoGallery/woman",
      "/photoGallery/discharge",
      "/photoGallery/christening",
    ],
    name: "photoGallery",
    isAdmin: false,
    isAuth: false,
  },
  {
    component: Prices,
    path: [
      "/prices/newborn",
      "/prices/pregnancy",
      "/prices/baby",
      "/prices/family",
      "/prices/woman",
      "/prices/discharge-christening",
    ],
    name: "prices",
    isAdmin: false,
    isAuth: false,
  },
  { component: Contacts, path: "/contacts", name: "contacts", isAdmin: false, isAuth: false },
  { component: Basket, path: "/basket", name: "basket", isAdmin: false, isAuth: false },
  { component: PhotoProducts, path: "/photo-products", name: "photo-products", isAdmin: false, isAuth: false },
  { component: NotFound, path: "/not-found", name: "not-found", isAdmin: false, isAuth: false },
  { component: Login, path: "/signin", name: "signin", isAdmin: false, isAuth: false },
  { component: Register, path: "/signup", name: "signup", isAdmin: false, isAuth: false },
];

export const ProtectRoutes = [
  { component: Admin, path: "/admin", name: "adminName", isAdmin: true, isAuth: false },
  { component: Profile, path: "/profile", name: "profile", isAdmin: false, isAuth: true },
  { component: FormOrder, path: "/checkout", name: "checkout", isAdmin: false, isAuth: true },
];

export const subRoutes = [
  {
    component: PacketWithDetailsDescription,
    path: "/prices/packets/:id",
    name: "paket",
    isAdmin: false,
    isAuth: false,
  },
  { component: AddNewPacket, path: "/admin/addNewPacket", name: "addNewPacket", isAdmin: true, isAuth: false },
  { component: AddNewPhoto, path: "/admin/addNewPhoto", name: "addNewPhoto", isAdmin: true, isAuth: false },
  { component: OrderList, path: "/admin/orderList", name: "orderList", isAdmin: true, isAuth: false },
];

export const allRoutes = [...routes, ...ProtectRoutes, ...subRoutes];