import './index.css'

const TabItem = props => {
  const {item, activeStatus, changeTab} = props
  const {displayText, tabId} = item
  const style = activeStatus ? 'selected-tab' : 'tab-txt'
  const onTab = () => {
    changeTab(tabId)
  }
  return (
    <li>
      <button onClick={onTab} className="tab-btn">
        <p className={style}>{displayText}</p>
      </button>
    </li>
  )
}

export default TabItem
