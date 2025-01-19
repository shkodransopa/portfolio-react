//import logo from "../assets/logo.png"
import { FaLinkedin, FaGithub, FaTwitterSquare, FaInstagram } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className="mb-0 flex items-center justify-between py-0">

        <div className="flex flex-shrink-0 items-center">
            {/* <img className="mx-2 w-10" src={logo} alt="logo" /> */}
            <div className="flex items-center justify-center h-48 w-48 bg-transparent text-white">
                <span className="text-2xl font-bold">SHS</span>
            </div>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <FaLinkedin />
          <FaGithub />
          <FaTwitterSquare />
          <FaInstagram />
          
        </div>
    </nav>
  )
}

export default Navbar