function solve() {
  let textElement = document.getElementById('text').value;
  let conventionElement = document.getElementById('naming-convention').value;
  let resultElement = document.getElementById('result');
  let textElements = textElement.split(' ')

  let result = [];

  while (textElements.length > 0) {
    let word = textElements.shift();
    let firstLetterCapitalized = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    result.push(firstLetterCapitalized);
  }
  console.log(result);
  result = result.join('');
 

  if (conventionElement == 'Camel Case') {
    result = result[0].toLowerCase() + result.slice(1);

  } else if (conventionElement != 'Camel Case' && conventionElement != 'Pascal Case'){
    result = 'Error!';
  }

  resultElement.textContent = result;
}