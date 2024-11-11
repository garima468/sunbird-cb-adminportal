import { Component, Inject, OnInit } from '@angular/core'
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA, MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog'
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'ws-app-solution-survey-upload',
  templateUrl: './solution-survey-upload.component.html',
  styleUrls: ['./solution-survey-upload.component.scss'],
})
export class SolutionSurveyUploadComponent implements OnInit {
  surveyFileUploadUrl = ''

  constructor(
    public dialogRef: MatDialogRef<SolutionSurveyUploadComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    private domSanitizer: DomSanitizer
  ) {
    this.surveyFileUploadUrl = this.dialogData.surveyFileUploadUrl
  }

  ngOnInit() {
  }

  getSurveyFileUploadUrl() {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(this.surveyFileUploadUrl)
  }

}
