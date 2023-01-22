function search() {
   let townsElements = document.querySelectorAll('ul li');
   let searchTextElement = document.getElementById('searchText');
   let matchesElement = document.getElementById('result');
   let matches = 0;
   for (const town of townsElements) {
      if (town.textContent.includes(searchTextElement.value)) {
         console.log('works');
         town.style.fontWeight = 'bold';
         town.style.textDecoration = "underline";
         matches++;
      }

   }
   matchesElement.textContent = `${matches} matches found`;
}
