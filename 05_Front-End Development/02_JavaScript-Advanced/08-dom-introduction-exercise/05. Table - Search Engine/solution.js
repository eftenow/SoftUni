function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let rowsElement = document.querySelectorAll('tbody tr');
   


   function onClick() {
      for (const row of rowsElement) {
         row.classList.remove("select");
     };

      let searchedText = document.getElementById('searchField').value;
      console.log(searchedText);
      for (const row of rowsElement) {
         let currentRowContent = row.textContent;
         console.log(currentRowContent);
         if (currentRowContent.includes(searchedText)){
            row.classList.add("select");
         }
      }
      document.getElementById('searchField').value = '';
   }
}