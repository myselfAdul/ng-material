import { Component } from '@angular/core';
import { MatModule } from '../../appModules/mat.module';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
