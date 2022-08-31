import React from "react";

const ItemsListContainer = (props) => {
    return (
        <div className="container-xxl">
            <article className="card rounded-0 border-0 shadow p-3 mt-5">
                <div className="row justify-content-md-center">
                    <div className="card border-0 rounded-0 card-image w-50 col-8">
                        <img className="img-fluid izo" src={props.image} alt={props.alt} />
                    </div>
                    <div className="mx-auto shadow-sm card border-0 rounded-0 card-info p-3 w-25">
                        <h2 className="card-name roboto-font">{props.cruise}</h2>
                        <h4 className="departure roboto-font mb-0 initialism">From {props.departure}</h4>
                        <p className="roboto-font initialism mt-3">{props.duration} nights</p>
                        <p className="roboto-font initialism mb-0">Next departure date</p>
                        <p className="roboto-font initialism mb-3">{props.date}</p>
                        <p className="roboto-font initialism mb-0">Price per traveler</p>
                        <h4 className="roboto-font card-price">${props.price}</h4>
                        <button className="btn btn-success rounded-0 border-0 btn-custom-color card-btn-buy mt-auto p-3" data-id={props.id}>BOOK NOW</button>
                        <p className="initialism text-center mt-4 mb-0 text-muted mt-auto">Service fee included.</p>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default ItemsListContainer;