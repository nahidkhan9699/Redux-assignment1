export const foodReducer=(state={food:"Briyani"},action)=>{
    switch(action.type){
        case "SELECTED_FOOD":
            return{
                ...state,
                food:action.payload
            }
            break;
            default:
                return state;
    }
    return state;
}