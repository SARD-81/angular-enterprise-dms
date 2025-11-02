export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',
  appName: 'Enterprise DMS',
  version: '1.0.0',
  features: {
    enableDarkMode: true,
    enableNotifications: true,
    enableAnalytics: false,
    maxFileSize: 50 * 1024 * 1024, // 50MB
    allowedFileTypes: [
      'pdf', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx',
      'txt', 'rtf', 'csv', 'jpg', 'jpeg', 'png', 'gif', 
      'bmp', 'svg', 'mp4', 'avi', 'mov', 'zip', 'rar'
    ],
    documentsPerPage: 20,
    searchResultsPerPage: 15
  }
};