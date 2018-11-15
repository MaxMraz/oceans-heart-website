import React from 'react'

const FeatureSelector = ({changeView}) => {
	return (
		<nav>
			<ul id="feature-selector-list">
				<li className="clickable" onClick={() => changeView('explore')}>Explore</li>
				<li className="clickable" onClick={() => changeView('battle')}>Battle</li>
				<li className="clickable" onClick={() => changeView('discover')}>Discover</li>
			</ul>
		</nav>
	)
}

export default FeatureSelector;