import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthLayoutRoutes } from './auth-layout.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import {CdkTableModule} from '@angular/cdk/table';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTreeModule} from '@angular/cdk/tree';
import {OverlayModule} from '@angular/cdk/overlay';
// import {RtlComponent } from '../../pages/rtl/rtl.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    CdkTableModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    OverlayModule,
    PortalModule,
    ScrollingModule
  ],
  declarations: [
    // RtlComponent,
  ]
})
export class AuthLayoutModule { }
