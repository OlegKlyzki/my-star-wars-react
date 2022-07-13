import React from 'react'
import { friendsButtons } from '../../Utils/Constants'
const ModalsContent = ({itemTitle, data}) => {
	
	const func = () => {
		
		
		
		return data.map(item => item.name)
		
	}
	
	func()

	return (
		
		<li className='modals_list_item pb-4'><span className="modals_text">{}</span></li>
	)
}

export default ModalsContent

