import React from 'react'
import main from '../../Images/main.jpg'

const Hero = () => {
	return (
		<section className="float-start me-3 w-25 row d-flex justify-content-center">
            <img className="w-100" src={main} alt="Luke Skywalker"/>
			<button className="nav-item btn btn-danger mt-4 col-8">About Luke Skywalker</button>
        </section>
	)
}

export default Hero