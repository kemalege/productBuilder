const OnlyText = (event) => {
    
  const re = /^[A-Za-z]+$/
  if( event.key ==="" || !re.test(event.key)) {
    event.preventDefault();
  }
  
};

export default OnlyText;
