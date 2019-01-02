//Use export when you want to export multiple action creators
// state = null because if state is undefined initially, we should default it to the value of 1. 
//Redux cannot deal with undefined values
export default(state = null, action) => {
    switch (action.type) {
        case 'select_library':
            return action.payload;

        default:
            return state;
    }
};
