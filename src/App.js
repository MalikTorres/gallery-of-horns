// REBUILD AS A CLASS COMPONENT

// 1ST IMPORTS
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import data from './data/data.json'
import SelectedBeast from './SelectedBeast';
// 2ND CREATE THE CLASS - will always have a render method 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal:false,
      selectedBeast: '',
      selectedBeastImg: '',
      selectedBeastDesc:''
    }
  }
  handleCloseModal = () => {
    this.setState({
      showModal:false
    })
  }

  handleOpenModal = (title,src,description) => {
    this.setState({
      showModal:true,
      selectedBeast: title,
      selectedBeastImg:src,
      selectedBeastDesc: description,

    })


  }

  

  render(){
    console.log(this.state)
    return (
  <> 
    <Header/>
    <Main handleOpenModal={this.handleOpenModal} data={data}/>
    <SelectedBeast title = {this.state.selectedBeast} src ={this.state.selectedBeastImg} desc={this.state.selectedBeastDesc} showModal={this.state.showModal} handleCloseModal={this.handleCloseModal}/>
    <Footer />
  </>
    )
  }
}



// 3RD EXPORE THE CLASS FOR OTHER FILES TO IMPORT
export default App; 

