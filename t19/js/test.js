describe("brackets", function(){
    it ("1)(()(())2(() --- 2", function(){
        assert.equal(checkBrackets('1)(()(())2(()'), 2);
    });

    it ("1)(()(())2(()( --- 3", function(){
        assert.equal(checkBrackets('1)(()(())2(()'), 3);
    });

    it ("1)(()(())2(()(( --- 4", function(){
        assert.equal(checkBrackets('1)(()(())2(()'), 4);
    });

    it ("1)(()(())2(()((( --- 5", function(){
        assert.equal(checkBrackets('1)(()(())2(()'), 5);
    });

    it ("1)(()(())2(()(((( --- 6", function(){
        assert.equal(checkBrackets('1)(()(())2(()'), 6);
    });
});




it ("()(())2() --- 0", function(){
    assert.equal(checkBrackets('()(())2()'), 0);
});

it ("()(())2()() --- 0", function(){
    assert.equal(checkBrackets('()(())2()()'), 0);
});

it ("()(())2()()() --- 0", function(){
    assert.equal(checkBrackets('()(())2()()()'), 0);
});

it ("()(())2()()()() --- 0", function(){
    assert.equal(checkBrackets('()(())2()()()()'), 0);
});

it ("()(())2()()()()() --- 0", function(){
    assert.equal(checkBrackets('()(())2()()()()()'), 0);
});

it ("()(())2()()()()()() --- 0", function(){
    assert.equal(checkBrackets('()(())2()()()()()()'), 0);
});

it ("()(())2()()()()()()() --- 0", function(){
    assert.equal(checkBrackets('()(())2()()()()()()()'), 0);
});

it ("()(())2()()()()()()()() --- 0", function(){
    assert.equal(checkBrackets('()(())2()()()()()()()()'), 0);
});

it ("()(())2()()()()()()()()() --- 0", function(){
    assert.equal(checkBrackets('()(())2()()()()()()()()()'), 0);
});

it ("()(())2()()()()()()()()()() --- 0", function(){
    assert.equal(checkBrackets('()(())2()()()()()()()()()()'), 0);
});




































// describe("pow", function() {

//     it("возводит в n-ю степень", function() {
//       assert.equal(pow(2, 3), 8);
//       });

//     it("при возведении 3 в 4ю степень равен 81", function() {
//         assert.equal(pow(3, 4), 81);
//       });
    
  
//   });








// describe("pow", function() {

//     function makeTest(x) {
//       var expected = x * x * x;
//       it("при возведении " + x + " в степень 3 результат: " + expected, function() {
//         assert.equal(pow(x, 3), expected);
//       });
//     }
  
//     for (var x = 1; x <= 5; x++) {
//       makeTest(x);
//     }
  
//   });
  