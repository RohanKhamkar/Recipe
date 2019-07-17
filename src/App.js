import React, {Component} from 'react';
import './App.css';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import {recipes} from './tempList';


class App extends Component {
  state = {
    //recipes:[], ////////////// for Live
    recipes:recipes,
    url:"https://www.food2fork.com/api/search?key=446707984b3bcd7395f2efce4772f27d",
    base_url:"https://www.food2fork.com/api/search?key=446707984b3bcd7395f2efce4772f27d",
    details_id:35382,
    pageIndex : 0,
    search:'',
    query:"&q=",
    error:''
  };

/////////////////////Uncomment for Live/////////////////////////////////////
async getAllRecipes(){
  try{
    const data = await fetch(this.state.url);
    const jsonData = await data.json();
    if(jsonData.recipes.length ===0){
      this.setState(()=>{
       return { error:"Sorry, but your search did not return any results"}
      })
    }else{
      this.setState(()=>{
        return{
          recipes:jsonData.recipes
        }
      })
    }
  }
  catch(error){
    console.log(error);
  }
}

componentDidMount(){
  this.getAllRecipes()
}
////////////////////////////////////////////////////////////////

displayPage = (SwitchPage) =>{
  switch(SwitchPage){
    case 0:
      return(<RecipeList recipes={this.state.recipes} 
        handleDetails={this.handleDetails} 
        value={this.state.search}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        error={this.state.error}/>)
    case 1:
      return(<RecipeDetails id={this.state.details_id} 
        handleSwitchPage={this.handleSwitchPage}/>)
    default:
  }
}

handleSwitchPage = SwitchPage =>{
  this.setState({
    pageIndex : SwitchPage
  }) 
}

handleDetails = (SwitchPage,id) =>{
  this.setState({
    pageIndex:SwitchPage,
    details_id:id
  })
}

handleChange=(e) =>{
 this.setState({
   search:e.target.value
 },
 ()=>{
   //Callback Function
 })
}
handleSubmit=(e) =>{
  e.preventDefault();
  const{base_url,query,search}=this.state;
  this.setState(()=>{
    return{
      url:`${base_url}${query}${search}`,search:""
    }
  },
  ()=>{
this.getAllRecipes();
  })
}
  render(){
    //console.log(this.state.recipes);
    return (
      <React.Fragment>
        {
          this.displayPage(this.state.pageIndex)
        }
      </React.Fragment>
     );
  }
}


export default App;
