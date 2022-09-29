const counterReducer = (state = { counter: 5 }, action ) => {
    switch(action.type){
        case 'TYPE_INC':
            return {
                ...state,
                counter: state.counter + 1
            }
        case  'TYPE_DESC':
            return {
                ...state,
                counter: state.counter - 1
            }
        default:
            return state;
    }
}

export default counterReducer;