import React from 'react';
import './header.css'
import Burger from './burger/burger';

class Header extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            searchState : 'no-visible',
            openBurger : 'no-visible',
            
        }
        this.parent = this.props.parent
        this.parent.header = this
    }

    mouseOutHeader(){                                     //- метод , скрывает наш инпут в хедере
        this.setState({searchState : 'no-visible'})         
    }

    mouseOverHeader(){                                     // - метод, который показывает инпут,когда мы уводим мышь
        this.setState({searchState : ''})     
    }

    showBurgerHeadname(){
        this.setState({openBurger : this.state.openBurger === '' ? 'no-visible' : ''})
    }


    render(){
        return <header 
        onMouseOut={this.mouseOutHeader.bind(this)}           // - действие,при котором вызываем метод mouseOutHeader
        onMouseOver={this.mouseOverHeader.bind(this)}           // - действие,при котором вызываем метод mouseOverHeader
        className='header' >
            <div onClick={this.showBurgerHeadname.bind(this)} className='header-conteiner'>
                <span className='line'></span>
                <span className='line'></span>
                <span className='line'></span>

            </div>
            <Burger parent={this} className={this.state.openBurger}/>
            <a className='logo' href='#'>МОЁ</a>
            <div className='header-conteiner-last'>
                <input className={`input_search ${this.state.searchState}`}/>
                <button className='btn-search'>Найти</button>
            </div>

        </header>
    }
}


 export default Header