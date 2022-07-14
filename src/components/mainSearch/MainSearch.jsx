import SearchIcon from '@material-ui/icons/Search'
import "./mainsearch.scss"

const MainSearch = () => {
  return (
    <div className="main-search">
      <div className="container">
      <div className="wrapper">
        <input type="text" className="search-input" placeholder='მოძებნეთ ფილმები, პირები და მწარმოებელი სტუდიები' />
        <i></i>
        <button className="search-btn"><SearchIcon className="search-icon" /></button>
      </div>
      </div>
    </div>
  )
}

export default MainSearch
