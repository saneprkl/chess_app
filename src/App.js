
import './App.css';
import Board from './components/Board/Board'

export default function App() {

  let board = [];
  const initBoard = () => {
    for (let i = 0; i < 8; i++) {
      let row = i
      for(let i = 0; i < 8; i++) {
        let block = {
          id: row+","+i,
          row: row,
          column: i
        }
        board.push(block);
      }
      //console.log(board);
    }
  }
  initBoard()
  return (
    <>
    <Board board={ board }> </Board>
    </>
  );
};