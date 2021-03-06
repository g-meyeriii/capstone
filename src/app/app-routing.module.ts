import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';

import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';

import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';

import { RequestListComponent } from './request/request-list/request-list.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { RequestCreateComponent } from './request/request-create/request-create.component';
import { RequestEditComponent } from './request/request-edit/request-edit.component';
import { RequestListReviewedOnlyComponent } from './request/request-list-reviewed-only/request-list-reviewed-only.component';
import { DisapprovedComponent } from './request/set-to-approved/disapproved/disapproved.component';


import { RequestLineListComponent } from './request-line/request-line-list/request-line-list.component';
import { RequestLineDetailComponent } from './request-line/request-line-detail/request-line-detail.component';
import { RequestLineDeleteComponent } from './request-line/request-line-delete/request-line-delete.component';
import { RequestLineCreateComponent } from './request-line/request-line-create/request-line-create.component';
import { RequestLineEditComponent } from './request-line/request-line-edit/request-line-edit.component';


const routes: Routes = [
  {path: "",redirectTo:"/users/login", pathMatch: "full"},

  {path: "users/login", component:UserLoginComponent},
  {path: "users/list", component: UserListComponent},
  {path: "users/detail/:id", component: UserDetailComponent},
  {path: "users/create", component: UserCreateComponent},
  {path: "users/edit/:id", component: UserEditComponent},

  {path: "vendors/list",component: VendorListComponent},
  {path: "vendors/detail/:id", component: VendorDetailComponent},
  {path: "vendors/create", component: VendorCreateComponent},
  {path: "vendors/edit/:id", component: VendorEditComponent},

  {path: "products/list",component: ProductListComponent},
  {path: "products/detail/:id", component: ProductDetailComponent},
  {path: "products/create", component: ProductCreateComponent},
  {path: "products/edit/:id", component: ProductEditComponent},

  {path: "requests/list", component: RequestListComponent},
  {path: "requests/detail/:id", component: RequestDetailComponent},
  {path: "requests/create", component: RequestCreateComponent},
  {path: "requests/edit/:id", component: RequestEditComponent},
  {path: "requests/requestreviewedonly", component: RequestListReviewedOnlyComponent},
  {path: "requests/disapproved/:id", component: DisapprovedComponent},

  {path: "requestlines/list/:id", component: RequestLineListComponent},
  {path: "requestlines/detail/:id", component: RequestLineDetailComponent},
  {path: "requestLines/delete/:id", component: RequestLineDeleteComponent},
  {path: "requestlines/create/:id", component: RequestLineCreateComponent},
  {path: "requestlines/edit/:id", component: RequestLineEditComponent},
  

  {path: "**", component: RequestListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
