import React from "react";


const Content = (props) => {
    return ( 
        <section>
            <img src={props.imageUrl} width="35%" alt="" />
            <h2>{props.title}</h2>
            <p>{props.location}</p>
            <p><a href={props.googleMapsUrl}>View map</a></p>
            <p>{props.startDate}</p>
            <p>{props.endDate}</p>
            <p>{props.description}</p>

        </section>
     );
}
 
export default Content;
