import React from 'react';

function RedirectorText(props){
    return(
        <div className={`page__redirector-text --${props.infoType}-info --${props.color}-text`}>
            <p>{props.children}</p>
        </div>
    );
}

export default RedirectorText;