import { FormsModule } from '@angular/forms';
import { FilterPopoverComponent } from './filter-popover/filter-popover.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ViewAssignmentComponent } from './view-assignment/view-assignment.component';
import { FootagePortalComponent } from './footage-portal/footage-portal.component';
import { ExistNewsMonitoringComponent } from './exist-news-monitoring/exist-news-monitoring.component';
import { NewsMonitoringCardComponent } from './news-monitoring-card/news-monitoring-card.component';
import { MonitoringComponent } from './monitoring/monitoring.component';
import { AssignmentPortalComponent } from './assignment-portal/assignment-portal.component';
import { FiltersComponent } from './filters/filters.component';
import { VideoThumbComponent } from './video-thumb/video-thumb.component';
import { BeatsComponent } from './beats/beats.component';
import { NotificationBoxComponent } from './notification-box/notification-box.component';
import { AssignmentCardComponent } from './assignment-card/assignment-card.component';
import { AssignmentCommentBoxComponent } from './assignment-comment-box/assignment-comment-box.component';
import { AssignmentNewsBoxComponent } from './assignment-news-box/assignment-news-box.component';
import { MyPointsComponent } from './my-points/my-points.component';
import { DayPlanCardComponent } from './day-plan-card/day-plan-card.component';
import { LeagueCardComponent } from './league-card/league-card.component';
import { SlugSearchComponent } from './slug-search/slug-search.component';
import { AssignmentCard2Component } from './assignment-card2/assignment-card2.component';
import { DayplanCommentsComponent } from './dayplan-comments/dayplan-comments.component';
import { DayplanNewsComponent } from './dayplan-news/dayplan-news.component';


@NgModule({
  declarations: [ViewAssignmentComponent,
    FootagePortalComponent,
    ExistNewsMonitoringComponent,
    NewsMonitoringCardComponent,
    MonitoringComponent,
    AssignmentPortalComponent,
    FiltersComponent,
    VideoThumbComponent,
    BeatsComponent,
    NotificationBoxComponent,
    FilterPopoverComponent,
    AssignmentCardComponent,
    AssignmentCommentBoxComponent,
    AssignmentNewsBoxComponent,
    MyPointsComponent,
    DayPlanCardComponent,
    LeagueCardComponent,
    SlugSearchComponent,
    AssignmentCard2Component,
    DayplanCommentsComponent,
    DayplanNewsComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    IonicModule
  ],
  entryComponents: [
    ViewAssignmentComponent,
    FootagePortalComponent,
    ExistNewsMonitoringComponent,
    NewsMonitoringCardComponent,
    MonitoringComponent,
    AssignmentPortalComponent,
    FiltersComponent,
    VideoThumbComponent,
    BeatsComponent,
    NotificationBoxComponent,
    FilterPopoverComponent,
    AssignmentCardComponent,
    AssignmentCommentBoxComponent,
    AssignmentNewsBoxComponent,
    MyPointsComponent,
    DayPlanCardComponent,
    LeagueCardComponent,
    SlugSearchComponent,
    AssignmentCard2Component,
    DayplanCommentsComponent,
    DayplanNewsComponent
  ],
  exports: [
    ViewAssignmentComponent,
    FootagePortalComponent,
    ExistNewsMonitoringComponent,
    NewsMonitoringCardComponent,
    MonitoringComponent,
    AssignmentPortalComponent,
    FiltersComponent,
    VideoThumbComponent,
    BeatsComponent,
    NotificationBoxComponent,
    FilterPopoverComponent,
    AssignmentCardComponent,
    AssignmentCommentBoxComponent,
    AssignmentNewsBoxComponent,
    MyPointsComponent,
    DayPlanCardComponent,
    LeagueCardComponent,
    SlugSearchComponent,
    AssignmentCard2Component,
    DayplanCommentsComponent,
    DayplanNewsComponent
  ]
})
export class ComponentsModule { }
