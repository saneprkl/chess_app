import React from 'react';
import styles from './Board.module.css';

export default function Board(props) {

  const board = props.board


  const newBlock = (block) => {

    console.log(block, "<---blockarna");
    
    return <div className={ styles.light } key={block.id}>{block.id}</div>
  }
  
  return (
    <div className={ styles.container }>container
      <div className={ styles.boardContainer }>Board container
        { 
          board.map(block => { if( block.row == 7) {
            { newBlock(block) }
            }

            console.log(block)
          }
            )
          
        }
        
      
      
      </div>
    </div>
  )


  /*

<div className={ styles.row }>
          <div className={ styles.light }></div>
        </div>
        <div className={ styles.row }>
          <div className={ styles.dark }></div>
        </div>

*/

}
