import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-track',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './track.component.html',
  styleUrl: './track.component.css',
})
export class TrackComponent {
  tracks: Track[] = [
    {
      id: 1,
      name: 'PD',
      branches: ['Benha', 'Assuit', 'Smart'],
    },
    {
      id: 2,
      name: 'Mobile',
      branches: ['Aswan', 'Ismalia', 'Smart'],
    },
    {
      id: 1,
      name: 'Graphic',
      branches: ['Assuit', 'Mansoura'],
    },
    {
      id: 4,
      name: 'UI/UX',
      branches: [],
    },
  ];
  selectedTrack?: {
    id: number;
    name: string;
    branches: string[];
  } | null;
}

interface Track {
  id: number;
  name: string;
  branches: string[];
}
