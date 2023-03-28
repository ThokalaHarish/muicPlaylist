import {AiOutlineDelete} from 'react-icons/ai'

import './index.css'

const MusicItem = props => {
  const {MusicItemDetails, onClickDeleteTrack} = props
  const {id, imageUrl, name, genre, duration} = MusicItemDetails

  const onDeleteButton = () => {
    onClickDeleteTrack(id)
  }

  return (
    <li className="music-item-list">
      <div className="music-info-container">
        <img src={imageUrl} alt="track" className="music-image" />
        <div className="name-genre-container">
          <p className="track-name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="duration-delete-container">
        <p className="duration">{duration}</p>
        <button
          className="delete-button"
          type="button"
          data-testid="delete"
          onClick={onDeleteButton}
        >
          <AiOutlineDelete size={25}/>
        </button>
      </div>
    </li>
  )
}

export default MusicItem
