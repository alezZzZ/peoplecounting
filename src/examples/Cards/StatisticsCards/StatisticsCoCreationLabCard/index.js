/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incrementByAmount } from "redux/peoplecounter";
import { setCurrentDate } from "redux/listDate";
import { setCurrentVal } from "redux/listVal";

var lastVal="";
var lastDateTime="";


const fun = async()=>{
  try{
  const itemPeopleCountJson = await fetch("/peoplecount");
  console.log("PeopleCount:"+itemPeopleCountJson);
  var itemPeopleCount =  await itemPeopleCountJson.json(); 
  const obj = JSON.parse(itemPeopleCount);
  console.log("React->People Detected:"+obj.total_people_detected);
  var currentDateMS = obj.timestamp;
  var date = new Date(+currentDateMS);
  lastVal = obj.total_people_detected;
  lastDateTime = date.toLocaleTimeString();
  console.log("React->Time Detection:"+lastDateTime);
  }
  catch(err){
    console.error(err);
  }
};

const PeopleCount = () => {
  const dispatch = useDispatch();
  const tick = () => {
  fun();
  dispatch(incrementByAmount(lastVal));
  dispatch(setCurrentVal(lastVal));
  dispatch(setCurrentDate(lastDateTime));
  }

  useEffect(() => {
    const timerID = setTimeout(() => tick(), 10000)
    return () => {
      clearTimeout(timerID);
    }
  })
  return  useSelector((state) => state.counter.value)
}

function StatisticsCoCreationLabCard({ color, title, icon }) {
  return (
    
    <Card>
      <MDBox display="flex" justifyContent="space-between" pt={1} px={2} height="6rem">
        <MDBox
          variant="gradient"
          bgColor={color}
          color={color === "light" ? "dark" : "white"}
          coloredShadow={color}
          borderRadius="xl"
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="4rem"
          height="4rem"
          mt={-3}
        >
          <Icon fontSize="medium" color="inherit">
            {icon}
          </Icon>
        </MDBox>
        <MDBox textAlign="right" lineHeight={1.25}>
          <MDTypography variant="button" fontWeight="light" color="text">
            {title}
          </MDTypography>
          
        </MDBox>
      </MDBox>
      <MDBox >
        <MDTypography  textAlign="center" fontSize="6rem"><PeopleCount /></MDTypography>
      </MDBox>
      <Divider />
      <MDBox pb={2} px={2}>
        <MDTypography component="p" variant="button" color="text" display="flex">
          <MDTypography
            component="span"
            variant="button"
            fontWeight="bold"            
          />
        </MDTypography>
      </MDBox>
    </Card>
  );
}

// Setting default values for the props of StatisticsCoCreationLabCard
StatisticsCoCreationLabCard.defaultProps = {
  color: "info",
};

// Typechecking props for the StatisticsCoCreationLabCard
StatisticsCoCreationLabCard.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  title: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};




export default StatisticsCoCreationLabCard;
