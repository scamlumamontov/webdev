import { Component, } from '@angular/core'; //ChangeDetectorRef 
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { range } from 'rxjs';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FormsModule, RouterOutlet, NgFor, NgStyle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';

  //constructor(private cd: ChangeDetectorRef) {}
  
  task = "";
  tasks:string[] = ["do the dishes", "clean the house"];
  status:boolean[] = [false, false];
  counter:number = 0;

  add():void{
    this.counter += 1;
    this.tasks.push(this.task);
    this.status.push(false);
    this.task="";
  }

  del(q:number):void{
    this.tasks.splice(q, 1);
    this.status.splice(q, 1);
  }

  change(q:number):void{
    this.status[q] = !this.status[q];
  }
}