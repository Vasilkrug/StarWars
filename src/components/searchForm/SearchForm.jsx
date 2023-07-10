import React from 'react';
import './SearchForm.scss';

const SearchForm = ({inputValue,onChange,onClick}) => {
    return (
        <form className="search-form">
            <label>
                {inputValue.length ? <span onClick={() => onClick('')}>X</span> : null}
                <input value={inputValue} onChange={(e) => onChange(e)}
                       type="text"
                       placeholder={'Write a name'}/>
            </label>
        </form>
    );
};

export default SearchForm;