import { useEffect, useState } from "react";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {Typography, CssBaseline, Container, Box } from "@mui/material";
import axios from "axios";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/Activities/Dashboard/ActivityDashboard";

function App() {
  const title = "Wolcome to Reactivities";
  const [dataactivities, setdataActivities] = useState<Activity[]>([]);
  useEffect(() => {
    axios.get<Activity[]>('https://localhost:7028/api/activities')
      .then(response => setdataActivities(response.data))
  }, [])
  return (
    <Box sx={{bgcolor:'#eeeeee'}}>
    <CssBaseline/>
    <NavBar/>
   <Typography variant='h1'>{title}</Typography>
    <Container maxWidth="xl" sx={{mt:3}}>
    <ActivityDashboard dataactivities={dataactivities}/>
    </Container>

    </Box>
  )
}

export default App
