import React from "react";
import "../styles/navbar.css";

const Navbar = () => (
  <nav class="navbar navbar-expand-md bg-danger w-100" id="myNavbar">
    <div class="container-fluid">
      <a class="navbar-brand text-white" id="brand" href="/"><strong>socialPETS</strong></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
      <form class="form-inline my-2 my-lg-0 mr-5">
        <input class="form-control-sm mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-sm btn-dark my-2 my-sm-0" type="submit">Search</button>
      </form>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="navbar-nav d-flex align-items-center">
          <a class="nav-item nav-link text-white" href="/" id="home">Home</a>
          <a class="nav-item nav-link text-white" href="/savedarticles" id="saved">Saved Articles</a>
          <a class="nav-item nav-link" href="/scrape"><button type="button" class="btn btn-sm btn-dark" id="scrape">Scrape New Articles</button></a>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;