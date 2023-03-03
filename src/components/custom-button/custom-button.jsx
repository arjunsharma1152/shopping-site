import React from "react";
import Button from "@mui/material/Button";
import "./custom-button.scss";

const CustomButton = ({ children, isGoogle, ...otherProps }) => (
  <Button
    variant="contained"
    className={`${isGoogle ? "google-button" : ""} custom-button`}
    {...otherProps}
  >
    {children}
  </Button>
);

export default CustomButton;
