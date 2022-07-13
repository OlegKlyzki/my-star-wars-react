import React from 'react'
import Hero from './Hero'
import DreamTeam from './DreamTeam'
import FarGalaxy from './FarGalaxy'
import Modals from '../Modals/Modals'
import { base_url_people } from '../../Utils/Url'
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

	getData = async () => {
		const response = await fetch(`${base_url_people}`)
		const data = await response.json()
		this.setState({ response: data.results })
		
	}

	render() {
		return (
			<main className="clearfix">
				<Hero view={this.handelClick} data={this.state.response}/>
				<DreamTeam view={this.handelClick} getData={this.getData} />
				<FarGalaxy />
				{this.state.modals_view && <Modals view={this.handelClick} data={this.state.response}/>}
			</main>
		)
	}
}



export default Main