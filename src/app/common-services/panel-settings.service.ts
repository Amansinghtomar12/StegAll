import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PanelSettingsService {

  constructor() { }

	showBitPlaneBrowser: boolean = false;
  showStrings: boolean = false;

	closePanels(): void {
		/*
		Used to close all panels on the image screen
		*/
		this.showBitPlaneBrowser = false;
    this.showStrings = false;
	}

}
