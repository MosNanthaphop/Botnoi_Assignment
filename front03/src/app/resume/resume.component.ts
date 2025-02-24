import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  name = 'Nanthaphop Weerahong';
  title = 'Computer Science Student';
  phone = '081-116-5125';
  email = 'nanthaphop.weerahong@gmail.com';
  address = 'Nongbua, Banphaeo, Samut Sakhon 74120';
  
  leftSections = [
    {
      title: 'Contact',
      items: [
        'Phone: 081-116-5125',
        'Email: nanthaphop.weerahong@gmail.com',
        'Address: Nongbua, Banphaeo, Samut Sakhon 74120'
      ]
    },
    {
      title: 'Education',
      items: [
        'Silpakorn University - BSc Computer Science (2022-2026, GPA 3.17)',
        'Banphaeowittaya School - Sciences and Mathematics (2019-2022, GPAX 3.62)'
      ]
    },
    {
      title: 'Programming Skills',
      items: [
        'Java, C, Python, Dart, Go, PHP, SQL, HTML, CSS, JavaScript'
      ]
    },
    {
      title: 'Languages',
      items: [
        'Thai (Native)',
        'English (Intermediate - B1)'
      ]
    }
  ];
  
  rightSections = [
    {
      title: 'Experience',
      items: [
        'E-commerce Web Application - Full Stack Developer (HTML, CSS, JavaScript)',
        'Download File with Zero Copy and Multithreading - Java Developer',
        'Currency Converter App - Mobile Developer (Dart, JavaScript)'
      ]
    }
  ];
}