import { Grid} from "@mui/material";
// import ActivityCard from "./ActivityCard";
import ActivityList from "./ActivityList";
type Props = {
  dataactivities:Activity[]
}
// export default function ActivityDashboard(props:Props) { //This is also a correct code but below is a cleaner code to do the same thing in cleanest way
export default function ActivityDashboard({dataactivities}:Props) {
  return (
    <Grid container>
        <Grid size={9}>
              {/* <List> */}
                {/* {props.dataactivities.map((activity)=>( */}
                  {/* {dataactivities.map((activity)=>(
                  <ListItem key={activity.id}>
                    <ListItemText>{activity.title}</ListItemText></ListItem>
                ))}
              </List> */}
              <ActivityList dataactivities={dataactivities}/>
        </Grid>
    </Grid>
  )
}
