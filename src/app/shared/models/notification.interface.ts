export interface SystemNotification {
  id: string;
  type: NotificationType;
  category: NotificationCategory;
  title: string;
  message: string;
  
  // Context
  entityType?: string;
  entityId?: string;
  entityName?: string;
  
  // Recipient
  userId: string;
  
  // Status
  isRead: boolean;
  readAt?: Date;
  
  // Metadata
  data?: Record<string, any>;
  actions?: NotificationAction[];
  
  // Timing
  createdAt: Date;
  expiresAt?: Date;
  
  // Priority
  priority: NotificationPriority;
  requiresAcknowledgment?: boolean;
}

export enum NotificationType {
  // Documents
  DOCUMENT_UPLOADED = 'document_uploaded',
  DOCUMENT_UPDATED = 'document_updated',
  DOCUMENT_DELETED = 'document_deleted',
  DOCUMENT_SHARED = 'document_shared',
  DOCUMENT_EXPIRED = 'document_expired',
  
  // Workflows
  WORKFLOW_STARTED = 'workflow_started',
  WORKFLOW_COMPLETED = 'workflow_completed',
  WORKFLOW_FAILED = 'workflow_failed',
  
  // Approvals
  APPROVAL_REQUESTED = 'approval_requested',
  APPROVAL_APPROVED = 'approval_approved',
  APPROVAL_REJECTED = 'approval_rejected',
  APPROVAL_EXPIRED = 'approval_expired',
  
  // System
  SYSTEM_MAINTENANCE = 'system_maintenance',
  SYSTEM_UPDATE = 'system_update',
  SECURITY_ALERT = 'security_alert',
  
  // User
  USER_CREATED = 'user_created',
  USER_UPDATED = 'user_updated',
  USER_DEACTIVATED = 'user_deactivated',
  
  // General
  INFO = 'info',
  WARNING = 'warning',
  ERROR = 'error'
}

export enum NotificationCategory {
  DOCUMENT = 'document',
  WORKFLOW = 'workflow',
  APPROVAL = 'approval',
  SYSTEM = 'system',
  SECURITY = 'security',
  USER = 'user'
}

export enum NotificationPriority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  URGENT = 'urgent'
}

export interface NotificationAction {
  id: string;
  label: string;
  url?: string;
  action?: string;
  style: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
}

export interface NotificationPreferences {
  userId: string;
  
  // Email notifications
  emailEnabled: boolean;
  emailCategories: NotificationCategory[];
  emailFrequency: EmailFrequency;
  
  // In-app notifications
  inAppEnabled: boolean;
  inAppCategories: NotificationCategory[];
  
  // Push notifications
  pushEnabled: boolean;
  pushCategories: NotificationCategory[];
  
  // SMS notifications
  smsEnabled: boolean;
  smsCategories: NotificationCategory[];
  phoneNumber?: string;
  
  // Digest settings
  dailyDigest: boolean;
  weeklyDigest: boolean;
  digestTime: string; // HH:mm format
  
  updatedAt: Date;
}

export enum EmailFrequency {
  IMMEDIATE = 'immediate',
  HOURLY = 'hourly',
  DAILY = 'daily',
  WEEKLY = 'weekly',
  NEVER = 'never'
}