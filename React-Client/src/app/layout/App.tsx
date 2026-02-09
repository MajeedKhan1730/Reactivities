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
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editActivity, setEditActivity] = useState(false);
  useEffect(() => {
    axios.get<Activity[]>('https://localhost:7028/api/activities')
      .then(response => setdataActivities(response.data))
      return () => { }
  }, [])
const handleSelectActivity = (id:string)=>{
  setSelectedActivity(dataactivities.find(x=>x.id===id));
}
const handleCancelSelectActivity = ()=>{
  setSelectedActivity(undefined);
}
const handleOpenForm = (id?: string)=>{
  if(id) handleSelectActivity(id);
    else handleCancelSelectActivity();
    setEditActivity(true);

}
const handleFormClose = () => {
  setEditActivity(false);
}

  return (
    <Box sx={{bgcolor:'#eeeeee'}}>
    <CssBaseline/>
    <NavBar openForm={handleOpenForm} /> 
   <Typography variant='h1'>{title}</Typography>
    <Container maxWidth="xl" sx={{mt:3}}>
    <ActivityDashboard 
      dataactivities={dataactivities}
      selectActivity = {handleSelectActivity}
      cancelSelectActivity = {handleCancelSelectActivity}
      selectedActivity = {selectedActivity}
      editMode={editActivity}
      openForm={handleOpenForm}
      closeForm={handleFormClose}
    />
    </Container>

    </Box>
  )
}

export default App
