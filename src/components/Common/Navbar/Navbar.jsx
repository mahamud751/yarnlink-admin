import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UilSearch } from "@iconscout/react-unicons";
import { BiSolidChevronDown } from "react-icons/bi";
import { useContext } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import img3 from "../../../img/home/Ellipse 116.png";
import { AuthContext } from "../../../contexts/UserProvider";
import "./Navbar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);
  const [isActive5, setIsActive5] = useState(false);

  const handleLogOut = () => {
    logoutUser();
    navigate("/signup");
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  if (location.pathname === "/signup") {
    return null;
  }
  return (
    <div>
      <div className="wrapper">
        <nav className="main-header navbar navbar-expand">
          {/* Left navbar links */}
          <div className="nav_design">
            <ul className="navbar-nav" style={{ marginTop: -6 }}>
              <div className="navbar_bar">
                <li className="nav-link">
                  <a
                    className="nav-link"
                    data-widget="pushmenu"
                    href="..."
                    role="button"
                  >
                    <i className="fas fa-bars bars_1" />
                  </a>
                </li>
              </div>
            </ul>
            <ul
              style={{ zIndex: 1 }}
              className="nav navbar-nav navbar-right nav_bar_icons menu_right_li"
            >
              <li className="new_invoice_top_menu_link_li">
                <div className="logoSearch">
                  <div className="search">
                    <input type="text" placeholder="Search here" />
                    <div className="s-icon">
                      <UilSearch />
                    </div>
                  </div>
                </div>
              </li>
            </ul>

            <ul className="navbar-nav ml-lg-auto">
              <div>
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <img src={img3} className="profile_image" alt="" />
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleLogOut}>Logout</MenuItem>
                </Menu>
              </div>
            </ul>
          </div>
          {/* Right navbar links */}
        </nav>

        <aside
          className="main-sidebar sidebar-dark-primary elevation-4 side_menubar "
          style={{
            position: "fixed",
          }}
        >
          {/* Sidebar */}
          <div className="sidebar">
            {/* Sidebar user panel (optional) */}
            <div>
              <h6 className="navbar_logo_text text-center my-4">LOGO</h6>
            </div>

            <nav className="mt-2" style={{ width: "1000px" }}>
              <ul
                className="nav nav-pills nav-sidebar flex-column "
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >
                <div className="navbar_bar bar_menu_sm">
                  <li className="nav-link">
                    <a
                      className="nav-link"
                      data-widget="pushmenu"
                      href="..."
                      role="button"
                      style={{ display: "flex", justifyContent: "end" }}
                    >
                      <i
                        className="fa-solid fa-circle-xmark "
                        style={{ fontSize: 36 }}
                      ></i>
                    </a>
                  </li>
                </div>

                <Link to={"/"}>
                  <li className="main_nav-link">
                    <a href="/" className="nav-link">
                      <div className="menu_flex">
                        <span className="span_text">Home</span>
                      </div>
                    </a>
                  </li>
                </Link>

                <li className="nav-item">
                  <span
                    className="nav-link"
                    onClick={() => {
                      setIsActive1(!isActive4);
                      setIsActive2(false);
                      setIsActive3(false);
                      setIsActive4(false);
                      setIsActive5(false);
                    }}
                  >
                    <p className="span_text">
                      Product
                      <i
                        className={`fas fa-angle-left right ${
                          isActive1 ? "d-none" : "d-block"
                        }`}
                      />
                      <span className="badge badge-info right">2</span>
                      <BiSolidChevronDown
                        style={{ width: "23px", height: "23px" }}
                        className={`down-arrow ${
                          isActive1 ? "d-block" : "d-none"
                        }`}
                      />
                    </p>
                  </span>
                  <ul
                    className={` custom-drop ${
                      isActive1 ? "custom-drop-show" : ""
                    }`}
                  >
                    <Link to={"/add_product"}>
                      <li className="main_nav-link">
                        <span className="nav-link">
                          {/* <i className="fa-sharp fa-solid fa-building-columns span_text2"></i> */}
                          <div className="menu_flex">
                            <span className="span_text">Add Product</span>
                          </div>
                        </span>
                      </li>
                    </Link>
                    <Link to={"/product_list"}>
                      <li className="main_nav-link">
                        <span className="nav-link">
                          {/* <img style={{ width: 16 }} src={img6} alt="" /> */}
                          <div className="menu_flex">
                            <span className="span_text">Product List</span>
                          </div>
                        </span>
                      </li>
                    </Link>
                  </ul>
                </li>

                <li className="nav-item">
                  <span
                    className="nav-link"
                    onClick={() => {
                      setIsActive1(false);
                      setIsActive2(!isActive2);
                      setIsActive3(false);
                      setIsActive4(false);
                      setIsActive5(false);
                    }}
                  >
                    <p className="span_text">
                      Banner
                      <i
                        className={`fas fa-angle-left right ${
                          isActive2 ? "d-none" : "d-block"
                        }`}
                      />
                      <span className="badge badge-info right">2</span>
                      <BiSolidChevronDown
                        style={{ width: "23px", height: "23px" }}
                        className={`down-arrow ${
                          isActive2 ? "d-block" : "d-none"
                        }`}
                      />
                    </p>
                  </span>
                  <ul
                    className={` custom-drop ${
                      isActive2 ? "custom-drop-show" : ""
                    }`}
                  >
                    <Link to={"/add_banner"}>
                      <li className="main_nav-link">
                        <span className="nav-link">
                          {/* <img style={{ width: 16 }} src={img7} alt="" /> */}
                          <div className="menu_flex">
                            <span className="span_text">Add Banner</span>
                          </div>
                        </span>
                      </li>
                    </Link>
                    <Link to={"/banner_list"}>
                      <li className="main_nav-link">
                        <span className="nav-link">
                          {/* <i className="fa-solid fa-grip-lines span_text2"></i> */}
                          <div className="menu_flex">
                            <span className="span_text">Banner List</span>
                          </div>
                        </span>
                      </li>
                    </Link>
                  </ul>
                </li>

                <li className="nav-item">
                  <span
                    className="nav-link"
                    onClick={() => {
                      setIsActive1(false);
                      setIsActive2(false);
                      setIsActive3(!isActive3);
                      setIsActive4(false);
                      setIsActive5(false);
                    }}
                  >
                    <p className="span_text">
                      Supplier
                      <i
                        className={`fas fa-angle-left right ${
                          isActive3 ? "d-none" : "d-block"
                        }`}
                      />
                      <span className="badge badge-info right">2</span>
                      <BiSolidChevronDown
                        style={{ width: "23px", height: "23px" }}
                        className={`down-arrow ${
                          isActive3 ? "d-block" : "d-none"
                        }`}
                      />
                    </p>
                  </span>
                  <ul
                    className={` custom-drop ${
                      isActive3 ? "custom-drop-show" : ""
                    }`}
                  >
                    <Link to={"/add_supplier"}>
                      <li className="main_nav-link">
                        <span className="nav-link">
                          {/* <img style={{ width: 16 }} src={img7} alt="" /> */}
                          <div className="menu_flex">
                            <span className="span_text">Add Supplier</span>
                          </div>
                        </span>
                      </li>
                    </Link>
                    <Link to={"/supplier_list"}>
                      <li className="main_nav-link">
                        <span className="nav-link">
                          {/* <i className="fa-solid fa-grip-lines span_text2"></i> */}
                          <div className="menu_flex">
                            <span className="span_text">Supplier List</span>
                          </div>
                        </span>
                      </li>
                    </Link>
                  </ul>
                </li>
                <li className="nav-item">
                  <span
                    className="nav-link"
                    onClick={() => {
                      setIsActive1(false);
                      setIsActive2(false);
                      setIsActive3(false);
                      setIsActive4(!isActive4);
                    }}
                  >
                    <p className="span_text">
                      Strength
                      <i
                        className={`fas fa-angle-left right ${
                          isActive4 ? "d-none" : "d-block"
                        }`}
                      />
                      <span className="badge badge-info right">2</span>
                      <BiSolidChevronDown
                        style={{ width: "23px", height: "23px" }}
                        className={`down-arrow ${
                          isActive4 ? "d-block" : "d-none"
                        }`}
                      />
                    </p>
                  </span>
                  <ul
                    className={` custom-drop ${
                      isActive4 ? "custom-drop-show" : ""
                    }`}
                  >
                    <Link to={"/add_strength"}>
                      <li className="main_nav-link">
                        <span className="nav-link">
                          {/* <img style={{ width: 16 }} src={img7} alt="" /> */}
                          <div className="menu_flex">
                            <span className="span_text">Add Strength</span>
                          </div>
                        </span>
                      </li>
                    </Link>
                    <Link to={"/strength_list"}>
                      <li className="main_nav-link">
                        <span className="nav-link">
                          {/* <i className="fa-solid fa-grip-lines span_text2"></i> */}
                          <div className="menu_flex">
                            <span className="span_text">Strength List</span>
                          </div>
                        </span>
                      </li>
                    </Link>
                  </ul>
                </li>
                <li className="nav-item">
                  <span
                    className="nav-link"
                    onClick={() => {
                      setIsActive1(false);
                      setIsActive2(false);
                      setIsActive3(false);
                      setIsActive4(false);
                      setIsActive5(!isActive5);
                    }}
                  >
                    <p className="span_text">
                      Blogs
                      <i
                        className={`fas fa-angle-left right ${
                          isActive5 ? "d-none" : "d-block"
                        }`}
                      />
                      <span className="badge badge-info right">2</span>
                      <BiSolidChevronDown
                        style={{ width: "23px", height: "23px" }}
                        className={`down-arrow ${
                          isActive5 ? "d-block" : "d-none"
                        }`}
                      />
                    </p>
                  </span>
                  <ul
                    className={` custom-drop ${
                      isActive5 ? "custom-drop-show" : ""
                    }`}
                  >
                    <Link to={"/add_blog"}>
                      <li className="main_nav-link">
                        <span className="nav-link">
                          {/* <img style={{ width: 16 }} src={img7} alt="" /> */}
                          <div className="menu_flex">
                            <span className="span_text">Add Blogs</span>
                          </div>
                        </span>
                      </li>
                    </Link>
                    <Link to={"/blog_list"}>
                      <li className="main_nav-link">
                        <span className="nav-link">
                          {/* <i className="fa-solid fa-grip-lines span_text2"></i> */}
                          <div className="menu_flex">
                            <span className="span_text">Blogs List</span>
                          </div>
                        </span>
                      </li>
                    </Link>
                  </ul>
                </li>
                <Link to={"/pages"}>
                  <li className="main_nav-link">
                    <a className="nav-link">
                      <div className="menu_flex">
                        <span className="span_text">Pages</span>
                      </div>
                    </a>
                  </li>
                </Link>

                <li className="main_nav-link password_sm">
                  <a className="nav-link" onClick={handleLogOut}>
                    <div className="menu_flex">
                      <span className="span_text">Log Out</span>
                    </div>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Navbar;
