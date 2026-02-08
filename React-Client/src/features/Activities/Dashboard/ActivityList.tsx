import { Box } from "@mui/material";
import ActivityCard from "./ActivityCard";
//To get activities inside ActivityList
type Props={
  dataactivities: Activity[]
  selectActivity: (id: string) => void;
}
export default function ActivityList({dataactivities, selectActivity}:Props) {
  return (
    <Box sx={{display:'flex', flexDirection:'column', gap:3 }}>
    {dataactivities.map(activity=>(
      <ActivityCard key={activity.id} dataactivity={activity} selectActivity={selectActivity}/>
    ))}
    </Box>
  )
}
