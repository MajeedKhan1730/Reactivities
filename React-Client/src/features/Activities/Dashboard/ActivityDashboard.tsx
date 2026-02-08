import { Grid} from "@mui/material";
// import ActivityCard from "./ActivityCard";
import ActivityList from "./ActivityList";
import ActivityDetails from "../Details/ActivityDetails";
type Props = {
  dataactivities:Activity[]
  selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    // selectedActivity: Activity | undefined
    selectedActivity?: Activity;
}
// export default function ActivityDashboard(props:Props) { //This is also a correct code but below is a cleaner code to do the same thing in cleanest way
export default function ActivityDashboard({dataactivities,selectActivity,cancelSelectActivity,selectedActivity}:Props) {
  return (
    <Grid container spacing={3}>
        <Grid size={7}>
              {/* <List> */}
                {/* {props.dataactivities.map((activity)=>( */}
                  {/* {dataactivities.map((activity)=>(
                  <ListItem key={activity.id}>
                    <ListItemText>{activity.title}</ListItemText></ListItem>
                ))}
              </List> */}
              <ActivityList 
                dataactivities={dataactivities}
                selectActivity={selectActivity}
              />
        </Grid>
        <Grid size={5}>
             {/* {dataactivities[0] && <ActivityDetails dataActivities={dataactivities[0]}/>}          */}
             {
              selectedActivity && <ActivityDetails 
              dataActivities={selectedActivity}
              cancelSelectActivity = {cancelSelectActivity}/>
             } 
        </Grid>
    </Grid>
  )
}
