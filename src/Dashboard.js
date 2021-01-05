import React from "react";
import Item from './Components/Item';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        list: [],
        category: ["business","entertainment", "general", "health", "science", "sports", "technology"],
        selectedCategory: "business"
    };
  }
  componentDidMount() {
    fetch(
        'http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=6a5158ec39d44671819819e7478402c7'
      )
      .then((res) => res.json())
      .then((items) => {
          this.setState({
            list: items.articles
          })
      })
  }

  componentDidUpdate(prevProps, prevState) {
      console.log(this.state.selectedCategory ,prevState.selectedCategory);
      if(prevState.selectedCategory !== this.state.selectedCategory)
    fetch(
        `http://newsapi.org/v2/top-headlines?country=us&category=${this.state.selectedCategory}&apiKey=6a5158ec39d44671819819e7478402c7`
      )
      .then((res) => res.json())
      .then((items) => {
          this.setState({
            list: items.articles
          })
      })
  } 

  handleChange = (value) => {
      console.log(value);
    this.setState({selectedCategory: value})
  }

  render() {
    return (
      <div>
        <select className="dropdown" onChange={(e) => this.handleChange(e.target.value)}>
           {this.state.category.length > 0 ? this.state.category.map((i,key) => <option key={key} value={i}>{i}</option>): null}
        </select>
        {this.state.list.length > 0 ? <ul>{this.state.list.map((item, index) => <Item key={index} item={item}/>)}</ul> : <h1>No results</h1>}
      </div>
    );
  }
}

export default Dashboard;
