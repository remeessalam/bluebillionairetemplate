import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollTop";
import Logo from "../assets/svg/Logo.png";
import bgvideo from "../assets/video/backgroundvideo.mp4";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactPlayer from "react-player";
const AppLayout = () => {
  return (
    <>
      <div className="flex flex-col justify-center  relative ">
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition:Bounce
        />

        <Header />
        <div className="relative top-28 left-0 bg-contain bg-center bg-no-repeat">
          {/* <div className="fixed flex justify-center items-center opacity-20 -z-10 top-0 bg-contain bg-center bg-no-repeat w-screen  h-screen">
           
            <ReactPlayer
              url={bgvideo}
              loop={true}
              playsinline
              playing={true}
              width="100%"
              height="100%"
              muted
            />
          </div> */}
          <div className="overflow-hidden">
            <ScrollToTop />
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AppLayout;
