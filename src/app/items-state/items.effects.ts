import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { DashboardItemsService } from '../dashboard-items.service';
import { get_items, insert } from './items.actions';
import { getItems } from './items.selector';

 
@Injectable()
export class ItemsEffects {
 
  // loadMovies$ = createEffect(() => this.actions$.pipe(
  //   ofType(getItems),
  //   mergeMap(() => this.itemsService.getItems()
  //     .pipe(
  //       map(items => (get_items())),
  //       catchError(() => EMPTY)
  //     ))
  //   )
  // );
 
  constructor(
    private actions$: Actions,
    private itemsService:DashboardItemsService
  ) {}
}


// import { Injectable } from "@angular/core";
// import { ofType } from "@ngrx/effects";
// import { createEffect,Actions } from "@ngrx/effects";
// import { map, mergeMap, catchError } from 'rxjs/operators';
// import { EmptyError } from "rxjs";
// import { DashboardItemsService } from "../dashboard-items.service";
// import { insert } from "./items.actions";
// import { getItems } from "./items.selector";

// @Injectable()
// export class ItemsEffects{

//     loadItems$ = createEffect(() => 
//         this.action$.pipe(
//             ofType(getItems),
//                 mergeMap(() => 
//                     this.itemsService.getItems()
//           .pipe(
//             map(items => ({ items }))
//           ))
//         )
//       );

//     constructor (private action$ : Actions,private itemsService:DashboardItemsService){}
// }