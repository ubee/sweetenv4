import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { ClientprofileComponent } from '../../clientprofile/clientprofile.component';
import { ContractorListComponent } from '../../contractor-list/contractor-list.component';
import { BusinessrenovationComponent } from '../../businessrenovation/businessrenovation.component';
import { BusinessprojectviewComponent } from '../../businessprojectview/businessprojectview.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'clientprofile',  component: ClientprofileComponent },
    { path: 'contractorlist',  component: ContractorListComponent },
    { path: 'businessRenovation',  component:BusinessrenovationComponent },
    { path: 'businessProjectView',  component:BusinessprojectviewComponent },



];
