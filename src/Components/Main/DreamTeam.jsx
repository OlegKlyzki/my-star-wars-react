import React from 'react'
import { friendsButtons } from '../../Utils/Constants'
import DreamTeamContent from './DreamTeamContent'

const DreamTeam = ({view, getData}) => {
	return (
		<section className="float-end w-50 mx-1 mb-2 row border d-flex justify-content-between images_block_main">
			<h2 className="col-12 text-center">Dream Team</h2>
			{friendsButtons.map((item, index) => <DreamTeamContent getData={getData} key={item.nameButoon} item={item} index={index} view={view}/>)}
		</section>
	)
}

export default DreamTeam