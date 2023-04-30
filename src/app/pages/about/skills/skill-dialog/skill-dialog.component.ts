import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { skillsContentConfig } from './skills-content.config';

@Component({
  selector: 'app-skill-dialog',
  templateUrl: './skill-dialog.component.html',
  styleUrls: ['./skill-dialog.component.css'],
})
export class SkillDialogComponent {
  _config = skillsContentConfig;
  skillTitle: string | undefined;
  content: string | undefined;
  image: any;

  constructor(
    public dialogRef: MatDialogRef<SkillDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {
    this.getContent(data);
  }

  getContent(skill: string): void {
    switch (skill) {
      case 'C#':
        this.image = this._config.cSharp.img;
        this.content = this._config.cSharp.content;
        break;
      case 'C++':
        this.image = this._config.cPlus.img;
        this.content = this._config.cPlus.content;
        break;
      case 'Python':
        this.image = this._config.python.img;
        this.content = this._config.python.content;
        break;
      case 'Angular':
        this.image = this._config.angular.img;
        this.content = this._config.angular.content;
        break;
      case 'NodeJS':
        this.image = this._config.node.img;
        this.content = this._config.node.content;
        break;
      case 'React':
        this.image = this._config.react.img;
        this.content = this._config.react.content;
        break;
      case 'HTML':
        this.image = this._config.html.img;
        this.content = this._config.html.content;
        break;
      case 'CSS':
        this.image = this._config.css.img;
        this.content = this._config.css.content;
        break;
      case 'JavaScript':
        this.image = this._config.javaScript.img;
        this.content = this._config.javaScript.content;
        break;
      default:
        break;
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}
