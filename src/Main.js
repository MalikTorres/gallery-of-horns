import React from 'react';
import HornedBeast from './HornedBeast';


class Main extends React.Component {
  render() {
    return (
    <>
    <HornedBeast title="Unicorn" description="This is a horned animal" src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" alt="picture of a unicorn"/>
    <HornedBeast title="Rhino" description="This is a horned animal" src="https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80" alt="picture of a unicorn"/>
    </>
    )
  }
} 

export default Main; 