import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataBindingComponent } from './components/data-binding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DataBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'e-perfumer';
  outputEvent(event:any){
    console.log('Output Event Triggered');
  }

}
