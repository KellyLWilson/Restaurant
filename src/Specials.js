import React from 'react';
import './App.css';
const axios = require('axios').default;

class Specials extends React.Component {
    constructor(props) {
        super(props) 
        this.specialItems = this.specialItems.bind(this)
        this.fetchSpecials = this.fetchSpecials.bind(this)
        this.state = {
            specials: [],
        }
    }  

    fetchSpecials(numberOfItems) {
        for (let i= 0; i < numberOfItems; i++) {
        this.specialItems()
    }
    }
    componentDidMount() {
        this.fetchSpecials(3)
    }
    componentDidUpdate() {
    }

    async specialItems() {
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
        specials: [...this.state.specials, axiosResult]
    })
    }
    render() {
        return (
            <div>

<ul>
    {
      this.state.specials.map((specials, index) => <li key={specials}>{specials}  -  $19.99 </li>)
    }
    
  </ul>
</div>
            
        )
    }
    }
export default Specials;

//<a>{this.state.specials}</a>