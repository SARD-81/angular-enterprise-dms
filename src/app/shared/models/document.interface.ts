export interface Document {
  id: string;
  title: string;
  description?: string;
  fileName: string;
  originalFileName: string;
  filePath: string;
  fileSize: number;
  mimeType: string;
  fileExtension: string;
  checksum: string;
  
  // Versioning
  version: string;
  isLatestVersion: boolean;
  parentDocumentId?: string;
  versionHistory?: DocumentVersion[];
  
  // Organization
  folderId?: string;
  folderPath?: string;
  tags: string[];
  categories: string[];
  
  // Metadata
  metadata: Record<string, any>;
  customFields: Record<string, any>;
  
  // Access Control
  ownerId: string;
  ownerName: string;
  permissions: DocumentPermission[];
  isPublic: boolean;
  
  // Status
  status: DocumentStatus;
  isCheckedOut: boolean;
  checkedOutBy?: string;
  checkedOutAt?: Date;
  
  // Workflow
  workflowId?: string;
  workflowStatus?: string;
  approvalStatus?: ApprovalStatus;
  
  // Audit
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;
  
  // Analytics
  downloadCount: number;
  viewCount: number;
  lastAccessedAt?: Date;
  lastAccessedBy?: string;
}

export interface DocumentVersion {
  id: string;
  documentId: string;
  version: string;
  fileName: string;
  fileSize: number;
  checksum: string;
  comment?: string;
  createdAt: Date;
  createdBy: string;
  createdByName: string;
}

export interface DocumentPermission {
  userId?: string;
  groupId?: string;
  permission: DocumentPermissionType;
  inheritFromParent: boolean;
}

export enum DocumentPermissionType {
  READ = 'read',
  WRITE = 'write',
  DELETE = 'delete',
  ADMIN = 'admin'
}

export enum DocumentStatus {
  DRAFT = 'draft',
  ACTIVE = 'active',
  ARCHIVED = 'archived',
  DELETED = 'deleted',
  IN_REVIEW = 'in_review',
  LOCKED = 'locked'
}

export enum ApprovalStatus {
  PENDING = 'pending',
  APPROVED = 'approved',
  REJECTED = 'rejected',
  CANCELLED = 'cancelled'
}

export interface Folder {
  id: string;
  name: string;
  description?: string;
  parentId?: string;
  path: string;
  level: number;
  
  // Access Control
  ownerId: string;
  permissions: DocumentPermission[];
  inheritPermissions: boolean;
  
  // Metadata
  metadata: Record<string, any>;
  
  // Statistics
  documentCount: number;
  subfolderCount: number;
  totalSize: number;
  
  // Audit
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;
}

export interface DocumentSearchRequest {
  query?: string;
  folderId?: string;
  tags?: string[];
  categories?: string[];
  fileTypes?: string[];
  owners?: string[];
  dateFrom?: Date;
  dateTo?: Date;
  sizeFrom?: number;
  sizeTo?: number;
  status?: DocumentStatus[];
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  page?: number;
  limit?: number;
}

export interface DocumentSearchResponse {
  documents: Document[];
  totalCount: number;
  page: number;
  limit: number;
  facets: SearchFacets;
}

export interface SearchFacets {
  fileTypes: FacetItem[];
  owners: FacetItem[];
  tags: FacetItem[];
  categories: FacetItem[];
  folders: FacetItem[];
}

export interface FacetItem {
  value: string;
  count: number;
  selected?: boolean;
}

export interface UploadProgress {
  fileId: string;
  fileName: string;
  progress: number;
  status: 'uploading' | 'completed' | 'error' | 'cancelled';
  error?: string;
}

export interface BulkOperation {
  id: string;
  operation: 'move' | 'copy' | 'delete' | 'update_metadata';
  documentIds: string[];
  parameters: Record<string, any>;
  status: 'pending' | 'processing' | 'completed' | 'error';
  progress: number;
  createdAt: Date;
  completedAt?: Date;
  error?: string;
}