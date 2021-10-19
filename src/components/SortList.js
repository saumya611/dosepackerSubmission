import Card from './Card';
import React from 'react';

const SortList = React.memo((props) => {
    const sortListData = props.data;

    const inputHandler = (newList) => {
        props.setListHandler(newList);
    }

    return (
        <div>
            {sortListData.map((val, index) => {
                return (
                    <Card val={val} index={index} key={index} list={sortListData} setListHandler={inputHandler} id={val.id} className="card" draggable={val.draggable} />
                );
            }
            )
            }

        </div>
    )
});

export default SortList
