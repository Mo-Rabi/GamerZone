import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchSubject = new Subject<string>();

  searchObservable = this.searchSubject.asObservable();

  search(term: string) {
    this.searchSubject.next(term);
  }
}