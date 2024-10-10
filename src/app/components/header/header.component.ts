import { Component } from '@angular/core';
import { MatModule } from '../../appModules/mat.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  
}
