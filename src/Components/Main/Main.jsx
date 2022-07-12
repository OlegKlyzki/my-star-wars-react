import React from 'react'
import Hero from './Hero'
import DreamTeam from './DreamTeam'
import FarGalaxy from './FarGalaxy'
import Modals from '../Modals/Modals'

class Main extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			modals_view: false,
		}
	}

	handelClick = () => {
		this.setState({modals_view: !this.modals_view})
	}

	render() {
		return (
			<main className="clearfix">
				<Hero />
				<DreamTeam />
				<FarGalaxy />
				<Modals />
			</main>
		)
	}
}

export default Main