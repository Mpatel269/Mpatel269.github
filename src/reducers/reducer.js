const defaultState = {
    menuActive: false,
};

const reducer = (state = defaultState, action) => {
    switch(action.type){
        case "MENU_HANDLER":
            return{
                ...state,
                menuActive: !state.menuActive
            }
        default:
            return state;
        }
    }

export default reducer;