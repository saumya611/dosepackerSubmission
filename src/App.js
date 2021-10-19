import './App.css';
import React, { useState} from 'react';
import Board from './components/Board';
import Card from './components/Card';
import { candidateList } from './components/CandidateList';
import SortList from './components/SortList';

candidateList.map((val, ind) => {
  val.id = ind;
  if (val.interviewDate == null) {
    val.type = 'Unscheduled';
    val.draggable = 'false';
  } else {
    val.type = 'Scheduled';
    val.draggable = 'true';
  }
  return val;
});

function App() {
  const [listCandidate, setListCandidate] = useState(candidateList);
  const [sortList, setSortList] = useState([]);
  const [isSortList, setIsSortList] = useState(false);

  const inputHandler = (newList) => {
    setListCandidate(newList);
  };

  return (
    <div className="App" id='app'>
      {/* {console.log(listCandidate)} */}
      <main className="flexbox" id='flex-main'>
        <Board id="board-1" className="board">
          {/* <h1>Unscheduled Candidate</h1> */}
          {listCandidate.map((val, index) => {
            return (
              <Card val={val} index={index} key={index} list={listCandidate} setListHandler={inputHandler} id={val.id} className="card" draggable={val.draggable} />            );
          })}
        </Board>
        <Board id="board-2" className="board">
          {isSortList && <SortList data={sortList} setListHandler={inputHandler}/>}
          
        </Board>
      </main>
    </div>
  );
}

export default App;
