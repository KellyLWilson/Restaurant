import React from 'react'
const axios = require('axios').default;

class Items extends React.Component {
    constructor(props) {
        super(props) 
            this.menuItems = this.menuItems.bind(this)
            this.fetchMain = this.fetchMain.bind(this)
            this.state = {
                main: [],
            }
        }  

fetchMain(numberOfItems) {
    for (let i= 0; i < 15; i++) {
    this.menuItems()
}
}
componentDidMount() {
    this.fetchMain(15)   
    if (window.localStorage.sidesMenu < 15) {
        let mainMenu = JSON.parse(window.localStorage.menu)
        this.setState({
            main: mainMenu,   
        })
    }
}

componentDidUpdate() {
    localStorage.setItem('main', JSON.stringify(this.state.main));

}


async menuItems() {
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
    main: [...this.state.main, axiosResult]
})
}

render() {
    return (

<ul>
    {
      this.state.main.map((main, index) => <p key={main}>{main}  -  $24.99 </p>)
    }
    
  </ul>


        
    )
}
}

export default Items;


{/* <div className="card border-0">
            <div className="card-body text-left">
            <a>{this.props.main}</a>
        </div>
        </div> */}
    //     <p>
    //    {this.state.main}
    //     </p>