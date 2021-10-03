import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardItemsService } from '../dashboard-items.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { FormGroup,FormBuilder,FormControl} from '@angular/forms';
import { from, Observable } from 'rxjs';
import { IDashboardItems } from '../dashboard-items';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Store } from '@ngrx/store';
import { ItemsState } from '../items-state/items.state';
import { getItems } from '../items-state/items.selector';
import { deleteMyItems, insert, update } from '../items-state/items.actions';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  closeResult !: string;
  public loggedUser:any ;
  public header !: string;
  public editProfileForm !: FormGroup;
  public insertProfileForm !: FormGroup;
  // public items :any = [];
   items$ !: Observable<IDashboardItems[]>;   //-->array 
  public insertIndex:number = 5 ; 
  public editIndex:number = 0 ; 

  constructor(private route : ActivatedRoute,
              private _dashboardItems : DashboardItemsService,
              private modalService: NgbModal,
              private fb : FormBuilder,
              private store:Store<{itemsList:{itemsList:ItemsState}}>) { }

ngOnInit(): void {
    let username = this.route.snapshot.paramMap.get('username');
    this.loggedUser = username;
    this.items$ = this.store.select(getItems);
    // this._dashboardItems.getItems()
    // .subscribe(data => this.items = data);  

    this.editProfileForm = this.fb.group({
      name: [''],
      email: [''],
      mobile: [''],
     });
    this.insertProfileForm = this.fb.group({
      name: [''],
      email: [''],
      mobile: [''],
     });
     
}
// 2 submit button ->1st submit form 2nd-> editform
// index track in below fuuntions as well

// for editing
public openEditForm(targetModal:any, user:any,foundIndex:any) {
  this.editIndex = foundIndex;
  console.log("Found index",foundIndex);
  console.log("Edit index",this.editIndex-1);
  this.modalService.open(targetModal, {
   centered: true,
   backdrop: 'static'
  });
 
  this.editProfileForm.setValue({
  name: user.name,
   email: user.email,
   mobile: user.mobile, 
  });
 }

//  for inserting
 openInsertForm(targetModal:any,) {
  this.modalService.open(targetModal, {
   centered: true,
   backdrop: 'static'
  });
  this.insertProfileForm.setValue({
    name: "",
    email: "",
    mobile: "", 
   });}



 onInsert(items$:IDashboardItems){
  //  using conventional method ---->
    // this.insertIndex++;
    // items.id = this.insertIndex.toString();
    // // this.items.push(items);
    // this.insertProfileForm.reset();
    // this.modalService.dismissAll();
  // using state management method ---->
    const items: IDashboardItems = {
      name : this.insertProfileForm.value.name,
      email  : this.insertProfileForm.value.email,
      mobile :  this.insertProfileForm.value.mobile,
    };
    this.store.dispatch(insert({items}));
    this.insertProfileForm.reset();
    this.modalService.dismissAll();
 }

onEdit(items$:IDashboardItems): void{
// this.items[this.editIndex].name = items.name;
// this.items[this.editIndex].email = items.email;
// this.items[this.editIndex].mobile = items.mobile;
const items : IDashboardItems = {
  id : this.editIndex.toString(),
  name : this.editProfileForm.value.name,
  email : this.editProfileForm.value.email,
  mobile :this.editProfileForm.value.mobile,
};
console.log(items);
console.log("this is from inside",this.editIndex);
this.store.dispatch(update({items}));
this.insertProfileForm.reset();
this.modalService.dismissAll();
}



trackByItems(index:any,itemsTrack:any):any{
  // this._dashboardItems.getItems()
  //   .subscribe(data => this.items = data);
  // return this.items;
  // return this.items.id;
  }

  //Deleting items..... 
deleteItems(id:any){
// console.log(this.items)
// console.log(this.items.findIndex((e:{ id: any; }) =>e.id == id))
// const i = this.items.findIndex((e:{ id: any; }) =>e.id == id);
// if(i!== -1){
//   return this.items.splice(i,1);
//     }
// this.insertIndex--;

this.store.dispatch(deleteMyItems({id}));
}

// For editing content of the items
headingDecider(id:any){
  // console.log(id)
  // const i = this.items.findIndex((e:{ id: any; }) =>e.id == id);
  // if(i > 1){
  //   console.log(this.items[i]);
  //     this.header = "Edit Details";
  //     }else{
  //     this.header = "Add Employee";
  //     }
  }




  
  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return `with: ${reason}`;
  //   }
  // }


}

// ng-Bootstrap functions
  // open(content:any) {
  //   this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
  //     this.closeResult = `Closed with: ${result}`;
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //   });
  // }