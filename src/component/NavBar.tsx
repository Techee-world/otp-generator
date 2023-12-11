import React from "react";
import { Link , useNavigate } from "react-router-dom";

const NavBar: React.FC = ({}) => {
  
    const navigate = useNavigate()
function signOutHandle() {
    sessionStorage.removeItem("phoneNumber");
    navigate('/')
    alert('log out ')
}
  return (
    <nav className="bg-gray-800 p-2">
      <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center">
              <Link to="/main">
                {" "}
                <a
                  href="#"
                  className="text-white font-semibold text-lg hover:bg-slate-700 duration-700 rounded-md py-1 text-center px-4"
                >
                  Home
                </a>
              </Link>
            </div>
            <div className="flex">
              <Link to="/">
                {" "}
                <div
                  className="hover:bg-slate-700 duration-700 text-white rounded-md py-1 text-center px-4"
                >
                  Sign In
                </div>
              </Link>

              <div
                onClick={signOutHandle}
                className="hover:bg-slate-700 cursor-pointer duration-700 text-white rounded-md py-1 text-center px-4"
              >
                Sign out
              </div>
            </div>
          
      </div>
    </nav>
  );
};

export default NavBar;
