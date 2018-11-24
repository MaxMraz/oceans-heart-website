import React from 'react'
import screenshot1 from '../images/oceans-heart-gif-001.gif'
import screenshot2 from '../images/oceans-heart-gif-002.gif'
import screenshot3 from '../images/oceans-heart-gif-003.gif'
import screenshot4 from '../images/oceans-heart-gif-004.gif'
import screenshot5 from '../images/oceans-heart-gif-005.gif'
import screenshot6 from '../images/oceans-heart-gif-006.gif'
import screenshot7 from '../images/oceans-heart-gif-007.gif'
import screenshot8 from '../images/oceans-heart-gif-008.gif'
import screenshot9 from '../images/oceans-heart-gif-009.gif'

const ScreenshotGrid = () => {
	return (
		<section className="screenshot-grid">
			<figure>
				<img src={screenshot1} alt="screenshot" className="grid-screenshot"></img>
			</figure>
			<figure>
				<img src={screenshot2} alt="screenshot" className="grid-screenshot"></img>
			</figure>
			<figure>
				<img src={screenshot3} alt="screenshot" className="grid-screenshot"></img>
			</figure>
			<figure>
				<img src={screenshot4} alt="screenshot" className="grid-screenshot"></img>
			</figure>
			<figure>
				<img src={screenshot5} alt="screenshot" className="grid-screenshot"></img>
			</figure>
			<figure>
				<img src={screenshot6} alt="screenshot" className="grid-screenshot"></img>
			</figure>
			<figure>
				<img src={screenshot7} alt="screenshot" className="grid-screenshot"></img>
			</figure>
			<figure>
				<img src={screenshot8} alt="screenshot" className="grid-screenshot"></img>
			</figure>
			<figure>
				<img src={screenshot9} alt="screenshot" className="grid-screenshot"></img>
			</figure>
		</section>
	)
}

export default ScreenshotGrid