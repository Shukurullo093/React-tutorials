import './movie-list.css'
import MovieListItem from '../movie-list-item/movie-list-item'

const MovieList = ({data}) => {
  return (
    <ul className='movie-list'>
      {
        data.map(item => (
          // <MovieListItem name={item.name} viewers={item.viewers} favourite={item.favourite} />
          <MovieListItem {...item} key={item.name} />
        ))
      }

        {/* <MovieListItem name='Terminator 1' viewers='111' />
        <MovieListItem name='Terminator 2' viewers='111' />
        <MovieListItem name='Terminator 3' viewers='111' /> */}
    </ul>
  )
}

export default MovieList