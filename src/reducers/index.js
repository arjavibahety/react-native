//The 2 reducers are wired up in this file
//We are combining them tgt using the combineReducer helper from redux library
import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
    //libraries is a reducer because it is returning some data
    libraries: LibraryReducer,
    selectedLibraryId: SelectionReducer,
    //This libraries and selectedLibraryId are the keys that we assign these reducers to determine how our app state objects look or how it get formed up
});

//Why are we using redux? 
//As the app starts to get more complicated, the code does not get more complcated
//Redux is designed to work with many different states, action creators, reducers etc
