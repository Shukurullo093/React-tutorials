import AppInfo from "../app-info/app-info"
import SearchPanel from "../search-panel/search-panel"
import AppFilter from "../app-filter/app-filter"
import MovieList from "../movie-list/movie-list"
import MovieAddForm from "../movie-add-form/movie-add-form"

import "./app.css"

const App = () => {
    const data = [
        {name: 'Terminator 1', viewers: 123, favourite: false},
        {name: 'Terminator 2', viewers: 123, favourite: true},
        {name: 'Terminator 3', viewers: 123, favourite: false}
    ]

    return <div className="app font-monospace">
        <div className="content">
            <AppInfo />
            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>
            <MovieList data={data} />
            <MovieAddForm />
        </div>
    </div>
}

export default App