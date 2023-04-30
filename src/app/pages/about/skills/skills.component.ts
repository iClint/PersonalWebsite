import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SkillDialogComponent } from './skill-dialog/skill-dialog.component';
import { skillsConfig } from './skills.config';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  _config = skillsConfig;

  constructor(public dialog: MatDialog) {}

  openDialog(event: any): void {
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;
    const dialogRef = this.dialog.open(SkillDialogComponent, { data: value });
    dialogRef.disableClose = true;
  }
}
