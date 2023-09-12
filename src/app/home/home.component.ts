import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public name: string = 'TUan anh dsdsds' ;
  public age: number = 19;
  
  public resetName() : void {
   this.name = '';
  }

  public traicay: string[]  = ["Tao","Nho","Xoai"]

  public sothutu: number[] = [1,2,3,4,5,6,7,8]

  public people: {names: string,ages:number} [] =[
    {names:"john",ages:15},
    {names:"john 1",ages:153},
    {names:"john 2",ages:154} ,
    {names:"john 3",ages:154}
  ]

 
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.traicay);
  }
}
