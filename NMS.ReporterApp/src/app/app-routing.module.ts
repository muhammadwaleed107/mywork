import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicPage } from './public/public.page';
import { SigninPage } from './public/signin/signin.page';
import { PrivatePage } from './private/private.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  },
  { path: 'sign-in', component:SigninPage},
  {
    path: '',
    component: PublicPage,
    children: [
      // { path: '', redirectTo: 'sign-in',  pathMatch: 'full'},
      // { path: 'sign-in', loadChildren: './public/signin/signin.module#SigninPageModule' }
      { path: 'sign-in', component:SigninPage}
    ]
  },
  {
    path: 'home',
    component: PrivatePage,
    children: [
      // { path: '', redirectTo: 'sign-in',  pathMatch: 'full'},
      // { path: '', loadChildren: './home/home.module#HomePageModule', data: { title: "NMS"} },
      { path: '', loadChildren: './private/dashboard/dashboard.module#DashboardPageModule', data: { title: "NMS"} },
      // { path: '', loadChildren: './private/exist-news/exist-news.module#ExistNewsPageModule', data: { title: "NMS"} },
      { path: 'new-news', loadChildren: './private/new-news/new-news.module#NewNewsPageModule', data: { title: "NMS"} },
      { path: 'new-news/:sid/:sname', loadChildren: './private/new-news/new-news.module#NewNewsPageModule', data: { title: "NMS"} },
      { path: 'guest-assignment', loadChildren: './private/guest-assignment/guest-assignment.module#GuestAssignmentPageModule', data: { title: "NMS"} },
      { path: 'guest-cancelletion', loadChildren: './private/guest-assignment/guest-cancellation/guest-cancellation.module#GuestCancellationPageModule' },
      { path: 'guest-confirmation', loadChildren: './private/guest-assignment/guest-confirmation/guest-confirmation.module#GuestConfirmationPageModule' },

      { path: 'exist-assignment', loadChildren: './private/exist-assignment/exist-assignment.module#ExistAssignmentPageModule', data: { title: "NMS"} },
      { path: 'mynotification', loadChildren: './private/notification-page/notification-page.module#NotificationPagePageModule', data: { title: "NMS"} },
     // { path: 'assignment-detail', loadChildren: './private/assignment-detail/assignment-detail.module#AssignmentDetailPageModule' , data: { title: "NMS"} },
      // { path: 'list', loadChildren: './list/list.module#ListPageModule' },
      //{ path: 'assignment-detail', loadChildren: './private/assignment-detail/assignment-detail.module#AssignmentDetailPageModule', data: { title: "NMS"}  },
      { path: 'closed-assignment', loadChildren: './private/closed-assignment/closed-assignment.module#ClosedAssignmentPageModule' },
      { path: 'add-assignment', loadChildren: './private/add-assignment/add-assignment.module#AddAssignmentPageModule', data: { title: "NMS"} },
      { path: 'digital-portal', loadChildren: './private/digital-portal/digital-portal.module#DigitalPortalPageModule', data: { title: "NMS"}},
      { path: 'news-monitoring', loadChildren: './private/news-monitoring/news-monitoring.module#NewsMonitoringPageModule', data: { title: "NMS"} },
      { path: 'single-assignment', loadChildren: './private/single-assignment/single-assignment.module#SingleAssignmentPageModule', data: { title: "NMS"}  },
      // { path: 'new-news-monitoring', loadChildren: './private/new-news-monitoring/new-news-monitoring.module#NewNewsMonitoringPageModule',data: { title: "NMS"} }
      { path: 'add-happening', loadChildren: './private/add-happening/add-happening.module#AddHappeningPageModule', data: { title: "NMS"} },
      { path: 'day-plan', loadChildren: './private/day-plan/day-plan.module#DayPlanPageModule', data: { title: "NMS"}  },
      { path: 'league-stats', loadChildren: './private/league-stats/league-stats.module#LeagueStatsPageModule', data: { title: "NMS"}  },
      { path: 'upcoming-happening', loadChildren: './private/add-happening/add-happening.module#AddHappeningPageModule', data: { title: "NMS"}  },
      { path: 'happening-calender', loadChildren: './private/happening-calender/happening-calender.module#HappeningCalenderPageModule' },
      { path: 'league-detail', loadChildren: './private/league-detail/league-detail.module#LeagueDetailPageModule' },
    ]
  },
  

  



  

  

  

  

  

  

  

  

  // { path: 'private', loadChildren: './private/private.module#PrivatePageModule' },
  // { path: 'public', loadChildren: './public/public.module#PublicPageModule' },
  // { path: 'signin', loadChildren: './public/signin/signin.module#SigninPageModule' },
  // { path: 'dashboard', loadChildren: './private/dashboard/dashboard.module#DashboardPageModule' },
  // { path: 'exist-news', loadChildren: './private/exist-news/exist-news.module#ExistNewsPageModule' },
  // { path: 'guest-assignment', loadChildren: './private/guest-assignment/guest-assignment.module#GuestAssignmentPageModule' },
  // { path: 'exist-assignment', loadChildren: './private/exist-assignment/exist-assignment.module#ExistAssignmentPageModule' },
  // { path: 'new-news', loadChildren: './private/new-news/new-news.module#NewNewsPageModule' },
  // { path: 'notification-page', loadChildren: './private/notification-page/notification-page.module#NotificationPagePageModule' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
