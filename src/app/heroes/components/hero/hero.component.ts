import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public nombre: string = "ironman";
  public edad:  number = 40;

  get capitalizedName():string{
    return this.nombre.toUpperCase();
  }

  getHeroDescription(): string{
    return `${ this.nombre } - ${ this.edad }`;
  }

  changeHero(): void {
    this.nombre="spiderman";
  }

  changeAge(): void {
    this.edad=35;
  }

  resetForm(): void{
    this.nombre = "ironman";
    this.edad = 40;
  }
}
