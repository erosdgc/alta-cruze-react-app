import React from "react";
import ItemCount from "./ItemCount";

const Item = ({ info }) => {

    const onAdd = (quantity) => {
        if (quantity >= 5) {
            alert("Do you need to book for more than 4 passengers? Please send us an e-mail to bookings@atlascruzer.com")
        }
        else if (quantity === 1) {
            alert(`You have booked for ${quantity} passenger to travel.`); 
        }
        else {
            alert(`You have booked for ${quantity} passenger(s) to travel.`);
        }
    }

    return (
        <div className="container-xxl">
            <article className="card rounded-0 border-0 shadow p-3 mt-5">
                <div className="row justify-content-md-center">
                    <div className="card border-0 rounded-0 card-image w-50 col-8">
                        <img className="img-fluid izo" src={info.image} alt={info.alt} />
                    </div>
                    <div className="mx-auto shadow-sm card border-0 rounded-0 card-info p-3 w-25">
                        <h2 className="card-name roboto-font">{info.cruise}</h2>
                        <h4 className="departure roboto-font mb-0 initialism">From {info.departure}</h4>
                        <p className="roboto-font initialism mt-3">{info.duration} nights</p>
                        <p className="roboto-font initialism mb-0">Next departure date</p>
                        <p className="roboto-font initialism mb-3">{info.date}</p>
                        <p className="roboto-font initialism mb-0">Price per traveler</p>
                        <h4 className="roboto-font card-price">${info.price}</h4>
                        <div className="card-btn-buy mt-auto" data-id={info.id}>
                            <ItemCount initial={1} stock={5} onAdd={onAdd} />
                        </div>
                        <p className="initialism text-center mt-4 mb-0 text-muted mt-auto">Service fee included.</p>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default Item;