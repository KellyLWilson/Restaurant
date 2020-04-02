import React from 'react';
import './App.css';
const axios = require('axios').default;

class SandS extends React.Component {
    constructor(props) {
        super(props) 
        this.sandsItems = this.sandsItems.bind(this)
        this.fetchSands = this.fetchSandS.bind(this)
        this.state = {
            sandsMenu: [],
        }
    }  

    fetchSandS(numberOfItems) {
        for (let i= 0; i < 8; i++) {
        this.sandsItems(8)
    }
    }
    componentDidMount() {
        this.fetchSandS(8)   
        if (window.localStorage.sidesMenu < 8) {
            let soup = JSON.parse(window.localStorage.sandsMenu)
            this.setState({
                sandsMenu: soup,
            })
        }
    }

    componentDidUpdate() {
        localStorage.setItem('sandMenu', JSON.stringify(this.state.sandsMenu));
    }

    async sandsItems() {
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
        sandsMenu: [...this.state.sandsMenu, axiosResult]
    })
    }
    render() {
        return (

<ul>
    {
      this.state.sandsMenu.map((sandsMenu, index) => <p key={sandsMenu}>{sandsMenu}  -  $12.99 </p>)
    }
    
  </ul>

            
        )
    }
    }
export default SandS;

//<a>{this.state.sandsMenu}</a>