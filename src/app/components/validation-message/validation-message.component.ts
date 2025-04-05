import {Component, Input} from '@angular/core';
import {AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-validation-message',
  standalone: true,
  imports: [],
  templateUrl: './validation-message.component.html',
  styleUrl: './validation-message.component.scss'
})
export class ValidationMessageComponent {

  @Input()
  control: AbstractControl | null = null;

}
