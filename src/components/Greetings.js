import React from "react"

function Greetings() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    const styles = {
      fontSize: 30
    }
    
    if (hours < 12) {
      timeOfDay = "morning"
      styles.color = "lightblue"
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "afternoon"
      styles.color = "green"
    } else if (hours >= 17 && hours < 23) {
      timeOfDay = "evening"
      styles.color = "orange"
    } else {
      timeOfDay = "night"
      styles.color = "darkblue"
    }

    return (
        <h1 style={styles}>Good {timeOfDay}!</h1>
    )
  }

  export default Greetings