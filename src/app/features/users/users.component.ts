import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent, CardContentComponent } from '../../../lib/components/ui/card.component';
import { ButtonComponent } from '../../../lib/components/ui/button.component';
import { BadgeComponent } from '../../../lib/components/ui/badge.component';
import { AvatarComponent } from '../../../lib/components/ui/avatar.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    CardContentComponent,
    ButtonComponent,
    BadgeComponent,
    AvatarComponent
  ],
  template: `
    <div class="p-6">
      <div class="flex justify-between items-center mb-6">
        <div>
          <h1 class="text-2xl font-bold">Users</h1>
          <p class="text-muted-foreground">Manage user accounts and permissions</p>
        </div>
        <ui-button>
          <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M15,14C12.33,14 7,15.33 7,18V20H23V18C23,15.33 17.67,14 15,14M6,10V7H4V10H1V12H4V15H6V12H9V10M15,12A4,4 0 0,0 19,8A4,4 0 0,0 15,4A4,4 0 0,0 11,8A4,4 0 0,0 15,12Z" />
          </svg>
          Add User
        </ui-button>
      </div>
      
      <!-- Users Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        @for (user of mockUsers; track user.id) {
          <ui-card>
            <ui-card-content class="p-6">
              <div class="flex items-center space-x-4 mb-4">
                <ui-avatar
                  [src]="user.avatar"
                  [fallback]="getInitials(user.name)"
                  className="h-12 w-12"
                ></ui-avatar>
                <div class="flex-1">
                  <h3 class="font-semibold">{{ user.name }}</h3>
                  <p class="text-sm text-muted-foreground">{{ user.email }}</p>
                </div>
                <ui-badge [variant]="user.isActive ? 'success' : 'secondary'">
                  {{ user.isActive ? 'Active' : 'Inactive' }}
                </ui-badge>
              </div>
              
              <div class="space-y-2 mb-4">
                <div class="flex justify-between text-sm">
                  <span class="text-muted-foreground">Role:</span>
                  <span class="font-medium">{{ user.role }}</span>
                </div>
                <div class="flex justify-between text-sm">
                  <span class="text-muted-foreground">Department:</span>
                  <span class="font-medium">{{ user.department }}</span>
                </div>
                <div class="flex justify-between text-sm">
                  <span class="text-muted-foreground">Last Login:</span>
                  <span class="font-medium">{{ user.lastLogin }}</span>
                </div>
              </div>
              
              <div class="flex space-x-2">
                <ui-button variant="outline" size="sm" class="flex-1">
                  <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z" />
                  </svg>
                  Edit
                </ui-button>
                <ui-button variant="outline" size="sm">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
                  </svg>
                </ui-button>
              </div>
            </ui-card-content>
          </ui-card>
        }
      </div>
    </div>
  `
})
export class UsersComponent {
  mockUsers = [
    {
      id: '1',
      name: 'John Doe',
      email: 'john.doe@company.com',
      avatar: '',
      role: 'Administrator',
      department: 'IT',
      isActive: true,
      lastLogin: '2 hours ago'
    },
    {
      id: '2',
      name: 'Sarah Johnson',
      email: 'sarah.johnson@company.com',
      avatar: '',
      role: 'Manager',
      department: 'Finance',
      isActive: true,
      lastLogin: '1 day ago'
    },
    {
      id: '3',
      name: 'Mike Wilson',
      email: 'mike.wilson@company.com',
      avatar: '',
      role: 'User',
      department: 'Marketing',
      isActive: true,
      lastLogin: '3 days ago'
    },
    {
      id: '4',
      name: 'Alex Chen',
      email: 'alex.chen@company.com',
      avatar: '',
      role: 'Developer',
      department: 'IT',
      isActive: false,
      lastLogin: '2 weeks ago'
    },
    {
      id: '5',
      name: 'Lisa Brown',
      email: 'lisa.brown@company.com',
      avatar: '',
      role: 'HR Manager',
      department: 'Human Resources',
      isActive: true,
      lastLogin: '5 hours ago'
    },
    {
      id: '6',
      name: 'David Miller',
      email: 'david.miller@company.com',
      avatar: '',
      role: 'User',
      department: 'Sales',
      isActive: true,
      lastLogin: '1 hour ago'
    }
  ];

  getInitials(name: string): string {
    return AvatarComponent.getInitials(name);
  }
}