import './index.css'

const ThumbItem = props => {
  const {item, check} = props
  const {thumbnailUrl, id} = item
  const onSelect = () => {
    check(id)
  }
  return (
    <li>
      <button onClick={onSelect} type="button" className="thumb-btn">
        <img src={thumbnailUrl} className="thumbnail" alt="thumbnail" />
      </button>
    </li>
  )
}

export default ThumbItem
