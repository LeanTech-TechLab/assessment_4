import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PageNotFoundComponent } from "@shared/components/page-not-found/page-not-found.component";
import { Routing } from "./app-routing.module";
import { LoginLayoutModule } from "./layouts/login-layout/login-layout.module";
import { MainLayoutModule } from "./layouts/main-layout/main-layout.module";
import { AuthenticationService } from "@app-core/authentication/authentication.service";
import {StoreModule} from "@ngrx/store";
import {reducers} from "@app-core/store";
import {environment} from "@environments/environment";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    Routing,
    LoginLayoutModule,
    MainLayoutModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.PRODUCTION }),
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
