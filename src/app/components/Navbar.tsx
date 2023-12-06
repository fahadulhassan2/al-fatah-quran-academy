import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  let nav = false;
  let two = nav ? <div>Navbar1</div> : <div>Navba2</div>;

  return <div>{two}</div>;
};

export default Navbar;
