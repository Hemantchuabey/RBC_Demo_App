import { createAction, props } from "@ngrx/store";
import { IDashboardItems } from "../dashboard-items";


// for getting items 
export const get_post = '[itemsList] getPost';
export const get_post_success = '[itemsList] getPost success';
// for inseting items
export const Add_Post_Action = '[itemsList] insert items';
export const Add_Post_Action_success = '[itemsList] insert items success';

export const Update_Post_Action = '[itemsList] update items';
export const Delete_Post_Action = '[itemsList] delete items';

// get items actions
export const get_items = createAction(get_post); 
export const get_items_sucess = createAction(get_post_success); 
// insert items actions
export const insert = createAction(Add_Post_Action, props<{items : IDashboardItems}>()); 
export const insert_success = createAction(Add_Post_Action_success, props<{items : IDashboardItems}>()); 


export const update = createAction(Update_Post_Action, props<{items : IDashboardItems}>()); 

export const deleteMyItems = createAction(Delete_Post_Action, props<{id : string}>()); 