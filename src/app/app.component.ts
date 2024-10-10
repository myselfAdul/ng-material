import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatModule } from './appModules/mat.module';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { MainComponent } from "./pages/main/main.component";




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatModule, HeaderComponent, FooterComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-material';
}
