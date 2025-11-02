import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent, CardHeaderComponent, CardTitleComponent, CardContentComponent } from '../../../lib/components/ui/card.component';
import { ButtonComponent } from '../../../lib/components/ui/button.component';
import { BadgeComponent } from '../../../lib/components/ui/badge.component';

@Component({
  selector: 'app-workflows',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    CardHeaderComponent,
    CardTitleComponent,
    CardContentComponent,
    ButtonComponent,
    BadgeComponent
  ],
  template: `
    <div class="p-6">
      <div class="flex justify-between items-center mb-6">
        <div>
          <h1 class="text-2xl font-bold">Workflows</h1>
          <p class="text-muted-foreground">Automate your document processes</p>
        </div>
        <ui-button>
          <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
          </svg>
          Create Workflow
        </ui-button>
      </div>
      
      <!-- Workflows List -->
      <div class="space-y-4">
        @for (workflow of mockWorkflows; track workflow.id) {
          <ui-card>
            <ui-card-content class="p-6">
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-4">
                  <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7.27C13.6,7.61 14,8.26 14,9A2,2 0 0,1 12,11A2,2 0 0,1 10,9C10,8.26 10.4,7.61 11,7.27V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2M12,15A2,2 0 0,1 14,17C14,17.74 13.6,18.39 13,18.73V20.27C13.6,20.61 14,21.26 14,22A2,2 0 0,1 12,24A2,2 0 0,1 10,22C10,21.26 10.4,20.61 11,20.27V18.73C10.4,18.39 10,17.74 10,17A2,2 0 0,1 12,15M7,12A2,2 0 0,1 9,14C9,14.74 8.6,15.39 8,15.73V16.27C8.6,16.61 9,17.26 9,18A2,2 0 0,1 7,20A2,2 0 0,1 5,18C5,17.26 5.4,16.61 6,16.27V15.73C5.4,15.39 5,14.74 5,14A2,2 0 0,1 7,12M17,12A2,2 0 0,1 19,14C19,14.74 18.6,15.39 18,15.73V16.27C18.6,16.61 19,17.26 19,18A2,2 0 0,1 17,20A2,2 0 0,1 15,18C15,17.26 15.4,16.61 16,16.27V15.73C15.4,15.39 15,14.74 15,14A2,2 0 0,1 17,12Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-lg">{{ workflow.name }}</h3>
                    <p class="text-muted-foreground text-sm">{{ workflow.description }}</p>
                    <div class="flex items-center space-x-4 mt-2 text-xs text-muted-foreground">
                      <span>{{ workflow.executions }} executions</span>
                      <span>{{ workflow.successRate }}% success rate</span>
                      <span>Last run: {{ workflow.lastRun }}</span>
                    </div>
                  </div>
                </div>
                
                <div class="flex items-center space-x-3">
                  <ui-badge [variant]="workflow.isActive ? 'success' : 'secondary'">
                    {{ workflow.isActive ? 'Active' : 'Inactive' }}
                  </ui-badge>
                  <ui-button variant="outline" size="sm">
                    <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z" />
                    </svg>
                    Edit
                  </ui-button>
                  <ui-button variant="outline" size="sm">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8,5.14V19.14L19,12.14L8,5.14Z" />
                    </svg>
                  </ui-button>
                </div>
              </div>
            </ui-card-content>
          </ui-card>
        }
      </div>
    </div>
  `
})
export class WorkflowsComponent {
  mockWorkflows = [
    {
      id: '1',
      name: 'Document Approval Process',
      description: 'Automatic routing of documents for approval based on content type and value',
      isActive: true,
      executions: 156,
      successRate: 94,
      lastRun: '2 hours ago'
    },
    {
      id: '2',
      name: 'Contract Review Workflow',
      description: 'Multi-stage review process for legal contracts with stakeholder notifications',
      isActive: true,
      executions: 89,
      successRate: 97,
      lastRun: '1 day ago'
    },
    {
      id: '3',
      name: 'Document Archive Process',
      description: 'Automated archiving of documents based on age and access frequency',
      isActive: false,
      executions: 234,
      successRate: 100,
      lastRun: '1 week ago'
    },
    {
      id: '4',
      name: 'Security Scan Workflow',
      description: 'Automatic security scanning and compliance checking for uploaded documents',
      isActive: true,
      executions: 445,
      successRate: 92,
      lastRun: '30 minutes ago'
    }
  ];
}