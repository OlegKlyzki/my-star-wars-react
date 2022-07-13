import React from 'react'

const DreamTeamContent = ({item, index, view, getData}) => {
	return (
		<div onClick={getData} key={index} className="images_block d-flex flex-column justify-content-center align-items-center row">
			<img className="col-4 p-1 w-100" key={index} src={item.photo} alt='friends'></img>
			<button key={item.nameButoon} onClick={view} className="nav-item btn btn-danger btn-dt m-2 col-8">{item.nameButoon}</button>
		</div>
	)
}

export default DreamTeamContent