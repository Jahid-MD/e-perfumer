import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { AuthPermission } from '../directives/authpermission.directive';
import { CommonModule } from '@angular/common';
import { AppHighlight } from '../directives/background.directive';
import { Capitalize } from '../pipes/capitilize.pipe';
import { CapitalizeString } from '../pipes/capitalizeString.pipe';

@Component({
    selector:'data-binding',
    imports:[FormsModule, AuthPermission, CommonModule,AppHighlight,Capitalize, CapitalizeString],
     template:`
    <div [appHighlight]="''">{{data}}</div>
    <input [(ngModel)]="data2">
    <div>{{data2}}</div>
    <div>{{"zahid" | capitalize}}</div>
    @for (item of arr | capitalizeString ; track item.name){
        <div>{{item.name }}</div>
    }
    <button [authPermission]="true" (click)="addItem()" >Admin button</button>
    <button (click)="outputEvent.emit('sfsdf')">Click</button>
    `,
    standalone:true,
})
export class DataBindingComponent {
    @Input() data!:string;
    @Output() outputEvent = new EventEmitter();
    data2:string = "Default";
    arr:Array<{name: string}> =[{ name: "zahid"}, { name: "misba"}]
    addItem(){
        // this.arr.push({name: "new item"});
        this.arr = [...this.arr, {name: "new item"}];
    }
}
 