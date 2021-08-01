import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
  isCheck  = false;
  listSchool = ['Tam Quan', 'Đào Duy Từ', 'Nguyễn Trân', ' Hoài Nhơn'] 

  constructor() { }

  ngOnInit(): void {
  }

  onChange(value) {
    this.isCheck = value
    console.log(value)
    console.log(this.isCheck)
  }
  trackById(index,item){
    return item.id
  }

}
