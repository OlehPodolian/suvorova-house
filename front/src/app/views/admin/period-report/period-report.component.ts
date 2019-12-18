import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {PeriodReportItem} from './period-report-item.model';
import {MdbTableDirective, MdbTablePaginationComponent} from 'angular-bootstrap-md';

@Component({
  selector: 'app-period-report',
  templateUrl: './period-report.component.html',
  styleUrls: ['./period-report.component.scss']
})
export class PeriodReportComponent implements OnInit, AfterViewInit {

  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;
  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild('row', { static: true }) row: ElementRef;

  elements: PeriodReportItem [] = [];
  headElements = PeriodReportItem.heads();
  // searchText: string = '';
  previous: string;

  maxVisibleItems: number = 10;

  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    for (let i = 1; i <= 15; i++) {
      this.elements.push(new PeriodReportItem(i, i, 'Січень, 2020', 10 + i, 10 * i * i, i % 2 === 0));
    }

    this.mdbTable.setDataSource(this.elements);
    this.elements = this.mdbTable.getDataSource();
    this.previous = this.mdbTable.getDataSource();
  }

  ngAfterViewInit() {
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(this.maxVisibleItems);

    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();
  }

  isPaid(value: boolean) {
    return value ? 'ТАК' : 'НІ';
  }

  getSortColumn(head: string) {
    switch (head) {
      case 'Квартира, №':
        return 'appNumber';
      case 'Місяць, Рік':
        return 'date';
      case 'Витрачено':
        return 'value';
      case 'Вартість':
        return 'price';
      case 'Сплачено':
        return 'paid';
      default:
        return 'id';
    }
  }

  // searchItems() {
  //   const prev = this.mdbTable.getDataSource();
  //
  //   if (!this.searchText) {
  //     this.mdbTable.setDataSource(this.previous);
  //     this.elements = this.mdbTable.getDataSource();
  //   }
  //
  //   if (this.searchText) {
  //     this.elements = this.mdbTable.searchLocalDataBy(this.searchText);
  //     this.mdbTable.setDataSource(prev);
  //   }
  //
  //   this.mdbTablePagination.calculateFirstItemIndex();
  //   this.mdbTablePagination.calculateLastItemIndex();
  //
  //   this.mdbTable.searchDataObservable(this.searchText).subscribe(() => {
  //     this.mdbTablePagination.calculateFirstItemIndex();
  //     this.mdbTablePagination.calculateLastItemIndex();
  //   });
  // }

}
