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

// @mui material components
import Grid from "@mui/material/Grid";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import StatisticsCoCreationLabCard from "examples/Cards/StatisticsCards/StatisticsCoCreationLabCard";
// Data
// import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";
import { useSelector } from 'react-redux'

function Dashboard() {
  const listVal = useSelector((state) => state.listVal.value)
  const listDate = useSelector((state) => state.listDate.value);


  console.log(listVal);

  // useSelector((state) => state.counter.value)

  console.log(listVal);
  console.log(listDate);
  const valCurrenteDate = "";

  // const { sales, tasks } = reportsLineChartData;
  // const { sales } = reportsLineChartData;
  // const labelsC = ["18:12:22","18:14:22","19:12:22"]
  const labelsC = listDate
  // const datasets = [44,33,87];
  const datasets = listVal;
  

  // labelsC.push(currentDate);
  // datasets.push(val);
   
  const peoplecounter = {
    labels:labelsC,
    datasets:{ label: "People", data:datasets },
} 

  // console.log({sales});
  return (
    <DashboardLayout>
      {/* <DashboardNavbar /> */}
      <MDBox py={3}>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5}>
                <StatisticsCoCreationLabCard
                color="dark"
                icon="weekend"
                title="People"
                />
                </MDBox>
            </Grid>
            <Grid item xs={12} md={12} lg={9}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="success"
                  title="daily sales"
                  description={valCurrenteDate}
                  date="update every 20s"
                  chart={peoplecounter}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default Dashboard;
