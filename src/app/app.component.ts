import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './Components/nav/nav.component';
import { SliderComponent } from './Components/slider/slider.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProductComponent } from './Components/product/product.component';
import { StudentComponent } from './Components/student/student.component';
import { TrackComponent } from './Components/track/track.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavComponent,
    SliderComponent,
    FooterComponent,
    ProductComponent,
    StudentComponent,
    TrackComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'first-proj';
}
