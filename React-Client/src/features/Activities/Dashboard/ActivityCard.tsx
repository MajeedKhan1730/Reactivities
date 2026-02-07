import { Button, Card, CardActions, CardContent, Chip, Typography } from "@mui/material"
import { Activity } from "react"

type Props={
  dataactivity: Activity
}
export default function ActivityCard({dataactivity}:Props) {
  return (
    <Card sx={{borderRadius:3}}>
      <CardContent>
        <Typography variant="h5">{dataactivity.title}</Typography>
        <Typography sx={{color:'text.secondary', mb:1}}>{dataactivity.date}</Typography>
        <Typography variant="body2">{dataactivity.description}</Typography>
        <Typography variant="subtitle1">{dataactivity.city} / {dataactivity.venue}</Typography>
      </CardContent>
      <CardActions sx={{display:'flex', justifyContent:'space-between', pb:2}}>
        <Chip label={dataactivity.category} variant="outlined"/>
        <Button size ="medium" variant="contained" >View</Button>
      </CardActions>
    </Card>
  )
}
