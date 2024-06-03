import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Poonam-Portfolio';
  public sidebarShow: boolean = false;

  // public navMenu=document.getElementById('nav-item');
  // public toggleMenu=document.getElementById('nav-toggle');
  // public closeMenu=document.getElementById('nav-close'); 
  
  // @HostListener('click', ['$event'])
  // handleClick(event: Event) {
  //   const target = event.target as HTMLElement;
    
  //   if (document.getElementById('nav-toggle')) {
  //     target.addEventListener('click',()=>{
  //       target.classList.toggle('show');
  //       })
  //   } else if (target.closest('nav-close')) {
  //     this.closeMenu();
  //   }
  // }

  
  // toggleMenu() {
  //   this.menuVisible = !this.menuVisible;
  // }

  // closeMenu() {
  //   this.menuVisible = false;
  // }

  /*===== MENU SHOW Y HIDDEN =====*/
  // public navMenu=document.getElementById('nav-item');
  // public toggleMenu=document.getElementById('nav-toggle');
  // public closeMenu=document.getElementById('nav-c.lose');

  // SHOW
  // this.toggleMenu.addEventListener('click',()=>{
  //   this.navMenu.classList.toggle('show');
  // })

  // HIDDEN


  /*===== ACTIVE AND REMOVE MENU =====*/


  /*===== SCROLL SECTIONS ACTIVE LINK =====*/
}
