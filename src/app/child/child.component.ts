import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
   @Input() p_id:any
   @Input() p_name:any
   @Input() p_cost:any
 
    @Output() my_var:EventEmitter<any> = new EventEmitter();
     
    clickMe():any{
      this.my_var.emit('${this.p_id}.....${this.p_name}.....${this.p_cost}');
        };
  constructor() { }

  ngOnInit(): void {
  }

};
