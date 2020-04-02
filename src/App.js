import React from 'react';
import MenuItems from './MenuItems';
import Appetizers from './appetizers';
import SandS from './sands';
import Desserts from './dessert';
import Sides from './sides';
import Specials from './Specials';
import 'bootstrap/dist/css/bootstrap.css';
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import './App.css';
import './index.css';

function App() {
  return (
    
    
    <div className="container-flex.bg-info">
    <div className="row">
      <div className="media">
        <img src="/images/restaurant.jpg" className="img-fluid"></img>
        <div className="media-body">
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-4"></div>
      <div className="col-fluid">
        <h1>The Pandemic Pan</h1>
        <div className="col"></div>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-4"></div>
      <div className="col-fluid">
        <h3>High End Casual Dining</h3>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-5"></div>
      <div className="col-fluid">
        <h5> 321 Pandemic Place</h5>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-5"></div>
      <div className="col-fluid">
        <h6>Richmond, KY 40475</h6>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-5"></div>
      <div className="col-fluid">
        <h6>859-983-7889</h6>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-5"></div>
      <div className="col-fluid">
        <h6>Monday-Saturday</h6>
        <h7>4:00 P.M - 10:00 P.M</h7>
      </div>
    </div>

    <div className="accordion" id="accordionExample">
      <div className="card">
        <div className="card-header" id="headingOne">
          <h2 className="text-center mb-0">
            <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Daily Specials
    </button>
          </h2>
        </div>
        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
          <div className="card-body">

            <li className="media my-4">
              <img src="./images/special.jpeg"></img>
              <div className="media-body">
                <h5 className="text-center">Today's Specials Include</h5>
                <Specials />
              </div>
            </li>
            <div className="row">
              <div className="col-sm-2"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header" id="headingOne">
          <h2 className="text-center mb-0">
            <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Appetizers
    </button>
          </h2>
        </div>
        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
          <div className="card-body">
            <li className="media my-4">
              <img src="./images/apps.jpg"></img>
              <div className="media-body">
                <h5 className="text-center">Appetizers</h5>
                <Appetizers />
              </div>
            </li>
            <div className="row">
              <div className="col-sm-2"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header" id="headingTwo">
          <h2 className="text-center mb-0">
            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Soup and Salads
    </button>
          </h2>
        </div>
        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
          <div className="card-body">
            <li className="media my-4">
              <img src="./images/soup.jpeg"></img>
              <div className="media-body">
                <h5 className="text-center">Soup and Salad's of the Day</h5>
                <SandS />
              </div>
            </li>
            <div className="row">
              <div className="col-sm-2"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header" id="headingThree">
          <h2 className="text-center mb-0">
            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Sides
    </button>
          </h2>
        </div>
        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
          <div className="card-body">

            <li className="media my-4">
              <img src="./images/sides.jpg"></img>
              <div className="media-body">
                <h5 className="text-center">Our Famous Side Dishes</h5>
                <Sides />
              </div>
            </li>
            <div className="row">
              <div className="col-sm-2"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header" id="headingTwo">
          <h2 className="text-center mb-0">
            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Main Dishes
    </button>
          </h2>
        </div>
        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
          <div className="card-body">
            <li className="media my-4">
              <img src="./images/main.jpeg"></img>
              <div className="media-body">
                <h5 className="text-center">Mouth Watering Main Dishes</h5>
                <MenuItems />
              </div>
            </li>
            <div className="row">
              <div className="col-sm-2"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header" id="headingTwo">
          <h2 className="text-center mb-0">
            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Desserts
    </button>
          </h2>
        </div>
        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
          <div className="card-body">
            <li className="media my-4">
              <img src="./images/dessert.jpg"></img>
              <div className="media-body">
                <h5 className="text-center">Decadent Desserts</h5>
                <Desserts />
              </div>
            </li>
            <div className="row">
              <div className="col-sm-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
