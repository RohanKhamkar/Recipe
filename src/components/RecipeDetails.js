import React, { Component } from 'react';
import {recipe} from '../tempDetails';
export default class RecipeDetails extends Component {
   constructor(props){
        super(props)

        this.state={
            //recipe:{}, /////// live
            recipe,
            url:`https://www.food2fork.com/api/get?key=446707984b3bcd7395f2efce4772f27d&rId=${this.props.id}`
        }
   }
    
   async componentDidMount(){
    try{
        const data = await fetch(this.state.url);
        const jsonData = await data.json();
        this.setState({
          recipe:jsonData.recipe
        })
      }
      catch(error){
        console.log(error);
      }
    }

    render() {
        
        const{
            publisher,
            image_url,
            publisher_url,
            source_url,
            title,
            ingredients
        }= this.state.recipe;
        const{handleSwitchPage} = this.props
        return (
            <React.Fragment>
                <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <button type="button" className="btn btn-warning mb-5 text-capitalize" onClick={()=>handleSwitchPage(0)}>back to recipe list</button>
                        <img src={image_url} className="d-block w-100" style={{height:"auto"}} alt="recipe img"/>
                    </div>
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <h6 className="text-uppercase">{title}</h6>
                        <h6 className="text-warning text-capitalize text-slanted">provided by {publisher}</h6>
                    <a href={publisher_url} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-2 text-capitalize text-sm-screen">publisher ewbpage</a>
                    <a href={source_url} target="_blank" rel="noopener noreferrer" className="btn btn-success mt-2 mx-2 text-capitalize text-sm-screen">recipe url</a>
                    <ul className="list-group mt-4">
                        <h2 className="mt-3 mb-4 text-capitalize">ingredients</h2>
                        {
                            ingredients.map((item,index)=>{
                                return(
                                    <li key={index} className="list-group-item text-slanted">{item}</li>
                                )
                            })
                        }
                    </ul>
                    </div>
                </div>
                </div>
            </React.Fragment>
        )
    }
}
