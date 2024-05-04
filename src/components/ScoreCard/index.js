import './index.css'

const ScoreCard = props => {
  const {score, playAgain} = props
  const restart = () => {
    playAgain()
  }
  return (
    <div className="score-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="trophy"
      />
      <p className="score-card-txt">Your Score</p>
      <p className="score-card-txt">{score}</p>
      <button className="play-again-btn" type="button" onClick={restart}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
          className="reset-icon"
        />
        <p className="">PLAY AGAIN</p>
      </button>
    </div>
  )
}

export default ScoreCard
