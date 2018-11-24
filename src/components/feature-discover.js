import React from 'react'
import image from '../images/screen-003.png'

const battle = () => {
	return (
		<section id="battle-section" class="feature">
			<figure class="screenshot">
				<img src={image} alt="discover" />
			</figure>
			<p>As you hunt for Tilia's father, you'll stumble across plots to overthrow cities, art heists, hidden vaults deep in mountains, ancient, crumbling fortresses, and everyday people trying to make it in the world. Choose to discover the forgotten tragedy of an ancient kingdom, shape the future of the current world, or keep your head down and focus on your own mission.</p>
		</section>
	)
}

export default battle;