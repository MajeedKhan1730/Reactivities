import { useEffect, useState } from "react";

function App() {
  const title = "Wolcome to Reactivities";
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    fetch('https://localhost:7028/api/activities')
      .then(response => response.json())
      .then(data => setActivities(data))
  }, [])
  return (
    <div>
          <h1 className="app" style={{color:'red'}}>{title}</h1>
    <ul>
      {activities.map((activity)=>(
        <li key={activity.id}>{activity.title}</li>
      ))}
    </ul>
    </div>

  )
}

export default App
