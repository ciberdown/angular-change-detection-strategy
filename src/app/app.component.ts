import {
  ChangeDetectorRef,
  Component,
  DoCheck,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { ParentComponent } from './components/parent/parent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ParentComponent],
  template: `<div>
    <app-parent />
  </div>`,
})
export class AppComponent {
  title = 'angular-change-detection-strategy';

  constructor(private _cdr: ChangeDetectorRef) {}
}
