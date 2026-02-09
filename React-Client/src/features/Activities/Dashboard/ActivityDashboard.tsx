import { Grid} from "@mui/material";
// import ActivityCard from "./ActivityCard";
import ActivityList from "./ActivityList";
import ActivityDetails from "../Details/ActivityDetails";
import ActivityForm from "../../Form/ActivityForm";
type Props = {
  dataactivities:Activity[]
  selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    // selectedActivity: Activity | undefined
    selectedActivity?: Activity;
    openForm: (id?: string) => void;
    closeForm: () => void;
    editMode: boolean;
}
// export default function ActivityDashboard(props:Props) { //This is also a correct code but below is a cleaner code to do the same thing in cleanest way
export default function ActivityDashboard({dataactivities,selectActivity,cancelSelectActivity,selectedActivity, openForm,closeForm,editMode}:Props) {
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
              selectedActivity && !editMode &&
              <ActivityDetails 
              dataActivities={selectedActivity}
              cancelSelectActivity = {cancelSelectActivity}
              openForm={openForm}/>
             } 
              {editMode &&
                <ActivityForm closeForm={closeForm} activity={selectedActivity}/>
              }
        </Grid>
    </Grid>
  )
}
