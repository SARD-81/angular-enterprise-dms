import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent, CardHeaderComponent, CardTitleComponent, CardDescriptionComponent, CardContentComponent } from '../../../lib/components/ui/card.component';
import { ButtonComponent } from '../../../lib/components/ui/button.component';
import { BadgeComponent } from '../../../lib/components/ui/badge.component';

@Component({
  selector: 'app-documents',
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
          <h1 class="text-2xl font-bold">Documents</h1>
          <p class="text-muted-foreground">Manage your document library</p>
        </div>
        <ui-button>
          <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
          </svg>
          Upload Document
        </ui-button>
      </div>
      
      <!-- Document Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        @for (doc of mockDocuments; track doc.id) {
          <ui-card class="hover:shadow-lg transition-shadow cursor-pointer">
            <ui-card-content class="p-4">
              <div class="flex items-center justify-between mb-3">
                <div class="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                  </svg>
                </div>
                <ui-badge [variant]="getStatusVariant(doc.status)">{{ doc.status }}</ui-badge>
              </div>
              
              <h3 class="font-semibold text-sm mb-2 line-clamp-2">{{ doc.title }}</h3>
              <p class="text-xs text-muted-foreground mb-3">{{ doc.size }} • {{ doc.type }}</p>
              
              <div class="flex items-center justify-between text-xs text-muted-foreground">
                <span>{{ doc.owner }}</span>
                <span>{{ doc.modified }}</span>
              </div>
            </ui-card-content>
          </ui-card>
        }
      </div>
    </div>
  `
})
export class DocumentsComponent {
  mockDocuments = [
    {
      id: '1',
      title: 'Project Proposal - Q4 2024.pdf',
      size: '2.4 MB',
      type: 'PDF',
      status: 'active',
      owner: 'John Doe',
      modified: '2 hours ago'
    },
    {
      id: '2',
      title: 'Budget Analysis Report.xlsx',
      size: '890 KB',
      type: 'Excel',
      status: 'review',
      owner: 'Sarah Johnson',
      modified: '1 day ago'
    },
    {
      id: '3',
      title: 'Meeting Minutes - Oct 2024.docx',
      size: '156 KB',
      type: 'Word',
      status: 'active',
      owner: 'Mike Wilson',
      modified: '3 days ago'
    },
    {
      id: '4',
      title: 'System Architecture Diagram.png',
      size: '3.2 MB',
      type: 'Image',
      status: 'active',
      owner: 'Alex Chen',
      modified: '1 week ago'
    },
    {
      id: '5',
      title: 'Contract Template.pdf',
      size: '445 KB',
      type: 'PDF',
      status: 'archived',
      owner: 'Lisa Brown',
      modified: '2 weeks ago'
    },
    {
      id: '6',
      title: 'Training Presentation.pptx',
      size: '12.1 MB',
      type: 'PowerPoint',
      status: 'active',
      owner: 'David Miller',
      modified: '3 weeks ago'
    }
  ];

  getStatusVariant(status: string): 'default' | 'secondary' | 'success' | 'warning' | 'destructive' {
    switch (status) {
      case 'active': return 'success';
      case 'review': return 'warning';
      case 'archived': return 'secondary';
      default: return 'default';
    }
  }
}