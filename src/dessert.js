import React from 'react';
import './App.css';
const axios = require('axios').default;

class Dessert extends React.Component {
    constructor(props) {
        super(props) 
        this.dessertItems = this.dessertItems.bind(this)
        this.fetchDessert = this.fetchDessert.bind(this)
        this.state = {
            dessertMenu: [],
        }
    }  

    fetchDessert(numberOfItems) {
        for (let i= 0; i < 8; i++) {
        this.dessertItems()
    }
    }
    componentDidMount() {
        this.fetchDessert(8)   
        if (window.localStorage.sidesMenu < 8) {
            let dessert = JSON.parse(window.localStorage.dessertMenu)
            this.setState({
                dessertMenu: dessert,
            })
        }
    }



        
    componentDidUpdate() {
        localStorage.setItem('dessertMenu', JSON.stringify(this.state.dessertMenu));
    }

    async dessertItems() {
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
        dessertMenu: [...this.state.dessertMenu, axiosResult]
    })
    }
    render() {
        return (

            <ul>
    {
      this.state.dessertMenu.map((dessertMenu, index) => <p key={dessertMenu}>{dessertMenu}  -  $9.99 </p>)
    }
    
  </ul>
            
        )
    }
    }
export default Dessert;

//<a>{this.state.dessertMenu}</a>