import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {

  dates=[
    {numOfDay:1, day:'الاربعاء',action:6 ,bgc:'background-color:#fafafa;color:#dddddd'},
    {numOfDay:2, day:'الخميس',action:6 ,bgc:'background-color:#fafafa ;color:#dddddd'},
    {numOfDay:3, day:'الجمعه',action:6 ,bgc:'background-color:#fafafa ;color:#dddddd'},
    {numOfDay:4, day:'السبت',action:6 ,bgc:'background-color:#fafafa ;color:#dddddd'},
    {numOfDay:5, day:'الاحد',action:6 ,bgc:'background-color:#fafafa ;color:#dddddd'},
    {numOfDay:6, day:'الاثنين',action:6 ,bgc:'background-color:#fafafa ;color:#dddddd'},
    {numOfDay:7, day:'الثلاثاء',action:6 ,bgc:'background-color:#fafafa ;color:#dddddd'},
    {numOfDay:8, day:'الاربعاء',action:6 ,bgc:'background-color:#fafafa ;color:#dddddd'},
    {numOfDay:9, day:'الخميس',action:6 ,bgc:'background-color:#fafafa ;color:#dddddd'},
    {numOfDay:10, day:'الجمعه',action:6 ,bgc:'background-color:#fafafa ;color:#dddddd'},
    {numOfDay:11, day:'السبت',action:6 ,bgc:'background-color:#fafafa ;color:#dddddd'},
    {numOfDay:12, day:'الاحد',action:6 ,bgc:'background-color:#fafafa ;color:#dddddd'},
    {numOfDay:13, day:'الاثنين',action:6 ,bgc:'background-color:#fafafa ;color:#dddddd'},
    {numOfDay:14, day:'الثلاثاء',action:6 ,bgc:'background-color:#fafafa ;color:#dddddd'},
    {numOfDay:15, day:'الاربعاء',action:6 ,bgc:'background-color:#fafafa ;color:#dddddd'},
    {numOfDay:16, day:'الخميس',action:6 ,bgc:'background-color:#fafafa ;color:#dddddd'},
    {numOfDay:17, day:'الجمعه',action:6 ,bgc:'background-color:#ebfaf4 ;color:#888'},
    {numOfDay:18, day:'السبت',action:6 ,bgc:'background-color:#fdf9f4 ;color:#888'},
    {numOfDay:19, day:'الاحد',action:6 ,bgc:'background-color:#dcfcff ;color:#888'},
    {numOfDay:20, day:'الاثنين',action:6 ,bgc:'background-color:#f4f4fd ;color:#888'},
    {numOfDay:21, day:'الثلاثاء',action:6 ,bgc:'background-color:#fdeffe ;color:#888'},
    {numOfDay:22, day:'الاربعاء',action:6 ,bgc:'background-color:#fef9e4 ;color:#888'},
    {numOfDay:23, day:'الخميس',action:6 ,bgc:'background-color:#fef0ef ;color:#888'},
    {numOfDay:24, day:'الجمعه',action:6 ,bgc:'background-color:#ebfaf4 ;color:#888'},
    {numOfDay:25, day:'السبت',action:6 ,bgc:'background-color:#fdf9f4 ;color:#888'},
    {numOfDay:26, day:'الاحد',action:6 ,bgc:'background-color:#dcfcff ;color:#888'},
    {numOfDay:27, day:'الاثنين',action:6 ,bgc:'background-color:#f4f4fd ;color:#888'},
    {numOfDay:28, day:'الثلاثاء',action:6 ,bgc:'background-color:#fdeffe ;color:#888'},
    {numOfDay:29, day:'الاربعاء',action:6 ,bgc:'background-color:#ebfaf4 ;color:#888'},
    {numOfDay:30, day:'الخميس',action:6 ,bgc:'background-color:#dcfcff ;color:#888'},
    {numOfDay:31, day:'الجمعه',action:6 ,bgc:'background-color:#f4f4fd ;color:#888'},
    {numOfDay:1, day:'السبت',action:6 ,bgc:'background-color:#fdeffe ;color:#888'},
    {numOfDay:2, day:'الاحد',action:6 ,bgc:'background-color:#fafafa ;color:#888'},
    {numOfDay:3, day:'الاثنين',action:6 ,bgc:'background-color:#fafafa ;color:#888'},
    {numOfDay:4, day:'الثلاثاء',action:6 ,bgc:'background-color:#fafafa ;color:#888'},
    {numOfDay:5, day:'الخميس',action:6 ,bgc:'background-color:#fafafa ;color:#888'},
  ]
  // ===========================
  years=[
    {year:'يناير' ,style:'color:#cacaca; background-color:transparent;border:none '},
    {year:'فبراير' ,style:'color:#cacaca; background-color:transparent;border:none '},
    {year:'مارس' ,style:'color:#cacaca; background-color:transparent;border:none '},
    {year:'ابريل' ,style:'color:#cacaca; background-color:transparent;border:none '},
    {year:'مايو' ,style:'color:#cacaca; background-color:#1766ff;border:none;color:#fff '},
    {year:'يونيه' ,style:'color:#0a0094; background-color:transparent;border:none '},
    {year:'يوليو' ,style:'color:#0a0094; background-color:transparent;border:none '},
    {year:'اغسطس' ,style:'color:#0a0094; background-color:transparent;border:none '},
    {year:'سبتمبر' ,style:'color:#0a0094; background-color:transparent;border:none '},
    {year:'اكتوبر' ,style:'color:#0a0094; background-color:transparent;border:none '},
    {year:'نوفمبر' ,style:'color:#0a0094; background-color:transparent;border:none '},
    {year:'ديسمبر' ,style:'color:#0a0094; background-color:transparent;border:none '},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
