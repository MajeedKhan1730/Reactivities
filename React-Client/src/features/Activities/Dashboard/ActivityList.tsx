import { Box } from "@mui/material";
import ActivityCard from "./ActivityCard";
//To get activities inside ActivityList
type Props={
  dataactivities: Activity[]
}
export default function ActivityList({dataactivities}:Props) {
  return (
    <Box sx={{display:'flex', flexDirection:'column', gap:3 }}>
    {dataactivities.map(activity=>(
      <ActivityCard key={activity.id} dataactivity={activity}/>
    ))}
    </Box>
  )
}
