module( "Non-functional example tests." );
test("hello test", function () {
    ok(1 == "1", "Passed!");
});

module( "Calculator tests" );
test("add five", function () {
    // Arrange
    var number = 2;
    var expected = 7;

    // Act
    var result = calculator.addFive(number);

    // Assert
    equal(expected, result);
});

test("add six (this should fail)", function () {
    // Arrange
    var number = 2;
    var expected = 8;

    // Act
    var result = calculator.addSix(number);

    // Assert
    equal(expected, result);
});

test("add seven", function () {
    // Arrange
    var number = 2;
    var expected = 9;

    // Act
    var result = calculator.addSeven(number);

    // Assert
    equal(expected, result);
});