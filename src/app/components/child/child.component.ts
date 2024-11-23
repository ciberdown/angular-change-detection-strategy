import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  template: `<h2>value in child: {{ data.val }}</h2>
    <button (click)="enableDetectChanges()">detect changes</button>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent implements OnChanges {
  @Input() data!: { val: number };

  detectChanges = false;

  constructor(private _cdr: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.detectChanges) this._cdr.detectChanges();
  }

  enableDetectChanges() {
    this.detectChanges = true;
  }
}
