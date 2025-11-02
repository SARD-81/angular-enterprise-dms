import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent, CardHeaderComponent, CardTitleComponent, CardDescriptionComponent, CardContentComponent } from '../../../lib/components/ui/card.component';
import { ButtonComponent } from '../../../lib/components/ui/button.component';
import { BadgeComponent } from '../../../lib/components/ui/badge.component';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    CardHeaderComponent,
    CardTitleComponent,
    CardDescriptionComponent,
    CardContentComponent,
    ButtonComponent,
    BadgeComponent
  ],
  template: `
    <div class="p-6">
      <div class="flex justify-between items-center mb-6">
        <div>
          <h1 class="text-2xl font-bold">Reports & Analytics</h1>
          <p class="text-muted-foreground">Monitor system performance and generate insights</p>
        </div>
        <ui-button>
          <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
          </svg>
          Generate Report
        </ui-button>
      </div>
      
      <!-- Quick Stats -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <ui-card>
          <ui-card-content class="p-6 text-center">
            <div class="text-2xl font-bold text-primary mb-2">1,234</div>
            <div class="text-sm text-muted-foreground">Total Documents</div>
          </ui-card-content>
        </ui-card>
        
        <ui-card>
          <ui-card-content class="p-6 text-center">
            <div class="text-2xl font-bold text-green-600 mb-2">89</div>
            <div class="text-sm text-muted-foreground">Active Users</div>
          </ui-card-content>
        </ui-card>
        
        <ui-card>
          <ui-card-content class="p-6 text-center">
            <div class="text-2xl font-bold text-blue-600 mb-2">45.2GB</div>
            <div class="text-sm text-muted-foreground">Storage Used</div>
          </ui-card-content>
        </ui-card>
        
        <ui-card>
          <ui-card-content class="p-6 text-center">
            <div class="text-2xl font-bold text-orange-600 mb-2">97%</div>
            <div class="text-sm text-muted-foreground">System Uptime</div>
          </ui-card-content>
        </ui-card>
      </div>
      
      <!-- Recent Reports -->
      <ui-card>
        <ui-card-header>
          <ui-card-title>Recent Reports</ui-card-title>
          <ui-card-description>Generated reports and analytics</ui-card-description>
        </ui-card-header>
        <ui-card-content>
          <div class="space-y-4">
            @for (report of mockReports; track report.id) {
              <div class="flex items-center justify-between p-4 border rounded-lg">
                <div class="flex items-center space-x-4">
                  <div class="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M5,4H19A2,2 0 0,1 21,6V18A2,2 0 0,1 19,20H5A2,2 0 0,1 3,18V6A2,2 0 0,1 5,4M5,8V12H11V8H5M13,8V12H19V8H13M5,14V18H11V14H5M13,14V18H19V14H13Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold">{{ report.name }}</h3>
                    <p class="text-sm text-muted-foreground">{{ report.description }}</p>
                    <p class="text-xs text-muted-foreground mt-1">Generated on {{ report.date }}</p>
                  </div>
                </div>
                
                <div class="flex items-center space-x-3">
                  <ui-badge [variant]="getStatusVariant(report.status)">{{ report.status }}</ui-badge>
                  <ui-button variant="outline" size="sm">
                    <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />
                    </svg>
                    Download
                  </ui-button>
                </div>
              </div>
            }
          </div>
        </ui-card-content>
      </ui-card>
    </div>
  `
})
export class ReportsComponent {
  mockReports = [
    {
      id: '1',
      name: 'Document Usage Analytics',
      description: 'Comprehensive analysis of document access patterns and user behavior',
      date: 'November 1, 2024',
      status: 'completed'
    },
    {
      id: '2',
      name: 'Security Audit Report',
      description: 'Security compliance and vulnerability assessment report',
      date: 'October 28, 2024',
      status: 'completed'
    },
    {
      id: '3',
      name: 'User Activity Summary',
      description: 'Monthly summary of user activities and system interactions',
      date: 'October 25, 2024',
      status: 'processing'
    },
    {
      id: '4',
      name: 'Storage Utilization Report',
      description: 'Analysis of storage usage and capacity planning recommendations',
      date: 'October 20, 2024',
      status: 'completed'
    }
  ];

  getStatusVariant(status: string): 'default' | 'secondary' | 'success' | 'warning' | 'destructive' {
    switch (status) {
      case 'completed': return 'success';
      case 'processing': return 'warning';
      case 'failed': return 'destructive';
      default: return 'default';
    }
  }
}