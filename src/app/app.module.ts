import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {ContentComponent} from './content/content.component';
import {FooterComponent} from './footer/footer.component';
import {ContactsComponent} from './contacts/contacts.component';
import {AboutComponent} from './about/about.component';
import {StartPageComponent} from './start-page/start-page.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LeatherProductsComponent } from './leather-products/leather-products.component';
import { BlogComponent } from './blog/blog.component';
import { HeaderLogoComponent } from './header-logo/header-logo.component';
import { HeaderBotomComponent } from './header-botom/header-botom.component';
import { BasketComponent } from './basket/basket.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContentProductDescriptionComponent } from './content-product-description/content-product-description.component';

const appRoutes: Routes = [
    {path: 'start', component: StartPageComponent},
    {path: 'contacts', component: ContactsComponent},
    {path: 'about', component: AboutComponent},
];

@NgModule({
    declarations: [
        AppComponent,
        ContentComponent,
        FooterComponent,
        ContactsComponent,
        AboutComponent,
        StartPageComponent,
        MainNavComponent,
        LeatherProductsComponent,
        BlogComponent,
        HeaderLogoComponent,
        HeaderBotomComponent,
        BasketComponent,
        ContactFormComponent,
        ContentProductDescriptionComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
