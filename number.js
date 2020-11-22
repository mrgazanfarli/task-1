function isAutomorphic(number) {
    const lastDigitOfNumber = number % 10;
    const lastDigitOfSqr = (lastDigitOfNumber * lastDigitOfNumber) % 10;

    return lastDigitOfSqr === lastDigitOfNumber;
}
