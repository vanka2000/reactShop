import React from "react";
import './cards.css';


export default class Cards extends React.Component{
    constructor(props){
        super(props)
        this.data = this.props.data
        this.visible = true
    }
    render(){
        return this.visible && <div className="main_card">
            <div className="main_card_img" style={{backgroundImage: `url(${this.data.img})`}}></div>
            <p className="main_card_price">{this.data.price}</p>
            <p className="main_card_title">{this.data.name}</p>
        </div>
    }
}