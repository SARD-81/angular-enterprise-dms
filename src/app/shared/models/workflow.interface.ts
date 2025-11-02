export interface Workflow {
  id: string;
  name: string;
  description?: string;
  isActive: boolean;
  
  // Configuration
  triggerType: WorkflowTriggerType;
  triggerConditions: Record<string, any>;
  steps: WorkflowStep[];
  
  // Settings
  settings: WorkflowSettings;
  
  // Statistics
  totalExecutions: number;
  successfulExecutions: number;
  failedExecutions: number;
  averageExecutionTime: number;
  
  // Audit
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;
}

export interface WorkflowStep {
  id: string;
  name: string;
  type: WorkflowStepType;
  order: number;
  
  // Configuration
  configuration: Record<string, any>;
  conditions?: WorkflowCondition[];
  
  // Connections
  nextSteps: string[];
  onSuccess?: string;
  onError?: string;
  
  // Timing
  timeout?: number;
  retryCount?: number;
  retryDelay?: number;
}

export interface WorkflowCondition {
  field: string;
  operator: 'equals' | 'not_equals' | 'contains' | 'greater_than' | 'less_than' | 'in' | 'not_in';
  value: any;
  logicalOperator?: 'and' | 'or';
}

export enum WorkflowTriggerType {
  MANUAL = 'manual',
  DOCUMENT_UPLOAD = 'document_upload',
  DOCUMENT_UPDATE = 'document_update',
  DOCUMENT_DELETE = 'document_delete',
  SCHEDULED = 'scheduled',
  API_CALL = 'api_call'
}

export enum WorkflowStepType {
  APPROVAL = 'approval',
  NOTIFICATION = 'notification',
  DOCUMENT_MOVE = 'document_move',
  DOCUMENT_COPY = 'document_copy',
  METADATA_UPDATE = 'metadata_update',
  API_CALL = 'api_call',
  SCRIPT_EXECUTION = 'script_execution',
  CONDITIONAL = 'conditional',
  DELAY = 'delay'
}

export interface WorkflowSettings {
  allowParallelExecution: boolean;
  maxConcurrentExecutions: number;
  executionTimeout: number;
  retryFailedExecutions: boolean;
  notifyOnFailure: boolean;
  notifyOnCompletion: boolean;
  logLevel: 'error' | 'warning' | 'info' | 'debug';
}

export interface WorkflowExecution {
  id: string;
  workflowId: string;
  workflowName: string;
  
  // Trigger
  triggerType: WorkflowTriggerType;
  triggerData: Record<string, any>;
  triggeredBy: string;
  
  // Status
  status: WorkflowExecutionStatus;
  currentStep?: string;
  currentStepName?: string;
  
  // Results
  results: WorkflowStepResult[];
  output?: Record<string, any>;
  error?: string;
  
  // Timing
  startedAt: Date;
  completedAt?: Date;
  duration?: number;
  
  // Context
  documentId?: string;
  documentName?: string;
  userId: string;
  userName: string;
}

export interface WorkflowStepResult {
  stepId: string;
  stepName: string;
  status: WorkflowStepStatus;
  startedAt: Date;
  completedAt?: Date;
  duration?: number;
  input?: Record<string, any>;
  output?: Record<string, any>;
  error?: string;
  retryCount: number;
}

export enum WorkflowExecutionStatus {
  PENDING = 'pending',
  RUNNING = 'running',
  COMPLETED = 'completed',
  FAILED = 'failed',
  CANCELLED = 'cancelled',
  PAUSED = 'paused'
}

export enum WorkflowStepStatus {
  PENDING = 'pending',
  RUNNING = 'running',
  COMPLETED = 'completed',
  FAILED = 'failed',
  SKIPPED = 'skipped',
  CANCELLED = 'cancelled'
}

export interface ApprovalRequest {
  id: string;
  workflowExecutionId: string;
  stepId: string;
  
  // Request Details
  title: string;
  description?: string;
  priority: ApprovalPriority;
  
  // Document Context
  documentId: string;
  documentName: string;
  documentVersion: string;
  
  // Approval Details
  requestedBy: string;
  requestedByName: string;
  assignedTo: string[];
  assignedToNames: string[];
  
  // Status
  status: ApprovalStatus;
  approvedBy?: string;
  approvedByName?: string;
  rejectedBy?: string;
  rejectedByName?: string;
  comments?: ApprovalComment[];
  
  // Timing
  dueDate?: Date;
  requestedAt: Date;
  respondedAt?: Date;
  
  // Configuration
  requiresAllApprovers: boolean;
  allowDelegation: boolean;
  autoApproveAfter?: number; // hours
}

export interface ApprovalComment {
  id: string;
  userId: string;
  userName: string;
  comment: string;
  action: 'approve' | 'reject' | 'comment' | 'delegate';
  createdAt: Date;
}

export enum ApprovalPriority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  URGENT = 'urgent'
}

export enum ApprovalStatus {
  PENDING = 'pending',
  APPROVED = 'approved',
  REJECTED = 'rejected',
  CANCELLED = 'cancelled',
  EXPIRED = 'expired'
}