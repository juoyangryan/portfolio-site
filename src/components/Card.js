import React from 'react';

import CardInfo from './CardInfo';

function Card(props) {
    return(
        <div className="d-inline-block j-card">
            <img className="j-card-image zoom" src={props.item.imgSrc} alt={props.item.imgSrc} onClick={e => props.onClick(props.item)}/>
            {props.item.selected && <CardInfo title={props.item.title} subtitle={props.item.subtitle} link={props.item.link} details={props.item.details}/>}
        </div>
    );
}
export default Card;