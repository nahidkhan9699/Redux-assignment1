export const colorReducer=(state={color:"info"},action)=>{
    switch(action.type){
        case "SELECTED_COLOR":
            return{
                ...state,
                color:action.payload
            }
            break;
            default:
                return state;
    }
    return state;
}