import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Assisted Collaborative Service Recommendation',
      description: 'Developed a system to recommend web services from a vast pool of emerging services with blockchain integration.',
      technologies: ['Blockchain', 'Encryption', 'Web Services'],
      features: [
        'Ciphertext-Policy Attribute-Based Encryption',
        'Blockchain technology integration',
        'DoS attack mitigation'
      ]
    },
    {
      title: 'User Lifecycle Management System',
      description: 'Engineered a scalable User Management System for schools with secure authentication and role-based access.',
      technologies: ['.NET Core', 'SQL Server', 'MySQL', 'React', 'Entity Framework'],
      features: [
        'Secure user authentication',
        'Role-based access control',
        'Profile management system',
        'Optimized database interactions'
      ]
    }
  ];
}
