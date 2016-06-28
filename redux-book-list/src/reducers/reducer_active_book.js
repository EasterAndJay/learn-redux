// State argument is not the application state, only the
// state this application is responsible for
export default function(state = null, action) {
  switch(action.type) {
  case "BOOK_SELECTED":
    return action.payload;
  
  default:
    return state;
  }
}