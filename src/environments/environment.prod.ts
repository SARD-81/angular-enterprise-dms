export const environment = {
  production: true,
  apiUrl: 'https://api.enterprise-dms.com/api',
  appName: 'Enterprise DMS',
  version: '1.0.0',
  features: {
    enableDarkMode: true,
    enableNotifications: true,
    enableAnalytics: true,
    maxFileSize: 100 * 1024 * 1024, // 100MB
    allowedFileTypes: [
      'pdf', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx',
      'txt', 'rtf', 'csv', 'jpg', 'jpeg', 'png', 'gif', 
      'bmp', 'svg', 'mp4', 'avi', 'mov', 'zip', 'rar'
    ],
    documentsPerPage: 25,
    searchResultsPerPage: 20
  }
};