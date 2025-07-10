import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.css'
})
export class CertificationsComponent {
  certificates = [
    { name: 'Data Analytics with Python', issuer: 'NPTEL - IIT Kharagpur', date: 'May 2022', type: 'Elite Certificate' },
    { name: 'Blockchain and its Applications', issuer: 'NPTEL - IIT Kharagpur', date: 'May 2022', type: 'Elite Certificate' },
    { name: 'JavaScript Certification', issuer: 'HackerRank', date: 'March 2023', type: 'Basic & Intermediate' },
    { name: 'Node.js Certification', issuer: 'HackerRank', date: 'August 2023', type: 'Basic & Intermediate' }
  ];
}
