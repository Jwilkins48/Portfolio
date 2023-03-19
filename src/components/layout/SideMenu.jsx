import React from "react";

function SideMenu({ formData }) {
  console.log(formData);
  return <div>{formData?.name}</div>;
}

export default SideMenu;
