const defaultState = {
    menuActive: false,
    dropDownStatus: [false,false,false,false,false,false,false],
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