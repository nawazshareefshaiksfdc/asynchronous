
async function task1() {
  try {
    const board = await getBoard();
    const lists = await getLists(board.id);
    const cards = await getCards('qwsa221');
    console.log('Task 1 Result:', { board, lists, cards });
  } catch (error) {
    console.error('Error in Task 1:', error);
  }
}

// Execute Task 1
task1();

async function task2() {
  try {
    const board = await getBoard();
    const [cardsQwsa221, cardsJwkh245] = await Promise.all([
      getCards('qwsa221'),
      getCards('jwkh245')
    ]);
    console.log('Task 2 Result:', { cardsQwsa221, cardsJwkh245 });
  } catch (error) {
    console.error('Error in Task 2:', error);
  }
}

// Execute Task 2
task2();

async function task3() {
  try {
    const board = await getBoard();
    const lists = await getLists(board.id);
    const cardPromises = lists.map(list => getCards(list.id));
    const allCards = await Promise.all(cardPromises);
    console.log('Task 3 Result:', { board, lists, allCards });
  } catch (error) {
    console.error('Error in Task 3:', error);
  }
}

// Execute Task 3
task3();