import React from "react";
import './burger.css';



export default class Burger extends React.Component{
    constructor(props){
        super(props)
        this.state = {                                    //- создали начальные состояния
            ulMenuMan : 'no-visible',
            ulMenuWoman : 'no-visible',
        }
        this.parent =this.props.parent
        this.parent.burger = this
    }

    showMenu(st){
        this.setState({ [st] : '' })
    }

    noShowMenu(st){
        this.setState({ [st] : 'no-visible' })
    }

    changeMenu (e){
        console.log(this.parent.parent.main.preventCards)
    }


    render(){
        return (
            <section className={`burger ${this.props.className}`}>
                <div className="burger_cont">
                    <div 
                    onMouseOver={this.showMenu.bind(this, 'ulMenuMan')} 
                    onMouseOut={this.noShowMenu.bind(this,  'ulMenuMan')} 
                    className="burger_headname">Мужчинам
                        <ul className={`ul ${this.state.ulMenuMan}`}> 
                            <li><a onClick={this.changeMenu.bind(this)} data-cloth = 'jsonManKurtki' href="#">Верхняя одежда</a></li>
                            <li><a onClick={this.changeMenu.bind(this)} data-cloth = 'jsonManShoes' href="#">Обувь</a></li>
                            <li><a onClick={this.changeMenu.bind(this)} data-cloth = 'jsonManSportWear' href="#">Спорт одежда</a></li>
                            <li><a onClick={this.changeMenu.bind(this)} data-cloth = 'jsonManHomeWear' href="#">Домашняя одежда</a></li>
                        </ul>
                    </div>
                </div>
                <div className="burger_cont">
                <div 
                onMouseOver={this.showMenu.bind(this, 'ulMenuWoman')}
                onMouseOut={this.noShowMenu.bind(this, 'ulMenuWoman')}
                className="burger_headname">Женщинам
                        <ul className={`ul ${this.state.ulMenuWoman}`}> 
                            <li><a href="#">Верхняя одежда</a></li>
                            <li><a href="#">Обувь</a></li>
                            <li><a href="#">Спорт одежда</a></li>
                            <li><a href="#">Куртки</a></li>
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}