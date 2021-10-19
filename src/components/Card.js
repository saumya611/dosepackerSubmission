import React, { useState } from 'react';
import { CgInfo } from 'react-icons/cg';

const Card = React.memo((props) => {
    const val = props.val;
    const index = props.index;
    const [isShown, setIsShown] = useState(false);

    const MouseEnterHandler = (e) => {
        console.log("Mouse Entered");
        let infoId = document.getElementById(val.id + val.email);
        infoId.style.display='block';
        setIsShown(true);
    };

    const MouseLeaveHandler = () => {
        console.log("Mouse Leaved");
        let infoId = document.getElementById(val.id + val.email);
        infoId.style.display='none';
        setIsShown(false);
    };

    const dragStart = e => {
        const target = e.target;

        e.dataTransfer.setData('card_id', target.id);

        setTimeout(() => {
            target.style.display = "none";
        }, 0);

    }

    const dragOver = e => {
        e.stopPropagation();
    };

    const inputHandler = (e) => {
        let newList = [...props.list];
        let index = e.target.id;
        newList[index].interviewDate = e.target.value;
        newList[index].draggable = 'true';
        newList[index].type = 'Scheduled';
        props.setListHandler(newList);
    };

    return (
        <div
            id={props.id}
            className={props.className}
            draggable={props.draggable}
            onDragStart={dragStart}
            onDragOver={dragOver}
        >
            <div id={val.id + val.email} className="infoCard">
                <img src={val.candidatePhoto} id='candidatePhoto' />
                <p id="phone">Phone: {val.number}</p>
                <p id="email">Email: {val.email}</p>
            </div>
            <h1 id='name'>{val.name}<span onMouseEnter={MouseEnterHandler} onMouseLeave={MouseLeaveHandler}><CgInfo /></span></h1>
            <p id='qualification'>Qualification : {val.qualification}</p>
            <p id='yearOfExperience'>Year of Experience : {val.yearsOfExperience}</p>
            <p id='interviewDate'>Interview Date : {val.type}</p>
            <p id='setDate'>Set Date For Interview : <input type="date" id={index} className='datePicker' onInput={inputHandler} /></p>
        </div>
    )
});

export default Card;
