import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { skillsContentConfig } from './skills-content.config';

export interface ContentObject {
id:string,
title:string,
img:string,
content:string
}

@Component({
  selector: 'app-skill-dialog',
  templateUrl: './skill-dialog.component.html',
  styleUrls: ['./skill-dialog.component.css'],
})
export class SkillDialogComponent {
  _config = skillsContentConfig;
  contentObject: ContentObject | undefined
  content: string | undefined;
  image: string | undefined;

  constructor(
    public dialogRef: MatDialogRef<SkillDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {
    this.content = this.getContent(data);
  }

  getContent(skill: string) {
    switch (skill) {
      case 'C#':
        this.image = this._config.cSharp.img;
        return this._config.cSharp.content;
      case 'C++':
        this.image = this._config.cPlus.img;
        return this._config.cPlus.content;
      default:
        return undefined;
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}
