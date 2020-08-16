import React from 'react';
import classes from './Sidebar.module.css';
import logo from '../../assets/images/logo.svg';
import SearchBar from './SearchBar/SearchBar';
import Group from './Group/Group';
import Footer from './Footer/Footer';
const Sidebar = (props) => {
	const items1 = [
		{
			item: 'Dashboards',
			icon: 'th'
		},
		{
			item: 'People',
			icon: 'users'
		},
		{
			item: 'Projects',
			icon: 'address-book-o'
		},
		{
			item: 'Ecommerce',
			icon: 'shopping-cart'
		}
	];

	const items2 = [
		{
			item: 'Documents',
			icon: 'file-text'
		},
		{
			item: 'Authentication',
			icon: 'lock'
		}
	];
	const items3 = [
		{
			item: 'Todo-Lists',
			icon: 'list-alt'
		},
		{
			item: 'Components',
			icon: 'square-o'
		},
		{
			item: 'Settings',
			icon: 'cog'
		}
	];

	let attachedClasses = [ classes.Sidebar ];

	if (props.showSideBar) {
		attachedClasses = [ classes.Sidebar, classes.Open ];
	} else {
		attachedClasses = [ classes.Sidebar, classes.Close ];
	}

	return (
		<div className={attachedClasses.join(' ')}>
			<img src={logo} alt="Logo" className={classes.Logo} />
			<SearchBar searchNameHandler={props.searchNameHandler} />
			<Group items={items1} />
			<Group items={items2} />
			<Group items={items3} noborder />
			<Footer />
		</div>
	);
};

export default Sidebar;
