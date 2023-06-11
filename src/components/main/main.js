import React from "react";
import './main.css';
import Cards from "../cards/cards";
import {objJson} from "../source/api";


export default class Main extends React.Component{
    constructor(props){
        super(props)
        this.parent = this.props.parent
        this.parent.main = this
        this.state = {
            changerView : 'json',
      
        }
    }


    render(){
        return <main>
            {/* <marquee direction ='right'> */}
            <h1 className="main_title">Одежда Основная</h1>
            {/* </marquee> */}
            <div className="main_container">
               
                {this.preventCards = objJson[this.state.changerView].map((item,index) => <Cards data = {item} key={index}/>)}
            </div>
        </main>
    }
}

