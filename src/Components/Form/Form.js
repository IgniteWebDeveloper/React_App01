import React, { Component } from 'react'
import './Form.css'

class Form extends Component {

    state={
        image:'',
        title:'',
        desc:''
    }

    OnChangeHandler = (event) =>{
          this.setState({[event.target.name]: event.target.value});
        }

        OnSubmitHandler = (event) =>{
            event.preventDefault();
            let {image, title, desc} = this.state;
            let newCard = {image, title, desc};
            this.props.addCard(newCard);
          }    
          
      

    render() {
        return (
            <form onSubmit={this.OnSubmitHandler} >
            <h3>Enter Your Details Here to Add your Card</h3>
        <input 
            onChange={this.OnChangeHandler}
            value={this.state.image}
            name="image"
            type="text" 
            placeholder="image url"  />
          <input 
            onChange={this.OnChangeHandler}
            value={this.state.title}
            name="title"
            type="text" 
            placeholder="title"  />

            <input 
            onChange={this.OnChangeHandler}
            value={this.state.desc}
            name="desc"
            type="text" 
            placeholder="desc"  />
            <button>Add Card</button>
      </form>
        )
    }
}

export default Form;