import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[car-mask]',
  host: {
    '(ngModelChange)' : 'change()',
    '(keyup)' : 'change()',
    '(focusout)' : 'left()'
  }
})
export class CarMaskDirective {

  constructor(private el: ElementRef) {}
  curVal: string;

  left() {
    this.curVal = null;
    this.change();
  }

  change() {
    let val: string = this.el.nativeElement.value;
    if (val === this.curVal) {
      return;
    }
    if (this.curVal && this.curVal.length > val.length) {
      let ok = true;
      for (let i = 0; i < val.length; i++) {
        if (val.charAt(i) !== this.curVal.charAt(i)) {
          ok = false;
        }
      }
      if (ok) {
        this.curVal = val;
        return;
      }
    }
    val = val.toUpperCase();
    let newVal = '';
    for (let i = 0; i < val.length; i++) {
      let ch = val.charAt(i);
      if ((i < 3 && ch >= 'A' && ch <= 'Z')
        || (i > 3 && i < 7 && ch <= '9' && ch >= '0')
        || (i > 7 && i < 10 && ch <= '9' && ch >= '0')) {
        newVal += ch;
      } else if ((i === 3 || i === 7) && ch === '-') {
        newVal += '-';
      } else {
        break;
      }
    }
    if (newVal.length === 3 || newVal.length === 7) {
      newVal = newVal + '-';
    }
    this.curVal = newVal;
    this.el.nativeElement.value = newVal;
  }
}

@Directive({
  selector: '[user-id-mask]',
  host: {
    '(ngModelChange)' : 'change()',
    '(keyup)' : 'change()',
    '(focusout)' : 'left()'
  }
})
export class UserIdMaskDirective {

  constructor(private el: ElementRef) {}

  left() {
    this.change();
  }

  change() {
    let val: string = this.el.nativeElement.value;
    let newVal = '';
    for (let i = 0; i < val.length; i++){
      let ch = val.charAt(i);
      if (ch <= '9' && ch >= '0') {
        newVal += ch;
      } else {
        break;
      }
    }
    if (newVal.length > 9) {
      newVal = newVal.substr(0, 9);
    }
    this.el.nativeElement.value = newVal;
  }
}
