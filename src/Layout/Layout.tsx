import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import { Toaster } from "react-hot-toast";

const Layout = () => {

  return (
    <>
      <nav className="h-24 w-full bg-white px-[2rem] py-[1rem] sticky top-0 z-10">
        <NavBar />
      </nav>
      <main className="flex-1 min-h-[80vh] bg-gray-100">
        <Outlet />
        <Toaster position="top-center"/>
      </main>
        <hr className="w-full h-[0.1rem] bg-gray-100"></hr>
      <footer className="h-20 w-full bg-white text-center py-5">
        <p >&copy; {new Date().getFullYear()} All rights reserved</p>
        <p className="text-sm">Made with ❤️ by <a href="https://github.com/niteshgiri-7" target="_blank" className="text-blue-500">Nitesh Giri</a></p>
      </footer>
    </>
  )
}

export default Layout;
