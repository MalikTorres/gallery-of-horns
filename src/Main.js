import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data/data.json';
import './Main.css'

class Main extends React.Component {
  render() {
    return (
    <main>
      {data.map((HornedBeastObj,index) => {
        return <HornedBeast title={HornedBeastObj.title} imageurl={HornedBeastObj.image_url} key={index}/>
      })}
    </main>
    )
  }
} 

export default Main; 