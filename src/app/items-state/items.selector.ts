import { createFeatureSelector, createSelector, State } from "@ngrx/store";
import { ItemsState } from "./items.state";


const getItemState = createFeatureSelector<ItemsState>('itemsList');


export const getItems = createSelector(getItemState,(State) => {
    return State.itemsList;
})


// export const getPostById  = createSelector(getPostState,(state:any,props:any) =>{
//     return state.posts.find((post: { id: any; })=>post.id===props.id);
// })