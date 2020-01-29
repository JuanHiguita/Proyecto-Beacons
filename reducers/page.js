function pages(state = {}, action) {
  switch (action.type) {
    case 'SET_SUBJECTS_LIST': {
      return {...state, ...action.payload};
    }
    case 'SET_SELECTED_SUBJECT': {
      return {...state, selectedSubject: action.payload.subject};
    }
    default:
      return state;
  }
}

export default pages;
