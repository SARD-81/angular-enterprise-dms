# Enterprise Document Management System (DMS)

🏢 **Modern, full-featured Document Management System built with Angular 18 and shadcn/ui**

![Angular](https://img.shields.io/badge/Angular-18-red?logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue?logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green)

## 🚀 Features

This enterprise-grade DMS includes all essential features found in commercial document management systems:

### 📁 **Core Document Management**
- Document upload, download, and preview
- Advanced metadata management
- Full-text search with filters
- Batch operations (bulk upload, delete, move)
- Document versioning and history tracking
- Duplicate detection and management

### 👥 **Collaboration & Workflow**
- Multi-user collaboration with real-time updates
- Document check-in/check-out system
- Approval workflows and document routing
- Comments and annotations
- Task assignment and tracking
- Activity feeds and notifications

### 🔐 **Security & Access Control**
- Role-based access control (RBAC)
- Document-level permissions
- Audit trails and compliance reporting
- Digital signatures support
- Watermarking and DRM controls
- SSL/TLS encryption

### 📊 **Organization & Structure**
- Hierarchical folder structure
- Custom taxonomies and categories
- Smart tags and auto-categorization
- Advanced search and filtering
- Favorites and bookmarks
- Recent documents tracking

### 🔄 **Integration & Automation**
- REST API for third-party integrations
- Email integration and document capture
- Automated workflows and rules
- Scheduler for recurring tasks
- Export/import capabilities
- Backup and archiving

### 📱 **Modern UI/UX**
- Responsive design for all devices
- Dark/light theme support
- Drag-and-drop interface
- Advanced data tables with sorting/filtering
- Real-time notifications
- Progressive Web App (PWA) capabilities

## 🛠️ Technology Stack

- **Frontend**: Angular 18 with Standalone Components
- **UI Library**: shadcn/ui components with Tailwind CSS
- **Icons**: Lucide Angular icons
- **Styling**: SCSS + Tailwind CSS
- **State Management**: Angular Signals (modern reactive patterns)
- **Routing**: Angular Router with lazy loading
- **Forms**: Angular Reactive Forms
- **HTTP**: Angular HttpClient with interceptors
- **Testing**: Jasmine + Karma

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm
- Angular CLI 18+

### Setup Steps

1. **Clone the repository**
```bash
git clone https://github.com/SARD-81/angular-enterprise-dms.git
cd angular-enterprise-dms
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm start
```

4. **Open your browser**
```
http://localhost:4200
```

## 🏗️ Project Structure

```
src/
├── app/
│   ├── core/                 # Core services and guards
│   ├── features/             # Feature modules
│   │   ├── documents/        # Document management
│   │   ├── workflows/        # Workflow management
│   │   ├── users/           # User management
│   │   ├── reports/         # Analytics and reports
│   │   └── settings/        # System settings
│   ├── shared/              # Shared components and utilities
│   │   ├── components/      # Reusable UI components
│   │   ├── directives/      # Custom directives
│   │   ├── pipes/           # Custom pipes
│   │   └── models/          # TypeScript interfaces
│   └── layout/              # Layout components
├── lib/                     # shadcn/ui components
│   ├── components/          # UI components
│   └── utils/              # Utility functions
├── assets/                  # Static assets
└── environments/            # Environment configurations
```

## 🎨 Design System

This DMS follows enterprise design principles:

- **Consistent**: shadcn/ui component library ensures consistency
- **Accessible**: WCAG 2.1 AA compliance
- **Responsive**: Mobile-first approach
- **Performant**: Lazy loading and optimization
- **Themeable**: Dark/light modes with CSS custom properties

## 🔧 Key Features Implementation

### Document Management
- Advanced file upload with progress tracking
- Document preview for 20+ file types
- Metadata extraction and management
- Version control with diff visualization

### Search & Discovery
- Full-text search with highlighting
- Advanced filtering and faceted search
- Saved searches and smart folders
- AI-powered content recommendations

### Workflow Engine
- Visual workflow designer
- Conditional routing and approvals
- SLA monitoring and escalation
- Integration with external systems

### Analytics & Reporting
- Usage analytics and dashboards
- Compliance reporting
- Custom report builder
- Data export capabilities

## 🚀 Production Deployment

### Build for Production
```bash
npm run build:prod
```

### Docker Deployment
```bash
docker build -t enterprise-dms .
docker run -p 80:80 enterprise-dms
```

### Environment Configuration
Configure environment variables in `src/environments/`:

- API endpoints
- Authentication settings  
- Feature flags
- Third-party integrations

## 🧪 Testing

```bash
# Run unit tests
npm test

# Run e2e tests
npm run e2e

# Generate coverage report
npm run test:coverage
```

## 📖 API Integration

This frontend is designed to work with any backend that implements the DMS REST API specification. Key endpoints include:

- `GET/POST /api/documents` - Document CRUD operations
- `GET/POST /api/workflows` - Workflow management
- `GET/POST /api/users` - User and role management
- `GET /api/search` - Advanced search capabilities
- `GET /api/analytics` - Reporting and analytics

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎯 Roadmap

- [ ] AI-powered document classification
- [ ] Advanced OCR and content extraction
- [ ] Blockchain-based document integrity
- [ ] Mobile applications (iOS/Android)
- [ ] Advanced analytics and ML insights
- [ ] Multi-language support

## 📞 Support

For support and questions:
- 📧 Email: support@enterprise-dms.com
- 💬 Discord: [Join our community](https://discord.gg/enterprise-dms)
- 📚 Documentation: [docs.enterprise-dms.com](https://docs.enterprise-dms.com)

---

**Built with ❤️ for the enterprise by developers who understand document management needs.**