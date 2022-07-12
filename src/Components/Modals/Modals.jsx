import React from 'react'

const Modals = ({view}) => {
	return (
		<div onClick={view} className="modal-body modals-container modal-fullscreen fixed-top">
			<div className="container-fluid">
				<div  className="row modals_content col-xxl-6 col-6 h-auto">
					<ul className="p-5 m-0 d-flex flex-column justify-content-center align-items-center">
						<li className='modals_list_item pb-4'><span className="modals_text">Name:</span></li>
						<li className='modals_list_item pb-4'><span className="modals_text">Weight:</span></li>
						<li className='modals_list_item pb-4'><span className="modals_text">Hair color:</span></li>
						<li className='modals_list_item pb-4'><span className="modals_text">Eye color:</span></li>
						<li className='modals_list_item pb-4'><span className="modals_text">Birth year:</span></li>
						<li className='modals_list_item pb-4'><span className="modals_text">Gender:</span></li>
						<li className='modals_list_item pb-4'><span className="modals_text">Homeworld:</span></li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Modals