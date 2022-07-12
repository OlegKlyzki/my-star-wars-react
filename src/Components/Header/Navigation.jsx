import React from 'react'
import { buttons_nav } from '../../Utils/buttons_text'

const Navigation = () => {
	return (
		<nav className="fixed-top mt-2 ms-4">
            <ul className="nav">
                {buttons_nav.map((item, index) => <button className="nav-item btn btn-danger mx-1" key={index}>{item}</button>)}
            </ul>
        </nav>
	)
}

export default Navigation