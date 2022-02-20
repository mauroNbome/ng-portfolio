import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogComponent } from './blog/blog.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    BlogComponent,
    ContactMeComponent,
  ],
  imports: [CommonModule],
  exports: [
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    BlogComponent,
    ContactMeComponent,
  ],
})
export class LayoutsModule {}