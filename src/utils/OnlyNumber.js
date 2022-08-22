const OnlyNumber = (event) => {
    if (event.key === "e" || event.key === "," || event.key === "." || event.key === "-" || event.key === "+") {
      event.preventDefault();
    }
  }
export default OnlyNumber;