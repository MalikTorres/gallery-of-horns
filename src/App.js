// REBUILD AS A CLASS COMPONENT

// 1ST IMPORTS
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import data from './data/data.json'
import SelectedBeast from './SelectedBeast';
import Form from 'react-bootstrap/Form';
// DESTRUCTURING Library import {Form, ListGroup}  from 'react-bootrap'; 
// 2ND CREATE THE CLASS - will always have a render method 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // object properties of state
      showModal: false,
      selectedBeast: '',
      selectedBeastImg: '',
      selectedBeastDesc: '',
      filteredData: data
    }
  }
  // METHODS TO SET PROPS IN OBJECT PROPERTIES 
  handleCloseModal = () => {
    this.setState({
      showModal: false
    })
  }

  handleOpenModal = (title, src, description) => {
    this.setState({
      showModal: true,
      selectedBeast: title,//PROPS
      selectedBeastImg: src,//PROPS
      selectedBeastDesc: description//PROPS

    })
  }
  handleSelect = (event) => {
    let selected = event.target.value;
    console.log(selected);
    if (+selected === 1) {
      let newData = data.filter(beast => beast.horns === 1)
      this.setState({
        filteredData: newData
      })
    } else if (+selected === 2) {
      let newData = data.filter(beast => beast.horns === 2)
      this.setState({
        filteredData: newData
      })
    } else if (+selected === 3) {
      let newData = data.filter(beast => beast.horns === 3)
      this.setState({
        filteredData: newData
      })
    } else if (+selected === 100) {
      let newData = data.filter(beast => beast.horns === 100)
      this.setState({
        filteredData: newData
      })
    }
  //
    

}

  render() {
    console.log(this.state.filteredData);
    return (
      <>
        <Header />
        <Main handleOpenModal={this.handleOpenModal} data={this.state.filteredData} />
        <SelectedBeast title={this.state.selectedBeast} src={this.state.selectedBeastImg} desc={this.state.selectedBeastDesc} showModal={this.state.showModal} handleCloseModal={this.handleCloseModal} />
        <Form>
          <Form.Group>
            <Form.Select name="selected" onChange={this.handleSelect}>
          <option value="">Select an Option</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="100">100</option>
            </Form.Select>
          </Form.Group>
        </Form>
        <Footer />
      </>

    )
  }
}



// 3RD EXPORE THE CLASS FOR OTHER FILES TO IMPORT
export default App;

