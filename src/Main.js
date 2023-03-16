import React from 'react';
import HornedBeast from './HornedBeast';
import SelectedBeast from './SelectedBeast';
import './Main.css'

class Main extends React.Component {
  render() {
    return (
    <main>
      {this.props.data.map((HornedBeastObj,index) => {
        return (
        <div>
        <HornedBeast
        // PROP NAME 
        title={HornedBeastObj.title} 
        imageurl={HornedBeastObj.image_url} 
        description={HornedBeastObj.description}
        key={index}
        handleOpenModal={this.props.handleOpenModal}
        />
        </div>
        )
      
        
      })}
    </main>
    )
  }
} 

export default Main; 