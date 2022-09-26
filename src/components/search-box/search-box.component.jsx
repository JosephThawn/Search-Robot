import React from 'react'
import './search-box.styles.css'

const SearchBox = ({className, placeholder, onChangeHandler}) => {
  return (
      <input
        // className={`search-box ${className}`}
        className="search-box"
        type="search"
        placeHolder={placeholder}
        onChange={onChangeHandler}
      >


      </input>
  )
}

export default SearchBox