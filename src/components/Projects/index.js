import React from "react"
import "./style.css"
import workDay from "./workDay.png"
import quiz from "./quiz.png"
import budreport from "./BudReport.png"
import team from "./team.jpg"
import travelgen from "./travelGen.PNG"
import weatherDash from "./weatherDash.PNG"
const Projects=()=>{
    return(
      <div>
          <h2>Projects</h2>
          <div>
              <h4>workDay</h4>
                <img src={workDay} alt="workDay"/>
                <p>github: https://github.com/glewis67/work-day-scheduler</p>
          </div>
          <div>
              <h4>Quiz-app</h4>
                <img src={quiz} alt="Quiz"/>
                <p>github: https://github.com/glewis67/codequiz2</p>
          </div>
          <div>
              <h4>BudReport</h4>
                <img src={budreport} alt="budreport"/>
                <p>github: https://github.com/glewis67/-PWA-Challenge-Budget</p>
          </div>
          <div>
              <h4>Team</h4>
                <img src={team} alt="team"/>
                <p>github: https://github.com/glewis67/team-profile-generater</p>
          </div>
          <div>
              <h4>TravelGen</h4>
                <img src={travelgen} alt="travelgen"/>
                <p>github: https://github.com/glewis67/Group-Project1</p>
          </div>
          <div>
              <h4>weatherDash</h4>
                <img src={weatherDash} alt="weatherDash"/>
                <p>github: https://github.com/glewis67/weather</p>
          </div>
          
      </div>  
    )
}
export default Projects