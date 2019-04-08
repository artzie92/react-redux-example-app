import React from 'react';

export default (props) => {
    const id = props.match.params.id;
    return <div>Details {id}</div>
}