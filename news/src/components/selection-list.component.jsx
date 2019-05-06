import React from 'react';

const SelectionList = (props) => {
    const { items, onChangeCallback } = props;
    return (
        <div className="selection-list-component">
            <select onChange={onChangeCallback} className="form-control">
                {renderItems(items)}
            </select>
        </div>
    );
}


function renderItems(items) {
    return items.map((item, index) => (<option key={index} value={item.id}>{item.value}</option>))
}

export default SelectionList;