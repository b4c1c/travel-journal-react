import React from "react";


const Content = (props) => {
    return ( 
        <section>
            <hr />
            <h2>{props.title}</h2>
            <img src={props.imageUrl} width="35%" alt="" />
            <p><strong>{props.location}</strong></p>
            <p><a href={props.googleMapsUrl}>View map</a></p>
            <p>From the {props.startDate} to the {props.endDate}</p>
            <p></p>
            <p>{props.description}</p>

        </section>
     );
}
 
export default Content;
