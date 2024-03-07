import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactsComponent } from './components/pages/contacts/contacts.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactsComponent,
    ProjectsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio-fred';
}
