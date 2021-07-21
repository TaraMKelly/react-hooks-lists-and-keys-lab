import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const anchorLinks = links.map(link => {
    return <a href='#{link}'>{link}</a>
  })

  return <nav>{anchorLinks}</nav>;
}

export default NavBar;
