import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { MenuItem, Menu, ListItemIcon } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AddAdminDialogBox from "./AddAdminDialogBox";
import DeleteIcon from "@mui/icons-material/Delete";

import { useDispatch, useSelector } from "react-redux";
import { deleteAdmin } from "../actions/adminAction";
import AddEmpDialogBox from "./AddEmpDialogBox";

const SuperAdminAllCards = ({ val }) => {
  const dispatch = useDispatch();
  // const superAdminData = useSelector((state) => state.superAdminReducer);

  const [profileMenu, setProfileMenu] = useState(null);

  const [openDialog, setOpenDialog] = useState(false);

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const open = Boolean(profileMenu);
  const handleClick = (event) => {
    setProfileMenu(event.currentTarget);
  };
  const handleClose = () => {
    setProfileMenu(null);
  };

  const handleDeleteClick = () => {
    dispatch(deleteAdmin(val._id));
  };

  const [expanded, setExpanded] = React.useState(false);

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <AddEmpDialogBox
          openDialog={openDialog}
          handleCloseDialog={handleCloseDialog}
          val={val}
        />
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: red[500] }}
              aria-label="recipe"
              src={val.admin_image}
            ></Avatar>
          }
          action={
            <>
              <IconButton
                aria-label="settings"
                onClick={handleClick}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <MoreVertIcon />
              </IconButton>
              <Menu
                anchorEl={profileMenu}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                className="profileMenuItems"
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem onClick={handleClickOpenDialog}>
                  <ListItemIcon>
                    <AddIcon />
                  </ListItemIcon>
                  Add
                </MenuItem>
                <MenuItem onClick={handleDeleteClick}>
                  <ListItemIcon>
                    <DeleteIcon />
                  </ListItemIcon>
                  Delete
                </MenuItem>
              </Menu>
            </>
          }
          title={val.name}
          subheader={val.email}
        />

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            GENDER : {val.gender}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            DOB : {val.dateOfBirth}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ROLE : {val.role}
          </Typography>
        </CardContent>

        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: red[500] }}
              aria-label="recipe"
              src={val.super_admin[0]?.super_admin_image}
            ></Avatar>
          }
          subheader="Created By"
          title={val.super_admin[0]?.name}
        />
      </Card>
    </>
  );
};

export default SuperAdminAllCards;
