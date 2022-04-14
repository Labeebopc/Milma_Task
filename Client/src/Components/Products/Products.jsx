import React from 'react'
import './Products.css'

function Products(props) {
    return (
        <div className='products'>
            <div className='title'><span>{props.title}</span></div>
            <div className="cards">
                <div className="card">
                    <div className="card-body">
                        <img className='card-img' src="\images\banner-background.jpg" alt="" />
                    </div>
                    <div className="card-footer bg-transparent">
                        <div className="left">
                            <h6 className='itemname'>{props.itemname}</h6>
                            <div className='volume'>{props.volume}</div>

                        </div>
                        <div className="right">
                            <span className='price mt-2'>{props.price}</span>

                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-body">
                        <img className='card-img' src="\images\banner-background.jpg" alt="" />
                    </div>
                    <div className="card-footer bg-transparent">
                        <div className="left">
                            <h6 className='itemname'>{props.itemname}</h6>
                            <div className='volume'>{props.volume}</div>

                        </div>
                        <div className="right">
                            <span className='price mt-2'>{props.price}</span>

                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-body">
                        <img className='card-img' src="\images\banner-background.jpg" alt="" />
                    </div>
                    <div className="card-footer bg-transparent">
                        <div className="left">
                            <h6 className='itemname'>{props.itemname}</h6>
                            <div className='volume'>{props.volume}</div>

                        </div>
                        <div className="right">
                            <span className='price mt-2'>{props.price}</span>

                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Products
