import React from 'react'
import image from '../images/screen-001.png'

const explore = () => {
	return (
		<section id="explore-section" className="feature">
			<figure className="screenshot">
				<img src={image} alt="Exploring the Forests of Oakhaven" />
			</figure>
			<p>You'll explore a detailed and beautiful archipelago, brimming with secrets hidden in misty forests, rocky coves, isolated mountain peaks, saltwater marshes, and many other locations. Walk through the ruins of a flooded kingdom, or roam bustling city streets. Every area is filled with unique sidequests, mysteries, and dangers.</p>
		</section>
	)
}

export default explore;