import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const routes = {
  //https://api.skypicker.com/locations?type=slug&term=albany-new-york-united-states&locale=en-US&active_only=true
  quote: (c: RandomQuoteContext) =>
    `locations?type=slug&term=albany-new-york-united-states&locale=en-US&active_only=true`
};

export interface RandomQuoteContext {
  // The quote's category: 'dev', 'explicit'...
  category: string;
}

@Injectable()
export class QuoteService {
  constructor(private httpClient: HttpClient) {}

  getRandomQuote(context: RandomQuoteContext): Observable<string> {
    return this.httpClient
      .cache()
      .get(routes.quote(context))
      .pipe(
        map((body: any) => body.locations),
        catchError(() => of('Error, could not load joke :-('))
      );
  }
}
