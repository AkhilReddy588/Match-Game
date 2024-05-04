import {Component} from 'react'
import NavBar from '../NavBar'
import TabItem from '../TabItem'
import ThumbItem from '../ThumbItem'
import ScoreCard from '../ScoreCard'
import './index.css'

class MatchGame extends Component {
  state = {
    activeTab: 'FRUIT',
    time: 60,
    score: 0,
    isPlaying: true,
    randomIndex: 0,
  }

  changeTab = id => {
    this.setState({activeTab: id})
  }

  componentDidMount() {
    this.timerId = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  tick = () => {
    this.setState(
      prevState => ({
        time: prevState.time - 1,
      }),
      () => {
        if (this.state.time === 0) {
          clearInterval(this.timerId)
          this.setState({isPlaying: false})
        }
      },
    )
  }

  check = id => {
    const {imagesList} = this.props
    const {randomIndex} = this.state
    const imgObjId = imagesList[randomIndex].id
    if (id === imgObjId) {
      this.setState(prevState => ({
        randomIndex: Math.floor(Math.random() * this.props.imagesList.length),
        score: prevState.score + 1,
      }))
    } else {
      clearInterval(this.timerId)
      this.setState({isPlaying: false})
    }
  }

  playAgain = () => {
    this.setState(prevState => ({
      time: 60,
      isPlaying: true,
      score: 0,
    }))
    clearInterval(this.timerId)
    this.timerId = setInterval(this.tick, 1000)
  }

  render() {
    const {imagesList, tabsList} = this.props
    const {activeTab, time, randomIndex, score, isPlaying} = this.state
    const filteredThumbnails = imagesList.filter(
      eachItem => eachItem.category === activeTab,
    )
    return (
      <div className="bgm">
        <NavBar time={time} score={score} />
        {isPlaying && (
          <div className="game-card">
            <img
              src={imagesList[randomIndex].imageUrl}
              alt="match"
              className="main-img"
            />
            <ul className="tabs-section">
              {tabsList.map(eachItem => (
                <TabItem
                  item={eachItem}
                  changeTab={this.changeTab}
                  activeStatus={activeTab === eachItem.tabId}
                  key={eachItem.tabId}
                />
              ))}
            </ul>
            <ul className="thumbnails-section">
              {filteredThumbnails.map(eachItem => (
                <ThumbItem
                  item={eachItem}
                  check={this.check}
                  key={eachItem.id}
                />
              ))}
            </ul>
          </div>
        )}
        {!isPlaying && <ScoreCard playAgain={this.playAgain} score={score} />}

      </div>
    )
  }
}

export default MatchGame
