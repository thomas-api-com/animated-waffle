import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tm-welcome',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css',
})
export class WelcomeComponent {}
