import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [HeaderComponent, PageNotFoundComponent],
  imports: [CommonModule, AuthModule, HttpClientModule, RouterModule],
  exports: [AuthModule, HeaderComponent, PageNotFoundComponent],
})
export class CoreModule {}
