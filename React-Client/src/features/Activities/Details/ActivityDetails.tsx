import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"

type Props = {
  dataActivities : Activity
  cancelSelectActivity: () => void;
  openForm: (id: string) => void;
}
export default function ActivityDetails({dataActivities,cancelSelectActivity, openForm}:Props) {
  return (
    <Card sx={{borderRadius:3}}>
        <CardMedia
        component="img"
        src={`/images/categoryImages/${dataActivities.category}.jpg`}
        />
        <CardContent>
          <Typography variant="h5">{dataActivities.title}</Typography>
          <Typography variant="subtitle1" fontWeight='light'>{dataActivities.date}</Typography>
          <Typography variant="body1">{dataActivities.description}</Typography>
        </CardContent>
        <CardActions>
          <Button onClick={() => openForm(dataActivities.id)} color="primary">Edit</Button>
          <Button onClick={cancelSelectActivity} color="inherit">Cancel</Button>
        </CardActions>
    </Card>

  )
}
