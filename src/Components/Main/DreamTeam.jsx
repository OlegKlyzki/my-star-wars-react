import React from 'react'
import { friends } from '../../Utils/Constants'
import { buttons_dt } from '../../Utils/buttons_text'

const DreamTeam = ({view}) => {
	return (
		<section className="float-end w-50 mx-1 mb-2 row border d-flex justify-content-between images_block_main">
			<h2 className="col-12 text-center">Dream Team</h2>
			{friends.map((item, index) => {
				return (
					<div key={index} className="images_block d-flex flex-column justify-content-center align-items-center row">
						<img className="col-4 p-1 w-100" key={index} src={item} alt='friends'></img>
						<button onClick={view} className="nav-item btn btn-danger btn-dt m-2 col-8">{buttons_dt[index]}</button>
					</div>
				)
			})}
		</section>
	)
}

export default DreamTeam