import { useEffect, useState } from "react";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {ListItemText, List, ListItem, Typography } from "@mui/material";
import axios from "axios";

function App() {
  const title = "Wolcome to Reactivities";
  const [dataactivities, setdataActivities] = useState<Activity[]>([]);
  useEffect(() => {
    axios.get<Activity[]>('https://localhost:7028/api/activities')
      .then(response => setdataActivities(response.data))
  }, [])
  return (
    <>
   <Typography variant='h1'>{title}</Typography>
    <List>
      {dataactivities.map((activity)=>(
        <ListItem key={activity.id}>
          <ListItemText>{activity.title}</ListItemText></ListItem>
      ))}
    </List>
    </>
  )
}

export default App
