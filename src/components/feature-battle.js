import React from 'react'
import image from '../images/screen-002.png'

const battle = () => {
	return (
		<section id="battle-section" class="feature">
			<figure class="screenshot">
				<img src={image} alt="A Fierce Battle" />
			</figure>
			<p>You'll battle fearsome abominations from the sea, pirate captains, and sometimes useless dweebs who think they can fight you for some reason. You'll find several weapons to defend yourself, and by searching for special materials, you can get blacksmiths to upgrade your weapons until you're atomizing monsters who once put up fierce fights.</p>
		</section>
	)
}

export default battle;