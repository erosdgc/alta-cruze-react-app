import React, { useState, useEffect } from "react";
import ItemList from "./ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import "./ItemListContainer.css";
import { HashLink as Link } from "react-router-hash-link";

function ItemListContainer(props) {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    const prodCollection = collection(db, "cruises");
    const ref = categoryName
      ? query(prodCollection, where("category", "==", categoryName))
      : prodCollection;

    getDocs(ref).then((response) => {
      const cruises = response.docs.map((prod) => {
        console.log(prod);
        return {
          id: prod.id,
          ...prod.data(),
        };
      });
      setItems(cruises);
    });
  }, [categoryName]);

  if (categoryName === "new")
    return (
      <div>
        <div className="img-gradient-main">
          <img
            className="category-img"
            src="https://res.cloudinary.com/drulocuwt/image/upload/v1666295855/atlas-cruzer-react-app/categories/architecture-6482060_ce7c3w.jpg"
            alt="A view from the inside of a modern cruise ship."
          />
          <div class="carousel-caption d-block mt-5 mt-md-0">
            <h5 className="display-1 quicksand">NEW</h5>
            <p className="display-5 inter-font mt-2 mt-sm-3">
              Our newest cruises for you to explore
            </p>
            <Link
              to="#category"
              smooth
              className="btn rounded-0 roboto-font py-2 col-12 col-lg-3 btn-light mt-2 mt-sm-4"
            >
              LEARN MORE
            </Link>
          </div>
        </div>
        <div className="py-5">
          {items.length ? (
            <ItemList items={items} />
          ) : (
            <div className="row  background-fvh align-middle">
              <div className="m-auto z-above align-middle mx-auto position-absolute">
                <div
                  className="spinner-border text-primary d-flex mx-auto"
                  role="status"
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
                <h4 className="display-6 mt-3 text-center">Loading...</h4>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  else if (categoryName === "special")
    return (
      <div>
        <div className="img-gradient-main">
          <img
            className="category-img"
            src="https://res.cloudinary.com/drulocuwt/image/upload/v1666419580/atlas-cruzer-react-app/categories/special_ndwryo.jpg"
            alt=""
          />
          <div class="carousel-caption d-block mt-5 mt-md-0">
            <h5 className="display-1 quicksand">SPECIALS</h5>
            <p className="display-5 inter-font mt-2 mt-sm-3">
              Live cruise trips on special dates
            </p>
            <Link
              to="#category"
              smooth
              className="btn rounded-0 roboto-font py-2 col-12 col-lg-3 btn-light mt-2 mt-sm-4"
            >
              LEARN MORE
            </Link>
          </div>
        </div>
        <div className="py-5">
          {items.length ? (
            <ItemList items={items} />
          ) : (
            <div className="row background-fvh align-middle">
              <div className="m-auto z-above align-middle mx-auto position-absolute">
                <div
                  className="spinner-border text-primary d-flex mx-auto"
                  role="status"
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
                <h4 className="display-6 mt-3 text-center">Loading...</h4>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  else if (categoryName === "classics")
    return (
      <div>
        <div className="img-gradient-main">
          <img
            className="category-img"
            src="https://res.cloudinary.com/drulocuwt/image/upload/v1666318642/atlas-cruzer-react-app/categories/classics_npwqbo.jpg"
            alt=""
          />
          <div class="carousel-caption d-block mt-5 mt-md-0">
            <h5 className="display-1 quicksand">CLASSICS</h5>
            <p className="display-5 inter-font mt-2 mt-sm-3">
              We all somehow love classics
            </p>
            <Link
              to="#category"
              smooth
              className="btn rounded-0 roboto-font py-2 col-12 col-lg-3 btn-light mt-2 mt-sm-4"
            >
              LEARN MORE
            </Link>
          </div>
        </div>
        <div className="py-5">
          {items.length ? (
            <ItemList items={items} />
          ) : (
            <div className="row background-fvh align-middle">
              <div className="m-auto z-above align-middle mx-auto position-absolute">
                <div
                  className="spinner-border text-primary d-flex mx-auto"
                  role="status"
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
                <h4 className="display-6 mt-3 text-center">Loading...</h4>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  else
    return (
      <div id="main">
        <h1 className="text-center display-1 mt-4 mt-lg-5 mb-3 mb-lg-4">
          Our Cruises
        </h1>
        {items.length ? (
          <ItemList items={items} />
        ) : (
          <div className="row background-fvh align-middle">
            <div className="m-auto z-above align-middle mx-auto position-absolute">
              <div
                className="spinner-border text-primary d-flex mx-auto"
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </div>
              <h4 className="display-6 mt-3 text-center">Loading...</h4>
            </div>
          </div>
        )}
      </div>
    );
}

export default ItemListContainer;
