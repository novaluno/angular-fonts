import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-font-demo',
  templateUrl: './font-demo.component.html',
  styleUrls: ['./font-demo.component.css']
})
export class FontDemoComponent implements OnInit {

  @Input() fontDescription: string;
  @Input() fontFamily: string;
  @Input() fontWeight: string;
  @Input() fontStyle: string;

  public sampleText = 'The quick brown fox jumps over the lazy dog.';

  constructor() { }

  ngOnInit() {
  }

}
