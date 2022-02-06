import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() //get data from parent component
  channelName ="ghailene";

  @Output()
  sendMessageEmitter = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  sendMessageToParent(e:any){
    this.sendMessageEmitter.emit(e.target.value)
  }

}
