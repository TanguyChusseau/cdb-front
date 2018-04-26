import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CompanyService } from './company.service';
import { AppRoutingModule } from './/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { HeaderModule } from './header/header.module';
import { HttpClientModule } from '@angular/common/http';
import { CompanyModule } from './company/company.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    CustomMaterialModule,
    HeaderModule,
    HttpClientModule,
    AppRoutingModule,
    CompanyModule,
  ],
  providers: [CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
