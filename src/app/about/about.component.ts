import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  skills = {
    languages: ['HTML', 'CSS', 'JavaScript', 'SQL', 'C#'],
    frameworksAndLibraries: ['Bootstrap', 'Tailwind CSS', 'Angular', 'React', 'React Native', 'Node.js', 'Express.js', 'ADO.NET'],
    databases: ['SQL Server', 'MySQL', 'MongoDB'],
    tools: ['Visual Studio Code', 'IntelliJ IDEA', 'Jira', 'Git', 'GitHub', 'Postman', 'Swagger'],
    softSkills: [
      'Time Management',
      'Excellent Communication',
      'Adaptability',
      'Problem Solving',
      'Team Collaboration'
    ]
  };
}
