import React from "react";
import Button from "@mui/material/Button";

const AddButton = (props) => {
  return (
    <>
      <Button variant="contained" onClick={props.handleClickOpen}>
        Add Super Admin
      </Button>
    </>
  );
};

export default AddButton;
