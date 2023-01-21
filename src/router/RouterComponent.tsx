import React, { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate, Navigate } from "react-router-dom";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { useAppSelector } from "../redux/hooks";
import { allRoutes } from "./config";
import { IRoute } from "../types";
import { Layout } from "../layout";
import NotFound from "../pages/NotFound/NotFound";

export const RouterComponent: React.FC = () => {
  const { pathname } = useLocation();
  const { auth } = useAppSelector((state) => state.user);
  const { basketIsNotEmpty } = useAppSelector((state) => state.packets);
  const staff = true;
  //const navigate = useNavigate()

  useEffect(() => {
    if (pathname) {
      // @ts-ignore
      window.ym(90939090, "hit", window.location.href);
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {allRoutes.map((route: IRoute) => {
          // const pathSubRoute = Array.isArray(route.subRoutes)
          //   ? route.subRoutes.filter((item: { path:string, name: string }) => item.path === pathname && item.path)[0].path
          //   : route.path;
          // const path = Array.isArray(route.path)
          //   ? route.path.filter((item: string) => item === pathname && item)[0]
          //   : route.path;
          // if (Array.isArray(route.subPath)) {
          //   const res2 = route.subPath.find((item: string) => {
          //     // console.log(item)
          //     //  console.log('item', `/${route.path}/${item}`, 'pathname', pathname)
          //     const res = `/${route.path}/${item}` === pathname;
          //     // console.log(res)
          //     if (res) {
          //       return item;
          //     }
          //   });
          //   console.log(res2);
          // }

          const path = Array.isArray(route.subPath)
            ? route.subPath.find((item: string) => {
              //   console.log(item)
                 console.log('item', `/${route.path}${item}`, 'pathname', pathname)
                const res = `/${route.path}${item}` === pathname;
                // console.log(res)
                if (res) {
                  return item;
                }
              })
            : route.path;
          // const path = Array.isArray(route.subPath)
          //   ? route.subPath.filter((item: string) => {
          //    // console.log(item)
          //     console.log('item', `/${route.path}/${item}`, 'pathname', pathname)
          //     const res = `/${route.path}/${item}` === pathname
          //    // console.log(res)
          //     if(res) {
          //       return item
          //     }
          //   })[0]
          //   : route.path;
         console.log(path);
          const authorization = (route: IRoute): boolean => {
            if (route.isAuth) return auth;
            if (route.isAdmin) return staff;
            if (route.protectRouteBasket) return basketIsNotEmpty;
            return false;
          };

          const protectedRoutes = route.isAdmin || route.isAuth || route.protectRouteBasket;
          // console.log('route', route, path)
          return protectedRoutes ? (
            <Route
              path={path}
              key={route.name}
              element={
                <ProtectedRoute authorization={authorization(route)}>
                  <route.component />
                </ProtectedRoute>
              }
            />
          ) : (
            <Route
              index={route?.index}
              path={route.path}
              key={route.name}
              element={
                Array.isArray(route.subPath) ? <Route path={path} element={<route.component />} /> : <route.component />
              }
            />
          );
        })}
      </Route>
      {/*<Route path="*" element={<NotFound/>}/>*/}
    </Routes>
  );
};
