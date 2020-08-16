import React from 'react';
import classes from './SearchBar.module.css';

const SearchBar = ({ searchNameHandler }) => {
	return (
		<form>
			<input
				type="text"
				placeholder="Search"
				className={classes.SearchBar}
				onChange={(e) => searchNameHandler(e)}
			/>

			<button type="submit" className={classes.SearchButton}>
				<i className="fa fa-search" />
			</button>
		</form>
	);
};

export default SearchBar;
