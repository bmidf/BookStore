import books from './BooksDB'

const initialStore = {
    item: books
  };

function reducer(state = initialStore) {
    return state;
}

export default reducer;