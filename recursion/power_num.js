function powerNumber(base, power) {
  if (power == 0) return 1;
  return base * powerNumber(base, --power);
}

console.log(powerNumber(2, 4));
