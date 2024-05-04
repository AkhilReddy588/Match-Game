import './index.css'

const NavBar = props => {
  const {time, score} = props
  return (
    <div className="nav">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        className="logo"
        alt="website logo"
      />
      <div className="nav-items">
        <div>
          <p className="time-txt">Score: {score}</p>
        </div>
        <div className="timer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            className="timer-logo"
            alt="timer"
          />
          <p className="time-txt">{time} sec</p>
        </div>
      </div>
    </div> 
  )
}

export default NavBar
