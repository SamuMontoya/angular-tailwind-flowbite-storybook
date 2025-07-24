import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, input, output } from '@angular/core';
import { Spinner } from "../spinner/spinner";

@Component({
  selector: 'storybook-button',
  standalone: true,
  imports: [CommonModule, Spinner],
  templateUrl: "./button.html",
})
export class ButtonComponent {
  label = input('Button')
  isLoading = input(false)
  disabled = input(false)

  onClick = output()
}
