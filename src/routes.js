import NotFound from "./pages/NotFound";
import Index from "./pages/index";
import { State, User } from "./pages/User";
import { Photo } from "./pages/Photos";
import { Albums } from "./pages/Albums";

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
    Element: Albums,
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
    path: "*",
    Element: NotFound,
    isAuthenticated: true,
  },
];

export default routes;
