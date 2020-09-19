const defaultState = {
    showMenu: false,
};

const reducer = (state = defaultState, action) => {
    switch(action.type){
        case "MENU_HANDLER":
            return{
                ...state,
                showMenu: !state.showMenu
            }
        default:
            return state;
        }
    }

export default reducer;