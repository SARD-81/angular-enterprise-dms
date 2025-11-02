import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent, CardHeaderComponent, CardTitleComponent, CardDescriptionComponent, CardContentComponent } from '../../../lib/components/ui/card.component';
import { BadgeComponent } from '../../../lib/components/ui/badge.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    CardHeaderComponent,
    CardTitleComponent,
    CardDescriptionComponent,
    CardContentComponent,
    BadgeComponent
  ],
  template: `
    <div class="p-6">
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-foreground">Dashboard</h1>
        <p class="text-muted-foreground mt-2">Welcome to your Enterprise Document Management System</p>
      </div>
      
      <!-- Stats Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <ui-card>
          <ui-card-content class="p-6">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm font-medium text-muted-foreground">Total Documents</p>
                <p class="text-3xl font-bold">1,234</p>
              </div>
              <div class="text-primary">
                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                </svg>
              </div>
            </div>
            <p class="text-xs text-muted-foreground mt-2">+12% from last month</p>
          </ui-card-content>
        </ui-card>
        
        <ui-card>
          <ui-card-content class="p-6">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm font-medium text-muted-foreground">Active Users</p>
                <p class="text-3xl font-bold">89</p>
              </div>
              <div class="text-primary">
                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 4C18.2 4 20 5.8 20 8S18.2 12 16 12 12 10.2 12 8 13.8 4 16 4M16 14C20.4 14 24 15.8 24 18V20H8V18C8 15.8 11.6 14 16 14M8.5 6C10.2 6 11.5 7.3 11.5 9S10.2 12 8.5 12 5.5 10.7 5.5 9 6.8 6 8.5 6M8.5 14C11.3 14 14 15.1 14 16.5V18H3V16.5C3 15.1 5.7 14 8.5 14Z" />
                </svg>
              </div>
            </div>
            <p class="text-xs text-muted-foreground mt-2">+5% from last month</p>
          </ui-card-content>
        </ui-card>
        
        <ui-card>
          <ui-card-content class="p-6">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm font-medium text-muted-foreground">Storage Used</p>
                <p class="text-3xl font-bold">45.2GB</p>
              </div>
              <div class="text-primary">
                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" />
                </svg>
              </div>
            </div>
            <p class="text-xs text-muted-foreground mt-2">68% of 66GB used</p>
          </ui-card-content>
        </ui-card>
        
        <ui-card>
          <ui-card-content class="p-6">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm font-medium text-muted-foreground">Pending Approvals</p>
                <p class="text-3xl font-bold">7</p>
              </div>
              <div class="text-primary">
                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" />
                </svg>
              </div>
            </div>
            <p class="text-xs text-muted-foreground mt-2">Requires attention</p>
          </ui-card-content>
        </ui-card>
      </div>
      
      <!-- Recent Activity -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ui-card>
          <ui-card-header>
            <ui-card-title>Recent Documents</ui-card-title>
            <ui-card-description>Latest uploaded documents</ui-card-description>
          </ui-card-header>
          <ui-card-content>
            <div class="space-y-4">
              @for (doc of recentDocuments; track doc.id) {
                <div class="flex items-center justify-between p-3 border rounded-lg">
                  <div class="flex items-center space-x-3">
                    <div class="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                      </svg>
                    </div>
                    <div>
                      <p class="font-medium">{{ doc.name }}</p>
                      <p class="text-sm text-muted-foreground">{{ doc.size }} • {{ doc.type }}</p>
                    </div>
                  </div>
                  <ui-badge [variant]="doc.status === 'approved' ? 'success' : 'warning'">
                    {{ doc.status }}
                  </ui-badge>
                </div>
              }
            </div>
          </ui-card-content>
        </ui-card>
        
        <ui-card>
          <ui-card-header>
            <ui-card-title>System Activity</ui-card-title>
            <ui-card-description>Recent system events</ui-card-description>
          </ui-card-header>
          <ui-card-content>
            <div class="space-y-4">
              @for (activity of systemActivity; track activity.id) {
                <div class="flex items-start space-x-3 p-3 border rounded-lg">
                  <div class="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div class="flex-1">
                    <p class="text-sm">{{ activity.description }}</p>
                    <p class="text-xs text-muted-foreground mt-1">{{ activity.time }}</p>
                  </div>
                </div>
              }
            </div>
          </ui-card-content>
        </ui-card>
      </div>
    </div>
  `
})
export class DashboardComponent {
  recentDocuments = [
    {
      id: '1',
      name: 'Project Proposal.pdf',
      size: '2.4 MB',
      type: 'PDF',
      status: 'approved'
    },
    {
      id: '2',
      name: 'Budget Report.xlsx',
      size: '890 KB',
      type: 'Excel',
      status: 'pending'
    },
    {
      id: '3',
      name: 'Meeting Notes.docx',
      size: '156 KB',
      type: 'Word',
      status: 'approved'
    }
  ];
  
  systemActivity = [
    {
      id: '1',
      description: 'John Doe uploaded a new document',
      time: '2 minutes ago'
    },
    {
      id: '2',
      description: 'Workflow "Document Approval" completed',
      time: '15 minutes ago'
    },
    {
      id: '3',
      description: 'New user Sarah Johnson was added',
      time: '1 hour ago'
    },
    {
      id: '4',
      description: 'System backup completed successfully',
      time: '2 hours ago'
    }
  ];
}