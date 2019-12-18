import {ModalsComponent} from './views/modals/modals.component';
import {BasicTableComponent} from './views/tables/basic-table/basic-table.component';
import {Profile1Component} from './views/profile/profile1/profile1.component';
import {RouterModule, Route} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {Dashboard1Component} from './views/dashboards/dashboard1/dashboard1.component';
import {HelpComponent} from './views/help/help.component';
import {AdminComponent} from './views/admin/admin.component';
import {PriceComponent} from './views/admin/price/price.component';
import {PeriodReportComponent} from './views/admin/period-report/period-report.component';
import {AppartmentReportComponent} from './views/admin/appartment-report/appartment-report.component';


const routes: Route[] = [
    {path: '', pathMatch: 'full', redirectTo: 'dashboards/v1'},
    {path: 'help', component: HelpComponent},
    {
        path: 'admin', children:
        [
            {path: 'apartments', component: AdminComponent},
            {path: 'apartment-report', component: AppartmentReportComponent},
            {path: 'period-report', component: PeriodReportComponent},
            {path: 'price', component: PriceComponent}
        ]
    },
    {
        path: 'dashboards', children:
            [
                {path: 'v1', component: Dashboard1Component},
            ]
    },
    {
        path: 'profiles', children:
            [
                {path: 'profile1', component: Profile1Component},
            ]
    },
    {
        path: 'tables', children:
            [
                {path: 'table1', component: BasicTableComponent},
            ]
    },

    {path: 'modals', component: ModalsComponent},
    {path: '**', component: Dashboard1Component},

];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
