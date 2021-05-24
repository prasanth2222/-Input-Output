import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
 products:any[] = [
   {"p_id":111,"p_name":"p_one","p_cost":100000},
   {"p_id":222,"p_name":"p_two","p_cost":200000},
   {"p_id":333,"p_name":"p_three","p_cost":300000},
   {"p_id":444,"p_name":"p_four","p_cost":400000}
 ];

 my_fun(data:any){
   alert(data);
 }
  constructor() { }

  ngOnInit(): void {
  }

}
