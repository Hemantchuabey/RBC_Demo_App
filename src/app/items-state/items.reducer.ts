import { State } from "@ngrx/store";
import { createReducer,on } from "@ngrx/store";
import { deleteMyItems, get_items, insert, insert_success, update } from "./items.actions";
import { initialState } from "./items.state";



const _itemsReducer = createReducer(
    initialState,
    on(get_items,(State:any)=>{
         return {
          ...State,
      }
    }),on(insert,(State:any,action:any)=>{
    let items = {...action.items} 
    items.id  = (State.itemsList.length + 1 ).toString();
 
       return {
        ...State,
        itemsList: [...State.itemsList,items],
    }
  }),on(insert_success,(State:any,action:any)=>{
    let items = {...action.items} 
    items.id  = (State.itemsList.length + 1 ).toString();
 
       return {
        ...State,
        itemsList: [...State.itemsList,items],
    }
  }),
  on(update,(State:any,action:any)=>{
  let updateItems = State.itemsList.map((items:any) => {
    return action.items.id === items.id ? action.items : items;
  }) ;
  console.log(updateItems)
     return {
      ...State,
      itemsList: updateItems,
  }
}),
on(deleteMyItems,(State , {id}) =>{
  const deletedItems = State.itemsList.filter((item) => {
    return item.id !== id;
  });
  return{
    ...State,
    itemsList : deletedItems,
  }
})
);

export function itemsReducer(state:any,action:any){
    return _itemsReducer(state,action);
}