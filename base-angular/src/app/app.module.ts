import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutClientComponent } from './layouts/layout-client/layout-client.component';
import { LayoutAdminComponent } from './layouts/layout-admin/layout-admin.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { HomeComponent } from './pages/home/home.component';
import { LienheComponent } from './pages/lienhe/lienhe.component';
import { PagdetailComponent } from './pages/pagdetail/pagdetail.component';
import { BlogComponent } from './pages/blog/blog.component';
import { LocationComponent } from './pages/location/location.component';
import { DetaillocationComponent } from './pages/location/detaillocation/detaillocation.component'
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { GdAdminComponent } from './components/gd-admin/gd-admin.component';
// import { ListdiadiemComponent } from './admin/diadiem/listdiadiem/listdiadiem.component';
// import { AdddiadiemComponent } from './admin/diadiem/adddiadiem/adddiadiem.component';
// import { EditdiadiemComponent } from './admin/diadiem/editdiadiem/editdiadiem.component';
import { ListtourComponent } from './admin/quanlitour/listtour/listtour.component';
import { EdittourComponent } from './admin/quanlitour/edittour/edittour.component';
import { AddtourComponent } from './admin/quanlitour/addtour/addtour.component';
import { TourComponent } from './pages/tour/tour.component';
import { DetailtourComponent } from './pages/tour/detailtour/detailtour.component';
import { ListquanliusersComponent } from './admin/quanliusers/quanliusers.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LayoutClientComponent,
    LayoutAdminComponent,
    NotfoundComponent,
    HomeComponent,
    LienheComponent,
    PagdetailComponent,
    BlogComponent,
    LocationComponent,
    TourComponent,
    DetailtourComponent,
    DetaillocationComponent,
    DashboardComponent,
    GdAdminComponent,
    // ListdiadiemComponent,
    // AdddiadiemComponent,
    // EditdiadiemComponent,
    ListtourComponent,
    AddtourComponent,
    EdittourComponent,
    ListquanliusersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
