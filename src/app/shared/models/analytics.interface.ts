export interface DashboardStats {
  totalDocuments: number;
  totalUsers: number;
  totalStorage: number;
  activeWorkflows: number;
  
  // Trends (compared to previous period)
  documentsChange: number;
  usersChange: number;
  storageChange: number;
  workflowsChange: number;
  
  // Recent activity
  recentDocuments: Document[];
  recentUsers: User[];
  pendingApprovals: number;
  systemAlerts: number;
}

export interface DocumentAnalytics {
  totalDocuments: number;
  totalSize: number;
  averageSize: number;
  
  // By file type
  documentsByType: ChartDataPoint[];
  
  // By creation date
  documentsByDate: TimeSeriesDataPoint[];
  
  // By owner
  documentsByOwner: ChartDataPoint[];
  
  // By folder
  documentsByFolder: ChartDataPoint[];
  
  // Most accessed
  mostAccessedDocuments: DocumentAccessStats[];
  
  // Storage usage
  storageByFolder: ChartDataPoint[];
  storageGrowth: TimeSeriesDataPoint[];
}

export interface UserAnalytics {
  totalUsers: number;
  activeUsers: number;
  inactiveUsers: number;
  
  // Activity
  usersByActivity: ChartDataPoint[];
  loginsByDate: TimeSeriesDataPoint[];
  
  // Top contributors
  topContributors: UserContributionStats[];
  
  // By department
  usersByDepartment: ChartDataPoint[];
  
  // By role
  usersByRole: ChartDataPoint[];
}

export interface WorkflowAnalytics {
  totalWorkflows: number;
  activeWorkflows: number;
  totalExecutions: number;
  successRate: number;
  
  // Execution stats
  executionsByStatus: ChartDataPoint[];
  executionsByDate: TimeSeriesDataPoint[];
  
  // Performance
  averageExecutionTime: number;
  executionTimesByWorkflow: ChartDataPoint[];
  
  // Most used workflows
  workflowUsageStats: WorkflowUsageStats[];
  
  // Pending approvals
  pendingApprovalsByWorkflow: ChartDataPoint[];
}

export interface SystemAnalytics {
  // Performance
  systemLoad: number;
  memoryUsage: number;
  diskUsage: number;
  networkTraffic: number;
  
  // API usage
  apiRequestsByEndpoint: ChartDataPoint[];
  apiRequestsByDate: TimeSeriesDataPoint[];
  apiResponseTimes: TimeSeriesDataPoint[];
  
  // Errors
  errorsByType: ChartDataPoint[];
  errorsByDate: TimeSeriesDataPoint[];
  
  // Security
  loginAttemptsByDate: TimeSeriesDataPoint[];
  failedLoginsByDate: TimeSeriesDataPoint[];
  securityAlerts: SecurityAlert[];
}

export interface ChartDataPoint {
  label: string;
  value: number;
  percentage?: number;
  color?: string;
}

export interface TimeSeriesDataPoint {
  date: Date;
  value: number;
  label?: string;
}

export interface DocumentAccessStats {
  documentId: string;
  documentName: string;
  fileName: string;
  viewCount: number;
  downloadCount: number;
  lastAccessedAt: Date;
  lastAccessedBy: string;
}

export interface UserContributionStats {
  userId: string;
  userName: string;
  documentsCreated: number;
  documentsModified: number;
  workflowsExecuted: number;
  lastActivity: Date;
}

export interface WorkflowUsageStats {
  workflowId: string;
  workflowName: string;
  executionCount: number;
  successRate: number;
  averageExecutionTime: number;
  lastExecuted: Date;
}

export interface SecurityAlert {
  id: string;
  type: SecurityAlertType;
  severity: SecurityAlertSeverity;
  title: string;
  description: string;
  userId?: string;
  userName?: string;
  ipAddress?: string;
  userAgent?: string;
  createdAt: Date;
  acknowledged: boolean;
  acknowledgedBy?: string;
  acknowledgedAt?: Date;
}

export enum SecurityAlertType {
  FAILED_LOGIN = 'failed_login',
  SUSPICIOUS_ACTIVITY = 'suspicious_activity',
  UNAUTHORIZED_ACCESS = 'unauthorized_access',
  DATA_BREACH = 'data_breach',
  MALWARE_DETECTED = 'malware_detected',
  POLICY_VIOLATION = 'policy_violation'
}

export enum SecurityAlertSeverity {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  CRITICAL = 'critical'
}

export interface ReportRequest {
  type: ReportType;
  parameters: Record<string, any>;
  format: ReportFormat;
  dateFrom?: Date;
  dateTo?: Date;
  filters?: Record<string, any>;
  includeCharts?: boolean;
  includeDetails?: boolean;
}

export interface Report {
  id: string;
  type: ReportType;
  title: string;
  description?: string;
  parameters: Record<string, any>;
  format: ReportFormat;
  
  // Status
  status: ReportStatus;
  progress: number;
  
  // Results
  filePath?: string;
  fileSize?: number;
  downloadUrl?: string;
  
  // Metadata
  createdAt: Date;
  completedAt?: Date;
  createdBy: string;
  expiresAt?: Date;
}

export enum ReportType {
  DOCUMENT_USAGE = 'document_usage',
  USER_ACTIVITY = 'user_activity',
  WORKFLOW_PERFORMANCE = 'workflow_performance',
  SECURITY_AUDIT = 'security_audit',
  STORAGE_USAGE = 'storage_usage',
  COMPLIANCE = 'compliance',
  CUSTOM = 'custom'
}

export enum ReportFormat {
  PDF = 'pdf',
  EXCEL = 'excel',
  CSV = 'csv',
  JSON = 'json'
}

export enum ReportStatus {
  PENDING = 'pending',
  GENERATING = 'generating',
  COMPLETED = 'completed',
  FAILED = 'failed',
  EXPIRED = 'expired'
}