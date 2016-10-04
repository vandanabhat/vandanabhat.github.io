'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('calculator', function() {

  beforeEach(function() {
    browser.get('http://localhost:8000/index.html');
  });
  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('Calculator');
  });


  describe('Addition Case 1', function() {
    it('should add 1 and -5', function() {
      element(by.css(".buttonSection button[value='1']")).click();
      element(by.css(".buttonSection button[value='+']")).click();
      element(by.css(".buttonSection button[value='-']")).click();
      element(by.css(".buttonSection button[value='5']")).click();
      element(by.id('equalTo')).click();
      expect(element(by.model('calculationDisplay')).evaluate('calculationDisplay')).toEqual(-4);
    });
  });

  describe('Addition Case 2', function() {
    it('should add 1 + 2 + 123 + 23456', function() {
      element(by.css(".buttonSection button[value='1']")).click();
      element(by.css(".buttonSection button[value='+']")).click();
      element(by.css(".buttonSection button[value='-']")).click();
      element(by.css(".buttonSection button[value='5']")).click();
      element(by.id('equalTo')).click();
      expect(element(by.model('calculationDisplay')).evaluate('calculationDisplay')).toEqual(-4);
    });
  });

  describe('Subtraction', function() {
    it('should subtract -120 and 23478', function() {
      element(by.css(".buttonSection button[value='-']")).click();
      element(by.css(".buttonSection button[value='1']")).click();
      element(by.css(".buttonSection button[value='2']")).click();
      element(by.css(".buttonSection button[value='0']")).click();
      element(by.css(".buttonSection button[value='-']")).click();
      element(by.css(".buttonSection button[value='2']")).click();
      element(by.css(".buttonSection button[value='3']")).click();
      element(by.css(".buttonSection button[value='4']")).click();
      element(by.css(".buttonSection button[value='7']")).click();
      element(by.css(".buttonSection button[value='8']")).click();

      element(by.id('equalTo')).click();
      expect(element(by.model('calculationDisplay')).evaluate('calculationDisplay')).toEqual(-23598);
    });
  });

  describe('Multiplication', function() {
    it('should add 1111000 and 4444466688', function() {
      element(by.css(".buttonSection button[value='1']")).click();
      element(by.css(".buttonSection button[value='1']")).click();
      element(by.css(".buttonSection button[value='1']")).click();
      element(by.css(".buttonSection button[value='1']")).click();
      element(by.css(".buttonSection button[value='0']")).click();
      element(by.css(".buttonSection button[value='0']")).click();
      element(by.css(".buttonSection button[value='0']")).click();
      element(by.css(".buttonSection button[value='*']")).click();
      element(by.css(".buttonSection button[value='4']")).click();
      element(by.css(".buttonSection button[value='4']")).click();
      element(by.css(".buttonSection button[value='4']")).click();
      element(by.css(".buttonSection button[value='4']")).click();
      element(by.css(".buttonSection button[value='4']")).click();
      element(by.css(".buttonSection button[value='6']")).click();
      element(by.css(".buttonSection button[value='6']")).click();
      element(by.css(".buttonSection button[value='6']")).click();
      element(by.css(".buttonSection button[value='8']")).click();
      element(by.css(".buttonSection button[value='8']")).click();
      element(by.id('equalTo')).click();
      expect(element(by.model('calculationDisplay')).evaluate('calculationDisplay')).toEqual(4937802490368000);
    });
  });

  describe('Multiplication', function() {
    it('divide -.456 and -0.345', function() {
      element(by.css(".buttonSection button[value='-']")).click();
      element(by.css(".buttonSection button[value='.']")).click();
      element(by.css(".buttonSection button[value='4']")).click();
      element(by.css(".buttonSection button[value='5']")).click();
      element(by.css(".buttonSection button[value='6']")).click();
      element(by.css(".buttonSection button[value='/']")).click();
      element(by.css(".buttonSection button[value='-']")).click();
      element(by.css(".buttonSection button[value='0']")).click();
      element(by.css(".buttonSection button[value='.']")).click();
      element(by.css(".buttonSection button[value='3']")).click();
      element(by.css(".buttonSection button[value='4']")).click();
      element(by.css(".buttonSection button[value='5']")).click();

      element(by.id('equalTo')).click();
      expect(element(by.model('calculationDisplay')).evaluate('calculationDisplay')).toEqual(-23598);
    });
  });

});
