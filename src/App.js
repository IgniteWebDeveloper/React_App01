import React, { Component } from 'react'
import Card from './Components/Card/Card'
import Form from './Components/Form/Form'
import './App.css'

class App extends Component {
  state={
    cards:[
      {image: 'https://images.unsplash.com/photo-1519895609939-d2a6491c1196?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
       title: 'Helena Simpson', desc: 'from Califronia' 
      },
      {image: 'https://images.unsplash.com/photo-1519895609939-d2a6491c1196?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
       title: 'Helena Simpson', desc: 'from Califronia' 
      }
    ],
    
  }

OnAddCard = (newCard) =>{
  let CopyCards = [...this.state.cards];
  CopyCards.push(newCard);
  this.setState({cards: CopyCards});
}

onDeleteCard = (index) => {
  let CopyCards = [...this.state.cards];
  CopyCards.splice(index, 1);
  this.setState({cards: CopyCards});
}

  render() {

    // let cardList = this.state.cards.map( (c, index) => {
    //     return <Card deleteCard={this.onDeleteCard.bind(this, index)} key={index} card1={c} />
    //   })

    let cardList = this.state.cards.map( (c, index) => {
      return <Card deleteCard={() => this.onDeleteCard(index)} key={index} card1={c} />
    })

      return (
      <section className='App'>
        
        <Form addCard={this.OnAddCard} />  


        <div className="card-container">
            {cardList}
        </div>
          
      </section>
    )
  }
}

export default App;