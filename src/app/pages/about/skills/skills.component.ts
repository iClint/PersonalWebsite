import { Component } from '@angular/core';
import { skillsConfig } from './skills.config';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  _config = skillsConfig;
}
