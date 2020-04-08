import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppComponentComponent } from './app-component/app-component.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserSearchPipe } from './user/user-search.pipe';
import { VendorSearchPipe } from './vendor/vendor-search.pipe';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { RequestLineSearchPipe } from './request-line/request-line-search.pipe';
import { RequestLineListComponent } from './request-line/request-line-list/request-line-list.component';
import { RequestLineEditComponent } from './request-line/request-line-edit/request-line-edit.component';
import { RequestLineDetailComponent } from './request-line/request-line-detail/request-line-detail.component';
import { RequestLineCreateComponent } from './request-line/request-line-create/request-line-create.component';
import { RequestListComponent } from './request/request-list/request-list.component';
import { RequestEditComponent } from './request/request-edit/request-edit.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { RequestCreateComponent } from './request/request-create/request-create.component';
import { ProductSearchPipe } from './product/product-search.pipe';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { RequestSearchPipe } from './request/request-search.pipe';
import { MenuitemComponent } from './menu/menuitem/menuitem.component';
import { MenuComponent } from './menu/menu/menu.component';
import { SortPipe } from './pipes/sort.pipe';
import { RequestToReviewComponent } from './request/request-to-review/request-to-review.component';
import { DisapprovedComponent } from './request/set-to-approved/disapproved/disapproved.component';
import { RequestListReviewedOnlyComponent } from './request/request-list-reviewed-only/request-list-reviewed-only.component';
import { RequestListLinesComponent } from './request/request-list-lines/request-list-lines.component';
import { RequestTotalChangeComponent } from './request-line/request-total-change/request-total-change.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { SystemService } from './system/system.service';
import { RequestLineDeleteComponent } from './request-line/request-line-delete/request-line-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    AppComponentComponent,
    UserListComponent,
    UserDetailComponent,
    UserEditComponent,
    UserCreateComponent,
    UserSearchPipe,
    VendorSearchPipe,
    VendorListComponent,
    VendorEditComponent,
    VendorDetailComponent,
    VendorCreateComponent,
    RequestLineSearchPipe,
    RequestLineListComponent,
    RequestLineEditComponent,
    RequestLineDetailComponent,
    RequestLineCreateComponent,
    RequestListComponent,
    RequestEditComponent,
    RequestDetailComponent,
    RequestCreateComponent,
    ProductSearchPipe,
    ProductListComponent,
    ProductEditComponent,
    ProductDetailComponent,
    ProductCreateComponent,
    RequestSearchPipe,
    MenuitemComponent,
    MenuComponent,
    SortPipe,
    RequestToReviewComponent,
    DisapprovedComponent,
    RequestListReviewedOnlyComponent,
    RequestListLinesComponent,
    RequestTotalChangeComponent,
    UserLoginComponent,
    RequestLineDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
