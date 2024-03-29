import './movie-list-item.css'

const MovieListItem = ({name, viewers, favourite}) => {
  return (
    <li className={`list-group-item d-flex justify-content-between ${favourite && 'increase'}`}>
        <span className='list-group-item-label'>{name}</span>
        <input type='number' className='list-group-item-input' defaultValue={viewers} />
        <div className='d-flex justify-content-center align-items-center'>
            <button type='button' className='btn-cookie btn-sm'>
                <i className='fas fa-cookie'></i>
            </button>
            <button type='button' className='btn-trash btn-sm'>
                <i className='fas fa-trash'></i>
            </button>
            <button type='button' className='btn-star btn-sm'>
                <i className='fas fa-star'></i>
            </button>
        </div>
    </li>
  )
}

export default MovieListItem