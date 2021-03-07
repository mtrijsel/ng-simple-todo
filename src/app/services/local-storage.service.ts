import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LocalStorageService {
  constructor() {}

  getData(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }

  setData(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
  }
}
