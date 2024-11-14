import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AppLayout from "./Layout/AppLayout";
import AboutPage from "./pages/AboutPage/AboutPage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import ContactusPage from "./pages/ContactusPage/ContactusPage";
import LandingPage from "./landingpage/src/pages/LandingPage/LandingPage";
import Applayoutlandingpage from "./landingpage/src/Layout/Applayoutlandingpage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/services",
        element: <ServicesPage />,
      },
      {
        path: "/contactus",
        element: <ContactusPage />,
      },
    ],
  },
  {
    path: "/",
    element: <Applayoutlandingpage page={"web"} />,
    children: [
      {
        path: "/webdevelopment",
        element: <LandingPage />,
      },
    ],
  },
  {
    path: "/",
    element: <Applayoutlandingpage page={"app"} />,
    children: [
      {
        path: "/appdevelopment",
        element: <LandingPage />,
      },
    ],
  },
]);

export default appRouter;
