import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';


declare var $;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
@ViewChild('panel') panel:ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {

    $('.dropdown').on('show.bs.dropdown',function() {
      $(this).find('.dropdown-menu').first().stop(true, true).slideToggle(800);
  });
  
  $('.dropdown').on('hide.bs.dropdown',function() {
      $(this).find('.dropdown-menu').first().stop(true, true).slideToggle(800);
  });
  }



 

}
