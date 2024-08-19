import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horoes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman','Ironman','Hulk','Black Widow','Capitan America'];
  public deleteHero?: string;

  removeLastHero(): void{
   this.deleteHero= this.heroNames.pop();
  }
}
