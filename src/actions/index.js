export const selectLibrary = (libraryId) => {
  
  //This is an action
  //Plain JS objects. Must have a type property aka command or instruction to the reducer
  return {
      type: 'select_library',
      payload: libraryId,
  };  
  
};

//action creator creates an action: They are plain JS () which return actions
