import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent implements OnInit {
  @Input() content;

  constructor() { }

  ngOnInit() {
  }

}
