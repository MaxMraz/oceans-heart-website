import React, { Component } from 'react';
import heroImage from './images/hero-image-2-title.jpg'
import Intro from './components/Intro.js'
import FeatureSelector from './components/FeatureSelector'
import Explore from './components/feature-explore'
import Battle from './components/feature-battle'
import Discover from './components/feature-discover'
import ScreenshotGrid from './components/ScreenshotGrid'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css';

class App extends Component {
	constructor(){
		super()
		this.state = {
			view: 'explore'
		}
	}

	changeView = (view) => {
		this.setState({view})
	}

	render() {

		const view = this.state.view
		let feature
		if (view === 'explore'){
			feature = <Explore />
		} else if (view === 'battle'){
			feature = <Battle />
		} else if (view === 'discover'){
			feature = <Discover />
		}

		return (
			<div className="App">
				<img src={heroImage} alt="Ocean's Heart" id="hero-image"></img>
				<Intro />
				<FeatureSelector changeView = {this.changeView} />
				{feature}
				<div className="video-responsive">
					<iframe width="560" height="315" src="https://www.youtube.com/embed/2RySTLSKjUs" title="Ocean's Heart Trailer" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
				</div>
				<ScreenshotGrid />
				<Contact />
				<Footer />
			</div>
			)
	}
}

export default App;
