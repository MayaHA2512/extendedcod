// get access to the required classes, methods, functions, properties
const { ADACOIN_ERROR, AdaError, TS, isvalidcurrency, Block, Chain } = require('../src/main.js'); 

describe('1.1 regression tests', () => {
  
  test('regression tests', () => {
    let adacoin_block = new Block( '2023-3-2', { credit: '25.50', tid: 'A0001' });
    const invalidBlock = new Block('2023-3-19', { credit: '-25.50', tid: 'A0001' });
    expect (adacoin_block).toBeInstanceOf(Block);
    expect (adacoin_block.ts).toBe('2023-3-2');
    expect (adacoin_block.tid).toBe('A0001');
    expect (adacoin_block.debitvalue).toEqual(0);
    expect (adacoin_block.creditvalue).toEqual(25.50);
    expect (adacoin_block.validtimestamp()).toBe(true);
    expect (adacoin_block.validtransaction()).toBe(true);

    //expect(() => adacoin_block.validtimestamp()).toThrow(AdaError);    
  });

  test('Adding blocks', () => {
    let adacoin_wallet = new Chain (); // create a new chain instance

    expect (adacoin_wallet).toBeInstanceOf(Chain);
    expect( () => adacoin_wallet.addblock( new Block( '2022-1-19', { credit: '25.50', tid: 'A0001' }) )) // add credit transaction
      .toThrow(AdaError);
    expect(() => adacoin_wallet.addblock( new Block( '2022-1-20', { debit: '5.50', tid: 'A0002' }) )) // add credit transaction
      .toThrow(AdaError);
    
    expect (adacoin_wallet.isvalid()).toBe(true);
    expect (adacoin_wallet.balance()).toBe('£0.00');
    // expect( () => adacoin_wallet.addblock( new Block( '2022-1-19', { credit: '-25.50', tid: 'A0001' }) )) // add credit transaction
    //   .toThrow(AdaError);
       
  });

  test('1.4 Testing the TS class fns', () => {
    
    let ts = new TS()
    expect (  ts.today ).not.toBe('2023-6-30'); // get timedate func. ?  instead of manually inputting 
    expect (  ts.isdatevalid('2023-1-13') ).toBe(true);
    expect(() => ts.isdatevalid('2023-13-13'))  // add credit transaction
      .toThrow(AdaError);
    expect(() => ts.dayssince('2023-13-13')).toThrow(AdaError);

// console.log ("today: " + ts.today )
// console.log ( "is valid: " +  ts.isdatevalid('2023-13-13') )    
  });  

    test('1.5 Test Case -- Check the timestamp is valid date...', () => {
    
    let ada_wallet = new Chain();
    let ada_block = new Block( '2023-1-2', { credit: '-25.50', tid: 'A0001' });
    let ada_dblock = new Block( '2023-1-2', { debit: '-25.50', tid: 'A0001' });
    let ada_block_over = new Block( '2023-1-2', { credit: '1000000.50', tid: 'A0001' });
    expect(() => ada_block.validtransaction())  // add credit transaction
      .toThrow(AdaError);
    expect(() => ada_dblock.validtransaction())  // add credit transaction
      .toThrow(AdaError);
      
    expect(() => ada_wallet.addblock(ada_block)).toThrow(AdaError)
    expect(ada_wallet.balance()).toBe("£0.00");
  
  
  
    
    
      // throws an ada error when there is a negative credit value 

// console.log ("today: " + ts.today )
// console.log ( "is valid: " +  ts.isdatevalid('2023-13-13') )    
  });  

    test('1.6 Test Case -- Check the timestamp is valid date...', () => {
    
    let ada_wallet = new Chain();
    let ada_block = new Block( '2023-1-2', { credit: '-25.50', tid: 'A0001' });
    let ada_dblock = new Block( '2023-1-2', { debit: '-25.50', tid: 'A0001' });
    let ada_block_over = new Block( '2023-1-2', { credit: '1000000.50', tid: 'A0001' });
    expect(() => ada_block.validtransaction())  // add credit transaction
      .toThrow(AdaError);
    expect(() => ada_dblock.validtransaction())  // add credit transaction
      .toThrow(AdaError);
      
    
    expect(ada_block_over.validtransaction()).toBe(false);
    
    
  
  
  
    
    
      // throws an ada error when there is a negative credit value 

// console.log ("today: " + ts.today )
// console.log ( "is valid: " +  ts.isdatevalid('2023-13-13') )    
  });

    test('1.6 Testing phash', () => {
    
    let ada_wallet = new Chain();
    let ada_block = new Block( '2023-3-2', { credit: '25.50', tid: 'A0001' });
    let ada_dblock = new Block( '2023-3-2', { credit: '25.50', tid: 'A0001' });
    ada_wallet.addblock(ada_block)
    expect(ada_wallet.balance())  // add credit transaction
      .toBe("£25.50");
    // Maya - add annother block 
    // Maya - change the value of the credit 
    // Maya - check if the phash is the same 
    
    
    
    
  
  
  
    
    
      // throws an ada error when there is a negative credit value 

// console.log ("today: " + ts.today )
// console.log ( "is valid: " +  ts.isdatevalid('2023-13-13') )    
  });


    
    
    
      // throws an ada error when there is a negative credit value 

// console.log ("today: " + ts.today )
});

// if credit value in negatives don't add to blockchain 


