import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../utils/auth";
const Navbar = () => {
  const [loginCheck, setLoginCheck] = useState(false);
  const navigate = useNavigate();
  const checkLogin = () => {
    if (auth.loggedIn()) {
      setLoginCheck(true);
    } else {
      setLoginCheck(false);
    }
  };
  useEffect(() => {
    console.log(loginCheck);
    checkLogin();
  }, []);
  return _jsxs("div", {
    className: "nav",
    children: [
      _jsx("div", {
        className: "nav-title",
        children: _jsx(Link, { to: "/", children: "Krazy Kanban Board" }),
      }),
      _jsx("ul", {
        children: !loginCheck
          ? _jsx("li", {
              className: "nav-item",
              children: _jsx("button", {
                type: "button",
                children: _jsx(Link, { to: "/login", children: "Login" }),
              }),
            })
          : _jsx("li", {
              className: "nav-item",
              children: _jsx("button", {
                type: "button",
                onClick: () => {
                  auth.logout();
                  setLoginCheck(false);
                  navigate('/login');
                },
                children: "Logout",
              }),
            }),
      }),
    ],
  });
};
export default Navbar;
