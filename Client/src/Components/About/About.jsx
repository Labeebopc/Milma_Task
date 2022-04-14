import React from 'react'
import './About.css'

function About() {
    return (
        <div>
            {/* about-section */}
            <div className="about-section mt-5 mb-4">

                {/* left-side */}
                <div className="left">
                    <img className='about-img' src="\images\about-icecream.jpg" alt="" />
                </div>

                {/* right-side */}
                <div className="right">
                    <p className='mt-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam doloribus ducimus possimus fugiat atque, dolorem autem ad modi expedita earum delectus quos culpa eaque, distinctio labore provident. Enim, accusantium cupiditate.
                        Tenetur eaque quidem inventore reiciendis. Labore, ducimus. Eveniet quisquam eos laudantium ullam</p>
                </div>
            </div>





            <div className='product-section'>
                <h1 className='title'>Products</h1>
            </div>

        </div>
    )
}

export default About