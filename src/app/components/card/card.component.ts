import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass'],
})
export class CardComponent implements OnInit {
  @Input()
  gameCover: string = '';
  @Input()
  gameLabel: string = '';
  @Input()
  gameType: string = '? | PS4';
  @Input()
  gamePrice: string = 'R$ 144,54';

  constructor() {}

  ngOnInit(): void {}
}
