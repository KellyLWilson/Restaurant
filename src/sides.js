import React from 'react';
import './App.css';
const axios = require('axios').default;

class Sides extends React.Component {
    constructor(props) {
        super(props) 
        this.sideItems = this.sideItems.bind(this)
        this.fetchSides = this.fetchSides.bind(this)
        this.state = {
            sidesMenu: [],    
        }
    }  

    fetchSides() {
        for (let i= 0; i < 5; i++) {
        this.sideItems()
    }
    }
    componentDidMount() {    
        this.fetchSides(5)   
        if (window.localStorage.sidesMenu < 5) {
            let sides = JSON.parse(window.localStorage.sidesMenu)
            this.setState({
                sidesMenu: sides,
                

        
            })
        }
    }

    componentDidUpdate() {
        localStorage.setItem('sidesMenu', JSON.stringify(this.state.sidesMenu));

    }
    
    async sideItems() {
        let axiosResult = await axios.get("https://entree-f18.herokuapp.com/v1/menu")
        .then(function (response) {
    let arr = response.data.menu_items
    let item = arr[0].description
    return item
    })
    
    .catch(function (error) {
    
    })  
    .finally(function () {
    
    });
    
    this.setState({
        sidesMenu: [...this.state.sidesMenu, axiosResult]
        
    })

    Object.freeze(this.state.sidesMenu)
    

    }
    render() {
        return (
            
<ul>
    {
      this.state.sidesMenu.map((sidesMenu, index) => <p key={sidesMenu}>{sidesMenu}  -  $5.99 </p>)
    }
    
  </ul>

        )
    }
    }
export default Sides;

//<a><p>{this.state.sidesMenu}</p></a>