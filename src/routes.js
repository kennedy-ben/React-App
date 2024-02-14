import { Navigate } from "react-router";
import NotFound from "./pages/NotFound";
import Index from "./pages/index";
import State from "./pages/state";
import User from "./pages/users";
import Photo from "./pages/photo";
import Album from "./pages/album";
import Albums from "./pages/albums";

const routes = [
  {
    path: "/",
    Element: Index,
    isAuthenticated: false,
  },

  {
    path: "/users",
    Element: State,
    isAuthenticated: true,
  },
  {
    path: "/state",
    Element: State,
    isAuthenticated: true,
  },
  {
    path: "/user/:userId",
    Element: User,
    isAuthenticated: true,
  },
  {
    path: "/albums/:albumId",
    Element: Album,
    isAuthenticated: true,
  },
  {
    path: "/albums",
    Element: Albums,
    isAuthenticated: true,
  },
  {
    path: "/Photo",
    Element: Photo,
    isAuthenticated: true,
  },

  {
    path: "/notfound",
    Element: NotFound,
    isAuthenticated: true,
  },

  {
    path: "*",
    Element: () => <Navigate to="/notfound" replace />,
    isAuthenticated: true,
  },
];

export default routes;
