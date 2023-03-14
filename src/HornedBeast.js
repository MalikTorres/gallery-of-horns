import React from 'react';
import './HornedBeast.css';
import Button from 'react-bootstrap/Button'; 
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     favorites: 0
      }
    }
    // Method to update state for each horned animal to track favorites
    handleFavorites = () => {
      this.setState({
        favorites: this.state.favorites + 1

      })
    }

  render() {
    return (
      <Card style={{ width: '18rem' }}>
      <article>
        <Card.Img src={this.props.imageurl} alt={this.props.title} />
        <h3>{this.props.title}</h3>
        <Button onClick={this.handleFavorites} variant="info">click to favorite ❤️ </Button>
        <p>{this.state.favorites} Favorites</p>
        <p>{this.props.description}</p>
      </article>
      </Card>
    )
  }
}

export default HornedBeast;