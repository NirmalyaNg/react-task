import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
import NavBar from './components/NavBar/NavBar';
import Backdrop from './UI/Backdrop/Backdrop';

class App extends React.Component {
	state = {
		persons: [
			{
				name: 'Dhrumil Bhojani',
				superPowers: [ 'UI/UX Designing', 'FrontEnd Dev', 'AWS' ],
				personalAttributes: [ 'Team Player', 'Communication', 'Honesty', 'Loyalty' ]
			},
			{
				name: 'Ravi Bhagyoday',
				superPowers: [ 'Backend Dev', 'AI', 'Networking', 'CyberSecuirity' ],
				personalAttributes: [ 'Work Ethic', 'Persistance', 'Loyalty' ]
			},
			{
				name: 'Chintan Kamani',
				superPowers: [ 'UI/UX Designing', 'FrontEnd Dev', 'AI' ],
				personalAttributes: [ 'Flexibility', 'Communication', 'Time', 'Honesty' ]
			},
			{
				name: 'Hemal Buha',
				superPowers: [ 'Backend Dev', 'AI', 'Networking', 'CyberSecuirity' ],
				personalAttributes: [ 'Team Player', 'Work Ethic', 'Flexibility', 'Loyalty' ]
			},
			{
				name: 'Harsh Saha',
				superPowers: [ 'UI/UX Designing', 'AI' ],
				personalAttributes: [ 'Time', 'Communication', 'Honesty', 'Persistance' ]
			},
			{
				name: 'Ishita Kamani',
				superPowers: [ 'AI', 'Networking', 'CyberSecuirity' ],
				personalAttributes: [ 'Team Player', 'Communication', 'Honesty', 'Loyalty' ]
			},
			{
				name: 'Urvi Bhagyaday',
				superPowers: [ 'UI/UX Designing', 'FrontEnd Dev', 'ML' ],
				personalAttributes: [ 'Team Player', 'Flexibility', 'Honesty', 'Loyalty' ]
			},
			{
				name: 'Shawn Chong',
				superPowers: [ 'AI', 'Networking', 'CyberSecuirity', 'AWS' ],
				personalAttributes: [ 'Persistance', 'Communication', 'Honesty', 'Flexibility' ]
			}
		],
		searchName: '',
		selectedSuperPowers: [],
		selectedPersonalAttrs: [],
		showSideBar: false,
		showBackdrop: false,
		showNavbarLogo: true
	};

	toggleSideBar = () => {
		this.setState({
			showSideBar: !this.state.showSideBar
		});

		this.setState({
			showBackdrop: true,
			showNavbarLogo: false
		});
	};

	toggleBackDrop = () => {
		this.setState({
			showBackdrop: false,
			showSideBar: !this.state.showSideBar,
			showNavbarLogo: true
		});
	};

	searchNameHandler = (e) => {
		e.preventDefault();
		this.setState({
			searchName: e.target.value.trim()
		});
	};

	handleSuperPower = (e) => {
		if (e.target.checked) {
			let superPowers = this.state.selectedSuperPowers;
			superPowers.push(e.target.value);
			this.setState({
				selectedSuperPowers: superPowers
			});
		} else {
			let superPower = e.target.value;
			let superPowers = this.state.selectedSuperPowers;
			let index = superPowers.findIndex((superpower) => {
				return superpower === superPower;
			});
			superPowers.splice(index, 1);
			this.setState({
				selectedSuperPowers: superPowers
			});
		}
	};

	handlePersonalAttributes = (e) => {
		if (e.target.checked) {
			// For checkbox checked
			let personalAttrs = this.state.selectedPersonalAttrs;
			personalAttrs.push(e.target.value);
			this.setState({
				selectedPersonalAttrs: personalAttrs
			});
			console.log(personalAttrs);
		} else {
			//For checkbox unchecked
			let pa = e.target.value;
			let personalAttributes = this.state.selectedPersonalAttrs;
			let index = personalAttributes.findIndex((prsnlattr) => prsnlattr === pa);
			personalAttributes.splice(index, 1);
			this.setState({
				selectedPersonalAttrs: personalAttributes
			});
		}
	};

	render () {
		return (
			<div className="App">
				<Backdrop show={this.state.showBackdrop} toggleBackDrop={this.toggleBackDrop} />
				<NavBar toggleSideBar={this.toggleSideBar} showNavbarLogo={this.state.showNavbarLogo} />
				<Sidebar
					persons={this.state.persons}
					searchNameHandler={this.searchNameHandler}
					showSideBar={this.state.showSideBar}
				/>
				<Main
					persons={this.state.persons}
					searchName={this.state.searchName}
					handleSuperPower={this.handleSuperPower}
					handlePersonalAttributes={this.handlePersonalAttributes}
					selectedSuperPowers={this.state.selectedSuperPowers}
					selectedPersonalAttrs={this.state.selectedPersonalAttrs}
				/>
			</div>
		);
	}
}

export default App;
