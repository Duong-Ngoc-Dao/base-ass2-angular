import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { LayoutClientComponent } from './layouts/layout-client/layout-client.component';
import { HomeComponent } from './pages/home/home.component';
import { LayoutAdminComponent } from './layouts/layout-admin/layout-admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { NotfoundComponent } from './pages/notfound/notfound.component'; 
import { LienheComponent } from './pages/lienhe/lienhe.component';
import { PagdetailComponent } from './pages/pagdetail/pagdetail.component';
import { LocationComponent } from './pages/location/location.component';
import { TourComponent } from './pages/tour/tour.component';
import { DetailtourComponent } from './pages/tour/detailtour/detailtour.component'
import { DetaillocationComponent } from './pages/location/detaillocation/detaillocation.component'
import { BlogComponent } from './pages/blog/blog.component'; 
import { ListdiadiemComponent } from './admin/diadiem/listdiadiem/listdiadiem.component';
import { AdddiadiemComponent } from './admin/diadiem/adddiadiem/adddiadiem.component';
import { EditdiadiemComponent } from './admin/diadiem/editdiadiem/editdiadiem.component';
import { ListtourComponent } from './admin/quanlitour/listtour/listtour.component';
import { EdittourComponent } from './admin/quanlitour/edittour/edittour.component';
import { AddtourComponent } from './admin/quanlitour/addtour/addtour.component';


const routes: Routes = [
  {
    path: '', component: LayoutClientComponent,
    children: [
      { path: '', component: HomeComponent }, 
      { path: 'pagedetail', component: PagdetailComponent }, 
      { path: 'lienhe', component: LienheComponent }, 
      { path: 'posts', component: BlogComponent },  
      { path: 'location', component: LocationComponent }, 
      { path: 'location/detail/:id', component: DetaillocationComponent }, 
      { path: 'tour', component: TourComponent }, 
      { path: 'tour/detail/:id', component: DetailtourComponent },
    ]
  },
  {
    path: 'admin',
    component: LayoutAdminComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent }, 
      { path: 'diadiem', component: ListdiadiemComponent }, 
      { path: 'adddiadiem', component: AdddiadiemComponent }, 
      { path: 'editdiadiem', component: EditdiadiemComponent }, 
      { path: 'quanlitour', component: ListtourComponent },
      { path: 'edittour', component: EdittourComponent },
      { path: 'addtour', component: AddtourComponent },
    ],
  },

  { path: '**', component: NotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
