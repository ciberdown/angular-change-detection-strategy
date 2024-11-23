import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  template: `<section>
    <h2>in parent value: {{ data.val }}</h2>
    <button (click)="increaseReference()">increase reference</button>
    <button (click)="increaseData()">increase data</button>

    <app-child [data]="data" />
  </section>`,
})
export class ParentComponent {
  data = {
    val: 0,
  };

  increaseReference() {
    this.data = {
      val: this.data.val + 1,
    };
  }

  increaseData() {
    this.data.val++;
  }
}
