import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  public title:string  = 'cybersoft';

  thongTinSanPham:any = {
    tenSP:'Iphone',
    soLuong:15,
    donGia:1000
  }

  constructor() { }

  ngOnInit(): void {

  }

  renderPhim = () => {
    const tenPhim:string = 'abc';
    return {
      id:1,
      name:'EndGame',
      img:'https://picsum.photos/300/300'
    }
  }

  //Phương thức xử lý sự kiện trên giao diện
  changeTitle = (newTitle:string) => {
    this.title = newTitle;
  }

}
