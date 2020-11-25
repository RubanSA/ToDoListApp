import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-example',
  templateUrl: './style-example.component.html',
  styleUrls: ['./style-example.component.css']
})
export class StyleExampleComponent implements OnInit {
  header: string;
  text: string;
  size: number;
  styles = {
    verdanaFont: true,
    segoeFont: true
  }

  stylesDescription= {color: 'magenta', fontSize: '16px'};
  constructor() { }

  ngOnInit(): void {
    this.header = "Angular ngStyle directive";
    this.text = "Angular - очень популярный фреймворк, позволяющий собирать приложение из компонентов";
    this.size = 14;
  }

  toggle(){
    this.styles.segoeFont=!this.styles.segoeFont;
  }

  up(){
    this.size++;
    this.stylesDescription.fontSize = this.size+"px";
  }

  down(){
    this.size--;
    this.stylesDescription.fontSize = this.size+"px";
  }

}
