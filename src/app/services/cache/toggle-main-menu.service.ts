import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable({
	providedIn: 'root'
})
export class ToggleMainMenuService {
	private mainMenuIsOpenSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
	public readonly mainMenuIsOpen: Observable<boolean> = this.mainMenuIsOpenSubject.asObservable();

	constructor() {
		this.getIsMenuOpen();
	}

	getIsMenuOpen() {
		const isMenuOpen = localStorage.getItem(environment.applicationName + 'IsMenuOpen');
		if (isMenuOpen === null) {
			this.toggleMenuIsOpen();
			return;
		}
		this.mainMenuIsOpenSubject.next(JSON.parse(isMenuOpen));
	}

	toggleMenuIsOpen() {
		this.mainMenuIsOpenSubject.next(!this.mainMenuIsOpenSubject.value);
		localStorage.setItem(environment.applicationName + 'IsMenuOpen', JSON.stringify(this.mainMenuIsOpenSubject.value));
	}
}