import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { E_GLOBAL_SEARCH_ELEMENT_TYPE, GlobalSearchElement, PrimeNgAutoCompleteSearchEvent } from 'src/app/models/search';
import { GlobalSearchService } from 'src/app/services/global-search.service';

@Component({
  selector: 'app-global-search',
  templateUrl: './global-search.component.html',
  styleUrls: ['./global-search.component.scss']
})
export class GlobalSearchComponent implements OnInit {
  searchResults: GlobalSearchElement[] = [];

  searchText = '';

  constructor(
    private readonly globalSearchService: GlobalSearchService,
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
    this.globalSearchService.searchResults$
      .subscribe({
        next: (results) => {
          this.searchResults = results;
        },
        error: (error) => {
          console.log("An error occurred wile attempting to subscribe to a list of search results...");
          console.log(error);

          // return empty array to prevent failure
          this.searchResults = [];
        },
      });
  }

  onSearch(event: PrimeNgAutoCompleteSearchEvent) {
    this.globalSearchService.onSearch(event.query);
  }

  onSelect(value: GlobalSearchElement) {
    switch (value.search_element_type) {
      case E_GLOBAL_SEARCH_ELEMENT_TYPE.PRODUCT_CATEGORY:
        this.router.navigate(['/product-category/detail', value.uid]);
        break;

      case E_GLOBAL_SEARCH_ELEMENT_TYPE.PRODUCT:
        this.router.navigate(['/product/detail', value.uid]);
        break;

      case E_GLOBAL_SEARCH_ELEMENT_TYPE.PRODUCT_VARIANT:
        this.router.navigate(['/product-variant/detail', value.uid]);
        break;

      default:
        break;
    };
  }
}
