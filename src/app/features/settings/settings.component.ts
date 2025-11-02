import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent, CardHeaderComponent, CardTitleComponent, CardDescriptionComponent, CardContentComponent } from '../../../lib/components/ui/card.component';
import { ButtonComponent } from '../../../lib/components/ui/button.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    CardHeaderComponent,
    CardTitleComponent,
    CardDescriptionComponent,
    CardContentComponent,
    ButtonComponent
  ],
  template: `
    <div class="p-6">
      <div class="mb-6">
        <h1 class="text-2xl font-bold">Settings</h1>
        <p class="text-muted-foreground">Manage your system preferences and configuration</p>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- System Settings -->
        <ui-card>
          <ui-card-header>
            <ui-card-title>System Configuration</ui-card-title>
            <ui-card-description>Configure system-wide settings</ui-card-description>
          </ui-card-header>
          <ui-card-content class="space-y-4">
            <div class="space-y-2">
              <h4 class="font-medium">Storage Settings</h4>
              <p class="text-sm text-muted-foreground">Maximum file size: 50MB</p>
              <p class="text-sm text-muted-foreground">Total storage limit: 100GB</p>
            </div>
            
            <div class="space-y-2">
              <h4 class="font-medium">Security</h4>
              <p class="text-sm text-muted-foreground">Two-factor authentication: Enabled</p>
              <p class="text-sm text-muted-foreground">Session timeout: 8 hours</p>
            </div>
            
            <ui-button variant="outline" class="w-full">
              Configure System
            </ui-button>
          </ui-card-content>
        </ui-card>
        
        <!-- User Preferences -->
        <ui-card>
          <ui-card-header>
            <ui-card-title>User Preferences</ui-card-title>
            <ui-card-description>Customize your personal settings</ui-card-description>
          </ui-card-header>
          <ui-card-content class="space-y-4">
            <div class="space-y-2">
              <h4 class="font-medium">Appearance</h4>
              <p class="text-sm text-muted-foreground">Theme: System default</p>
              <p class="text-sm text-muted-foreground">Language: English</p>
            </div>
            
            <div class="space-y-2">
              <h4 class="font-medium">Notifications</h4>
              <p class="text-sm text-muted-foreground">Email notifications: Enabled</p>
              <p class="text-sm text-muted-foreground">Push notifications: Enabled</p>
            </div>
            
            <ui-button variant="outline" class="w-full">
              Update Preferences
            </ui-button>
          </ui-card-content>
        </ui-card>
        
        <!-- Backup & Export -->
        <ui-card>
          <ui-card-header>
            <ui-card-title>Backup & Export</ui-card-title>
            <ui-card-description>Manage data backup and export options</ui-card-description>
          </ui-card-header>
          <ui-card-content class="space-y-4">
            <div class="space-y-2">
              <h4 class="font-medium">Automatic Backup</h4>
              <p class="text-sm text-muted-foreground">Last backup: 2 hours ago</p>
              <p class="text-sm text-muted-foreground">Next backup: In 22 hours</p>
            </div>
            
            <div class="flex space-x-2">
              <ui-button variant="outline" size="sm">
                Backup Now
              </ui-button>
              <ui-button variant="outline" size="sm">
                Export Data
              </ui-button>
            </div>
          </ui-card-content>
        </ui-card>
        
        <!-- Integration Settings -->
        <ui-card>
          <ui-card-header>
            <ui-card-title>Integrations</ui-card-title>
            <ui-card-description>Connect with external services</ui-card-description>
          </ui-card-header>
          <ui-card-content class="space-y-4">
            <div class="space-y-3">
              @for (integration of mockIntegrations; track integration.id) {
                <div class="flex items-center justify-between p-3 border rounded-lg">
                  <div class="flex items-center space-x-3">
                    <div class="w-8 h-8 bg-primary/10 rounded flex items-center justify-center">
                      <span class="text-xs font-medium text-primary">{{ integration.name.charAt(0) }}</span>
                    </div>
                    <div>
                      <h5 class="font-medium text-sm">{{ integration.name }}</h5>
                      <p class="text-xs text-muted-foreground">{{ integration.description }}</p>
                    </div>
                  </div>
                  <ui-button 
                    variant="outline" 
                    size="sm"
                    [class]="integration.connected ? 'text-green-600' : 'text-muted-foreground'"
                  >
                    {{ integration.connected ? 'Connected' : 'Connect' }}
                  </ui-button>
                </div>
              }
            </div>
          </ui-card-content>
        </ui-card>
      </div>
    </div>
  `
})
export class SettingsComponent {
  mockIntegrations = [
    {
      id: '1',
      name: 'Microsoft 365',
      description: 'Sync documents with OneDrive and SharePoint',
      connected: true
    },
    {
      id: '2',
      name: 'Google Workspace',
      description: 'Connect with Google Drive and Docs',
      connected: false
    },
    {
      id: '3',
      name: 'Slack',
      description: 'Send notifications to Slack channels',
      connected: true
    },
    {
      id: '4',
      name: 'Jira',
      description: 'Link documents to Jira issues',
      connected: false
    }
  ];
}