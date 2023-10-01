// Code your solution in this file!
function distanceFromHqInBlocks(street) {
  return Math.abs(street - 42);
}

function distanceFromHqInFeet(street) {
  return distanceFromHqInBlocks(street) * 264;
}

function distanceTravelledInFeet(street1, street2) {
  return Math.abs((street1 - street2) * 264);
}

function calculatesFarePrice(start, destination) {
  const price = distanceTravelledInFeet(start, destination);
  if (price <= 400) {
    return 0;
  } else if (price > 400 && price <= 2000) {
    return (price - 400) * 0.02;
  } else if (price > 2000 && price <= 2500) {
    return 25;
  } else if (price > 2500) {
    return "cannot travel that far";
  }
}
