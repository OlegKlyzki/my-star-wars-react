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
			response: []
		}
	}

	handelClick = () => {
		this.setState({ modals_view: !this.state.modals_view })
	}



	render() {
		return (
			<main className="clearfix">
				<Hero view={this.handelClick} />
				<DreamTeam view={this.handelClick} data={this.state.response} />
				<FarGalaxy />
				{this.state.modals_view && <Modals view={this.handelClick} />}
			</main>
		)
	}
}



export default Main