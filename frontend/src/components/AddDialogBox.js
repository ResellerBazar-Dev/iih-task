import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Avatar from "@mui/material/Avatar";
import { Input } from "@mui/material";

import { addSuperAdmin, getAllSuperAdmin } from "../actions/superAdminAction";
import { useDispatch } from "react-redux";

const AddDialogBox = (props) => {
  const dispatch = useDispatch();
  const [imagePrev, setImagePrev] = useState();
  const [addData, setAddData] = useState({
    name: "",
    email: "",
    image: "",
    dateOfBirth: "",
    gender: "",
  });

  console.log("addData", addData);

  const uploadImage = (event) => {
    const image = event.target.files[0];

    setAddData({ ...addData, image: image });

    setImagePrev(URL.createObjectURL(image));
  };

  const addSuperAdminData = () => {
    const formData = new FormData();

    formData.append("name", addData.name);
    formData.append("email", addData.email);
    formData.append("dateOfBirth", addData.dateOfBirth);
    formData.append("gender", addData.gender);
    formData.append("super_admin_image", addData.image);

    dispatch(addSuperAdmin(formData, addData));

    props.handleClose();
  };

  return (
    <div>
      <Dialog open={props.open} onClose={props.handleClose} fullWidth>
        <DialogTitle>Add Super Admin</DialogTitle>
        <DialogContent>
          <Box>
            <label
              htmlFor="icon-button-file"
              className="profileImage_upload_icon"
            >
              <Avatar
                alt="Remy Sharp"
                src={imagePrev}
                sx={{
                  width: 150,
                  height: 150,
                  mx: "auto",
                  marginBottom: "20px",
                }}
                className="avtar_preview"
              />
              <Input
                accept="image/*"
                id="icon-button-file"
                type="file"
                className="image_input"
                onChange={uploadImage}
              />
            </label>
          </Box>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="test"
            fullWidth
            variant="standard"
            value={addData.name}
            onChange={(e) => setAddData({ ...addData, name: e.target.value })}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            value={addData.email}
            onChange={(e) => setAddData({ ...addData, email: e.target.value })}
          />

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
              variant="standard"
              value={addData.gender}
              onChange={(e) =>
                setAddData({ ...addData, gender: e.target.value })
              }
            >
              <MenuItem value="male">male</MenuItem>
              <MenuItem value="female">female</MenuItem>
            </Select>
          </FormControl>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="DOB"
            type="date"
            fullWidth
            variant="standard"
            value={addData.dateOfBirth}
            onChange={(e) =>
              setAddData({ ...addData, dateOfBirth: e.target.value })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>Cancel</Button>
          <Button onClick={addSuperAdminData}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddDialogBox;
