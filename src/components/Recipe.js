import React, { Component } from 'react'

export default class Recipe extends Component {
    render() {
        //console.log(this.props.recipe);
        const {
            recipe_id,
            image_url,
            title,
            publisher,
            source_url
        } = this.props.recipe;
const {handleDetails}=this.props;
        return (
            <React.Fragment>
                {/* <h1>hello from recipe<br/></h1> */}
                <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
                    <div className="card">
                        <img src={image_url} className="img-card-top" style={{height:"14rem"}} />
                        <div className="card-body text-capitalize">
                            <h6>{title}</h6>
                            <h6 className="text-warning text-slanted">provided by {publisher}</h6>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-primary text-capitalize" onClick={handleDetails}>details</button>
                            <a href={source_url} target="_blank" rel="noopener noreferrer" className="btn btn-success text-capitalize mx-2">source url</a>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
