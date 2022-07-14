import "./searchfilterbtn.scss"

const SearchFilterBtn = (props) => {
  return (
    <>
     <button className="filter-btn" type="button" onClick={props.onClick}>გაფილტვრა</button> 
    </>
  )
}

export default SearchFilterBtn
