import React from "react";

export const ItemDetail = ({data}) => {

    return (
        <div className="container-xxl">
            <article className="card rounded-0 border-0 shadow p-3 mt-5">
                <div className="row justify-content-md-center">
                    <div className="card border-0 rounded-0 card-image w-50">
                        <img className="img-fluid izo" src={data.image} alt={data.alt} />
                    </div>
                    <div className="card border-0 rounded-0 mx-auto card-data p-3 w-50 position-absolute bg-tr-dark hover">
                        <h2 className="card-name roboto-font">{data.cruise}</h2>
                        <div className="card-btn-buy mt-auto" data-id={data.id}>
                            <button className="btn btn-success border-0 rounded-0 col-12 py-2">LEARN MORE</button>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
    
}