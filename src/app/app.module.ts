import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { IncidentService } from './pages/tables/tables.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { CdkTreeModule } from '@angular/cdk/tree';
import { CdkTableModule } from '@angular/cdk/table';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { OverlayModule } from '@angular/cdk/overlay';
import { TreeModule } from '@circlon/angular-tree-component';
import { AuthService } from '../app/auth.service';
import { ToastrModule } from 'ngx-toastr';


@NgModule({

  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ToastrModule.forRoot({timeOut: 10000,
      positionClass: 'toast-bottom-left',
      preventDuplicates: true
    }
    ),
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    NgxPaginationModule,
    CdkTableModule,
    OverlayModule,
    PortalModule,
    ScrollingModule,
    TreeModule
  ],
  declarations: [AppComponent, AdminLayoutComponent, AuthLayoutComponent],
  providers: [IncidentService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
