import React from "react";

const card = (props) => {
    const { image, title, description } = props.cards;
    return (
        <div className="card h-100">
            <img
                src={image}
                className="card-img-top"
                alt={title}
                style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
            </div>
        </div>
    );
};

export default card;