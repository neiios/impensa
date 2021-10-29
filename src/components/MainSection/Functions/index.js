import React from 'react'
import "./styles.css"
// also add in what order. order:1 etc...
const contentBlock = (props) => {
    return (
        <div className="main_div" style={{ backgroundColor: props.backgroundColor, color: props.color}}>
            <div className="nested_div">
            <div className="text-div" style={{order:props.textOrder}}>
            <h3 className = "h3-contentBlock">{props.heading}</h3>
            <p className="p-contentBlock"><i class="fas fa-hand-holding-usd"></i>{props.firstBullet}</p>
            <p className="p-contentBlock"> <i class="fas fa-hand-holding-usd"></i>{props.secondBullet}</p>
            </div>
            <img className="img-laptop" style={{order:props.imgOrder}} src={props.image} alt="" />
            </div>
        </div>
    )
}

export default contentBlock
