const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true }
}

// const keys = Object.keys(reservations)

const name = prompt('Please enter the name for your reservation');

if (name in reservations) {
  if (!reservations[name].claimed) {
    console.log("welcome " + name)
  }
  else {
    console.log("someone claimed your reservations")
  }
}
else {
    console.log("your not invited")

}


























