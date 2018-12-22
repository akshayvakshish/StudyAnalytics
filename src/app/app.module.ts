import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './header/carousel/carousel.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { BarGraphsComponent } from './Introduction/bar-graphs/bar-graphs.component';
import { PieChartsComponent } from './Introduction/pie-charts/pie-charts.component';
import { GraphsComponent } from './Introduction/graphs/graphs.component';
import { ChartsModule } from 'ng2-charts';
import { YoutubePlayerModule } from 'ngx-youtube-player';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';
import { MediaPlayerComponent } from './media-player/media-player.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseCardComponent } from './Courses/course-card/course-card.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ViewCourseComponent } from './view-course/view-course.component';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, CarouselComponent, IntroductionComponent, BarGraphsComponent, PieChartsComponent, GraphsComponent, YoutubePlayerComponent, MediaPlayerComponent, CoursesComponent, CourseCardComponent, SideNavComponent, ViewCourseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,NgbModule,ChartsModule,YoutubePlayerModule,VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
