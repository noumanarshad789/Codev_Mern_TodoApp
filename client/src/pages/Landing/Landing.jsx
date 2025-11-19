import React from 'react'
import { Link } from 'react-router-dom'
import Hero from "../../assets/todo.jpg";
import "./Landing.css"



const Landing = () => {
    return (
        <div className='hero'>
            <div className="intro-text">
                <h1>
                    <span className="tagline1">Organize work and life</span>
                    <span className="tagline2"> finally.</span>
                </h1>
                <p>
                    type just anything into the taskfield and todolist <br />
                    on-of-its-kind neutral language recognition will instantly fill your todo-list
                </p>
                <Link to="/register" className='btn red'>Register Now!</Link>
                <Link to="/login" className='btn blue'>Login</Link>
            </div>
            <div className=''>
                <img src={Hero} width={"100%"} height={515} alt="" />
            </div>

        </div>
    )
}

export default Landing
