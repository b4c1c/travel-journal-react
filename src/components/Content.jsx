import React from "react";


const Content = (props) => {
    return ( 
        <section>
            <hr />
            <h2>{props.title}</h2>
            <img className="travel-img" src={props.imageUrl} width="35%" alt="" />
            <div className="location-card">
                <p><strong>{props.location}</strong></p>
                <a href={props.googleMapsUrl} target="_blank">View on map</a>
            </div>
            
            <p className="dates-card">From the {props.startDate} to the {props.endDate}</p>
            
            <p className="description-card">{props.description}</p>
            

        </section>
     );
}
 
export default Content;
