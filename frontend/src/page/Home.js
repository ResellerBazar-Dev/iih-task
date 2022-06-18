import React, { useState, useEffect } from "react";
import AddButton from "../components/AddButton";
import AddDialogBox from "../components/AddDialogBox";
import SuperAdminAllCards from "../components/SuperAdminAllCards";
import AdminAllCards from "../components/AdminAllCards";
import EmpAllCards from "../components/EmpAllCards";
import "./Home.css";

import { useDispatch, useSelector } from "react-redux";
import { getAllSuperAdmin } from "../actions/superAdminAction";
import { getAllAdmin } from "../actions/adminAction";
import { getAllEmp } from "../actions/empAction";

const Home = () => {
  const dispatch = useDispatch();
  const superAdminData = useSelector((state) => state.superAdminReducer);
  const adminData = useSelector((state) => state.adminReducer);
  const empData = useSelector((state) => state.empReducers);

  console.log("superAdminData", adminData);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(getAllSuperAdmin());
    dispatch(getAllAdmin());
    dispatch(getAllEmp());
  }, []);

  return (
    <>
      <AddButton handleClickOpen={handleClickOpen} />
      <AddDialogBox handleClose={handleClose} open={open} />

      <div className="super_admin_cards">
        {superAdminData?.superAdmin.map((val, key) => {
          return <SuperAdminAllCards val={val} />;
        })}
      </div>

      <div className="admin_cards">
        {adminData?.admin.map((val, key) => {
          return <AdminAllCards val={val} />;
        })}
      </div>

      <div className="emp_cards">
        {empData?.emp.map((val, key) => {
          return <EmpAllCards val={val} />;
        })}
      </div>
    </>
  );
};

export default Home;
