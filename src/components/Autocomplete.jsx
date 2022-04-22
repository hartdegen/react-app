import axios from 'axios';
import React from 'react';

export default class Autocomplete extends React.Component {
    constructor(props) {
      super(props);
      this.state = { countries: [], text: '' };
    }
  
    handleChangeText = async ({ target: { value } }) => {
      if (value === '') {
        this.setState({ text: '', countries: [] });
        return;
      }
      this.setState({ text: value });
    //const res = await axios.get('need country list from any good server', { params: { term: value } });
      const res = await axios.get(`https://restcountries.com/v3.1/name/${value}`);
      const pulledCountries = res.data.map(x => x.name.common)
      this.setState({ countries: pulledCountries });
    }
  
    renderCountries() {
      const { countries } = this.state;
      return (
        <ul>
          {countries.map((c) => <li key={c}>{c}</li>)}
        </ul>
      );
    }
  
    render() {
      const { countries, text } = this.state;
  
      return (
        <div>
          <form>
            <input type="text" onChange={this.handleChangeText} value={text} className="form-control" placeholder="Enter Country" />
          </form>
          {countries.length > 0 && this.renderCountries()}
        </div>
      );
    }
  }