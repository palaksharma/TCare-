import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
// import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { LoginComponent } from 'src/app/login/login.component'
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapComponent } from '../../pages/map/map.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UserComponent } from '../../pages/user/user.component';
import { TreeChecklistExample } from '../../pages/tables/tables.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { TreeModule } from '@circlon/angular-tree-component';
// import {MatTreeModule} from '@angular/material/tree';
import {CdkTreeModule} from '@angular/cdk/tree';
import {CdkTableModule} from '@angular/cdk/table';
// import {MatTableModule} from '@angular/material/table';
// import { MatCheckboxModule } from '@angular/Material';

import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {OverlayModule} from '@angular/cdk/overlay';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RtlComponent } from '../../pages/rtl/rtl.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    CdkTableModule,
    // BrowserModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    OverlayModule,
    PortalModule,
    ScrollingModule,
    // MatFormFieldModule,
    TreeModule
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TreeChecklistExample,
    IconsComponent,
    TypographyComponent,
    NotificationsComponent,
    LoginComponent,
    MapComponent,
    RtlComponent
  ]
})
export class AdminLayoutModule {}
