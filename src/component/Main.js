import React, { Component } from 'react';
export default class Main extends Component {
    constructor(props){
        super();
        this.state = {
            mass : []
        }
    }

    componentDidMount() {
        fetch('https://dog.ceo/api/breed/hound/images/random/15')
        .then(response => response.json())
        .then(data => {
          this.setState({mass: data.message })
          //console.log(this.state.mass);
          
        })
        .catch(error => console.error(error))
      }

  render() {
    return (
      <div className="main">
        <div className="container">
            <h1>World’s most <span className="main__span">amazing</span> test tiles</h1>
        <div className="items">
        {this.state.mass.map((i, index) => {
            return (
            <div className="item" key={index}>
                <div className="item__img">
                     <img src={i} alt="img" /> 
                </div>
                <div className="item__text">
                    <p className="item__title">{}</p>
                    <p className="item__hashtag">{}</p>
                    <i className="fa fa-eye"></i><span className="item__viev">{}</span>
                    <i className="fa fa-heart" onClick={() => this.handleClick()}>{this.props.click}</i><span className="item__like">{}</span>
                </div>
            </div>

            )
        })}
        </div>
        </div>
      </div>
    );
  }
}
