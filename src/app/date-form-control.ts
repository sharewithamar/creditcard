import { FormControl } from '@angular/forms';

export class DateFormControl extends FormControl {
  setValue(value: string, options: any) {
    console.log(' value', value);
    console.log(' this.value', this);

    if (value.match(/[^0-9|\/]/gi)) {
      super.setValue(this.value, { ...options, emitModelToViewChange: true });
      return;
    }
    if (value.length > 5) {
      super.setValue(this.value, { ...options, emitModelToViewChange: true });
      return;
    }

    if (value.length === 2 && this.value.length === 3) {
      super.setValue(value, { ...options, emitModelToViewChange: true });
      return;
    }
    if (value.length === 2) {
      // console.log(value);
      super.setValue(value + '/', {
        ...options,
        emitModelToViewChange: true
      });
      return;
    }
    super.setValue(value, { ...options, emitModelToViewChange: true });
  }
}
