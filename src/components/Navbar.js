import React from "react";

export default function Navbar() {
  const imageProfile = `https://api.dicebear.com/6.x/initials/png?seed=RodrigoCabrera`;

  return (
    <div className="Navbar navbar flex justify-between items-center bg" >
      <a className="navbar-brand text-primary" href="/">
        SuperHero <spa className="text-danger">Blog</spa>
      </a>
      <img src="https://desuperhero.com/wp-content/uploads/2018/05/cropped-desuperhero-logo-1.png" width={100} className="mt-1"></img>
      <hr/>

      <div className="flex items-center">
        <input
          type="text"
          className="border rounded py-2 px-4 focus:outline-none"
          placeholder="Search . . ."
        />
        <button className="bg-gray-300 rounded px-4 py-2">
          <img
            src="https://img.icons8.com/?size=30&id=59878&format=png"
            alt="Lupa"
            className="rounded"
            width={20}
          />
        </button>
      </div>

      <div className="flex items-center">
        <ul className="nav flex items-center">
          <li className="nav-item">
            <a className="nav-link text-primary " href="/">
              <span className="text-primary" >Choose your favorite</span> <span className="text-danger" >SuperHero</span>
            </a>
          </li>
          <li className="nav-item ml-2">
            <img
              src={imageProfile}
              width={50}
              className="rounded"
              alt="Profile"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
