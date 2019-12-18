import {Component, OnInit} from '@angular/core';
import {ChartColor} from './chart-color';

@Component({
    selector: 'app-dashboard1',
    templateUrl: './dashboard1.component.html',
    styleUrls: ['./dashboard1.component.scss']
})
export class Dashboard1Component implements OnInit {

    public monitorChartType = 'line';
    public structureChartType = 'bar';

    public structureChartDatasets: Array<any> = [
        {data: [3000, 40, 60, 51, 56, 55, 40], label: 'насос'},
        {data: [50, 80, 40, 69, 36, 37, 110], label: 'електроенергія'},
        {data: [50, 58, 30, 90, 45, 65, 30], label: 'запчастини'},
        {data: [400, 58, 30, 90, 45, 65, 30], label: 'авто'}
    ];

    public monitorChartDatasets: Array<any> = [
        {data: [10, 12, 8, 7, 15, 12, 9], label: 'Квартира №1, M3'}
    ];

    public structureChartLabels: Array<any> = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень'];

    public monitorChartLabels: Array<any> = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень'];

    public structureChartColors: Array<any> = [
        // ChartColor.structureColors(this.structureChartDatasets.length)
        ChartColor.red(),
        ChartColor.navy(),
        ChartColor.green(),
        ChartColor.brown()
    ];

    public monitorChartColors: Array<any> = [ChartColor.monitor()];

    public structureChartOptions: any = {
        responsive: true
    }
    public monitorChartOptions: any = {
        responsive: true
    };


    public dateOptionsSelect: any[];
    public bulkOptionsSelect: any[];
    public showOnlyOptionsSelect: any[];
    public filterOptionsSelect: any[];

    public chartOptions: any = {
        responsive: true,
        legend: {
            labels: {
                fontColor: '#5b5f62',
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: '#5b5f62',
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: '#5b5f62',
                }
            }]
        }
    };

    constructor() {

    }

    ngOnInit() {
    }

}
