import React from "react";
import Logout from "./Logout";

function Navbar() {
  return (
    <nav className=" h-14 flex justify-around items-center bg-sky-200">
      <div>
        <h1 className="font-bold">Riv San</h1>
      </div>
     
      <div>
        <Logout />
      </div>
    </nav>
  );
}

export default Navbar;
