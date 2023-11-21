import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { StateService } from './state/state.service';

@Component({
  standalone: true,
  imports: [RouterModule, WelcomeComponent],
  selector: 'tm-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'tm';

  state = inject(StateService);

  constructor() {}
}
