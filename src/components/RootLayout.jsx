import { Outlet } from "react-router";
import Header from "./Header.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout() {
  return (
    <div>

      <Header />

      <main className="max-w-337.5 mx-auto my-10">

        <Outlet />

         <ToastContainer />

      </main>


    </div>
  )
}