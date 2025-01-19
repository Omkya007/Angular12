import { CreditCardDirective } from './credit-card.directive';

describe('CreditCardDirective', () => {
  it('should create an instance', () => {
    const elementRef = jasmine.createSpyObj('ElementRef', ['nativeElement']);
    const directive = new CreditCardDirective(elementRef);
    expect(directive).toBeTruthy();
  });
});
