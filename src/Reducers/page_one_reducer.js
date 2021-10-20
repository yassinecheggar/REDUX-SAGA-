const page_one_reducer = (state = 0 , action)=>{
    switch (action.type){   
        case "add_number_async" :
            return  state + 1;
        case "subtarct_number" :
            return  state -1;
        default:
            return state;

    }

}

export default  page_one_reducer;