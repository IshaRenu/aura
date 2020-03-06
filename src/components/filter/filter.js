import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import { Button, ButtonGroup} from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './filter.scss';

class Filter extends Component {


    state = {
      country: [{value: 'S', display: 'Select Country'},
      {value: 'IN', display: 'INDIA'},
      {value: 'CA', display: 'CANADA'},
      {value: 'USA', display: 'USA'}],
      selectedVal: "SELECT COUNTRY",
      validationError: "",

      city: [{value: 'S', display: 'Select City'},
      {value: 'IN', display: 'INDIA'},
      {value: 'CA', display: 'CANADA'},
      {value: 'USA', display: 'USA'}],

      date: new Date(),

    };

    handleChange = this.handleChange.bind(this);

    handleChange(date) {
      this.setState({
        date: date
      })
    }
  
    filterMount() {
      fetch(
        "http://localhost:3000/api/data"
      )
        .then(response => {
          return response.json();
        })
        .then(data => {
          let dataFromApi = data.map(count => {
            return { value: count, display: count };
          });
          this.setState({
            country: [
              {
                value: "",
                display:
                  "(Select Country)"
              }
            ].concat(dataFromApi)
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
	
    render() {
        return (
           
            <ButtonGroup vertical>
              <span className="block-example border border-rounded">
          
            <div>
              <div>
                <select className="AQI_check">
                  {this.state.country.map((count) => <option key={count.value} value={count.value}>{count.display}</option>)}
                </select>
              </div>
              <div>
                <select className="AQI_check">
                  {this.state.city.map((count) => <option key={count.value} value={count.value}>{count.display}</option>)}
                </select>
              </div>
              <div>               
              <DatePicker className="AQI_check"
                name="date"
                selected={ this.state.date }
                onChange={ this.handleChange }
                dateFormat="MM/dd/yyyy"
             />
                 
              </div> 
			        <div><Button className="submit">Check AQI</Button></div> 
            </div>
            </span>
          </ButtonGroup>
		  
        );
    } 
}

export default Filter;

