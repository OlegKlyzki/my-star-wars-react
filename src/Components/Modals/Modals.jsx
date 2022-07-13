import React from 'react'
import { modals_list_items } from '../../Utils/Constants'
import ModalsContent from './ModalsContent'

const Modals = ({view, data}) => {
	return (
		<div onClick={view} className="modal-body modals-container modal-fullscreen fixed-top">
			<div className="container-fluid">
				<div  className="row modals_content col-xxl-6 col-6 h-auto">
					<ul className="p-5 m-0 d-flex flex-column justify-content-center align-items-center">
						{modals_list_items.map(item => <ModalsContent key={item} itemTitle={item} data={data}/>)}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Modals