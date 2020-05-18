const INITIAL_STATE = {
    message:"HELLO"
}

const oneReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'NEW_MESSAGE': {
            return({
                ...state,
                message:action.payload
            });
        }
        default:
            return(INITIAL_STATE);
    }
}
export default oneReducer;