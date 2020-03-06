import React, { Component } from 'react';
import './App.scss';
import Navbar from './components/navbar/navbar';
import Header from './components/header/header'
import Filter from './components/filter/filter';
import Footer from './components/footer/footer';
import Map from './components/map/map';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Navbar />
				<Header/>
				<Filter />
				<Map/>
				<Footer />
			</div>
		);
	}
}

export default App;
