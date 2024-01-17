// action : 액션(들)
export const increase = () => ({type: "INCREMENT"});
export const decrease = () => ({ type: "DECREMENT"});
export const changeName = (newname) => ({type : "CHANGE_NAME", payload : newname});

// state : 상태(들)
const initState = {
    number: 1,
    user: {name : "허지우"},
};

// reducer
//   return 결과를 호출한 쪽에서 받는게 아니라.
//   return 되는 순간 UI 변경 발생!
const reducer = (state = initState, action) => {

    switch(action.type){
        case "INCREMENT":
            return {...(state), number : state.number + 1};  // 새로운 state 리턴
        case "DECREMENT":
            return {...(state), number : state.number -  1};  // 새로운 state 리턴
        case "CHANGE_NAME":
            //state의 user.name을 업데이트한 새로운 state 리턴
            return {...state, user: {...(state.user), name : action.payload}};
        default:
            return state;  // 기존 state 리턴
    };

};

export default reducer;  // reducer 를 default export