import './movie-add-form.css';

const MovieAddForm = () => {
  return (
    <div className='movie-add-form'>
        <h3>Yangi kino qo'shish</h3>
        <form className='add-form d-flex'>
            <input type='text' className='form-control new-post-label' placeholder='Kino nomi...' />
            <input type='number' className='form-control new-post-label' placeholder='Necha marotaba kurilgan...' />
            <button type='submit' className='btn btn-outline-dark'>
                Qo'shish
            </button>
        </form>
    </div>
  )
}

export default MovieAddForm