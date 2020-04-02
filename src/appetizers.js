import React from 'react';
import './App.css';
const axios = require('axios').default;

class Appetizers extends React.Component {
    constructor(props) {
        super(props) 
        this.appetItems = this.appetItems.bind(this)
        this.fetchAppet = this.fetchAppet.bind(this)
        this.state = {
            appsMenu: [],
        }
    }  

    fetchAppet(numberOfItems) {
        for (let i= 0; i < 8; i++) {
        this.appetItems()
    }
    }
    componentDidMount() {
        this.fetchAppet(8)   
        if (window.localStorage.appsMenu < 8) {
            let appets = JSON.parse(window.localStorage.appsMenu)
            this.setState({
                appsMenu: appets,
                

        
            })
        }
    }
    componentDidUpdate() {
        localStorage.setItem('appsMenu', JSON.stringify(this.state.appsMenu));
    }

    async appetItems() {
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
        appsMenu: [...this.state.appsMenu, axiosResult]
    })
    }
    render() {
        return (

<ul>
    {
      this.state.appsMenu.map((appsMenu, index) => <p key={appsMenu}>{appsMenu}  -  $9.99 </p>)
    }
    
  </ul>


            
        )
    }
    }
export default Appetizers;

//<a>{this.state.appsMenu}</a>