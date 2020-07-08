export default(state,action)=>{
    switch(action.type){
        case 'ADD_TASK':
            return{
                tasks:[action.payload,...state.tasks]
            }

        case 'DO_TASK':{
            const tasks = state.tasks.map(task => {
                if (task.id === action.payload.id) {
                  return { ...task, completion: !task.completion };
                }
                return task;
              });
        
              return {
                ...state,
                tasks,
            };
        }
        default:
            return state
    }
}