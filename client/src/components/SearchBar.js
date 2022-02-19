import React, { useState } from 'react'
import "./SearchBar.css"
import PageviewIcon from '@mui/icons-material/Pageview';
import CloseIcon from '@mui/icons-material/Close';

function SearchBar({placeholder, data}) {

    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
          return value.movieReview.toLowerCase().includes(searchWord.toLowerCase());
        });
       
    if (searchWord === "") {
        setFilteredData([]);
      } else {
        setFilteredData(newFilter);
      }
    };


    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
      };

  return (
    <div className='search'>
        <div className='searchInputs'>
            <input type="text" placeholder = {placeholder} value = {wordEntered} onChange={handleFilter} />
            <div className='SerchIcon'> {filteredData.length === 0 ? (
                <PageviewIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )} </div>
        </div>
        {filteredData.length !== 0 && (
        <div className='dataResult'>
            {filteredData.slice(0,15).map((value)=>{
                return <div key={value.id}>{value.movieReview}</div>
            })}
        </div>
        )}
    </div>
  );
}


export default SearchBar