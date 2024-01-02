const { getBoard, getLists, getCards } = require('./trello-callbacks');

let task1 = () => {
  getBoard((board) => {
    getLists(board.id, (lists) => {
      const targetList = lists.find(list => list.id == 'qwsa221');
      if (targetList) {
        getCards(targetList.id, (cards) => {
          console.log(JSON.stringify(cards));
        })
      }
      else {
        console.log('qwsa221 id not found in the targetList');
      }
    })
  })

}

let task2 = () => {
  getBoard(board =>
    getLists(board.id, (lists) => {
      setTimeout(() => {
        let targetList = lists.find(list => list.id == 'qwsa221');
        getCards(targetList.id, (cards) => {
          cards.forEach((card) => {
            console.log(card);
          })
        })
      }, 2000);
      setTimeout(() => {
        let targetList = lists.find(list => list.id == 'jwkh245');
        getCards(targetList.id, (cards) => {
          cards.forEach((card) => {
            console.log(card);
          })
        })
      }, 2000);
    }))
}


let task3 = () => {
  getBoard((board) => {
    getLists(board.id, (lists) => {
      lists.forEach((list) => {
        setTimeout(() => {
          getCards(list.id, (cards) => {
            console.log(`Cards for list ${list.id}: ${JSON.stringify(cards)}`);
          });
        }, 1000);
      });
    });
  });
};


// task1();
// task2();
task3();