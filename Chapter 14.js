//Q-1: Given a data set of mountains, an array of objects with name, height, and place properties, generate the DOM structure for a table that enumerates the objects. 
// It should have one column per key and one row per object, plus a header row with <th> elements at the top, listing the column names. Write this so that the columns are automatically derived from the objects, 
//by taking the property names of the first object in the data. Add the resulting table to the element with an id attribute of "mountains" so that it becomes visible in the document.
//Once you have this working, right-align cells that contain number values by setting their style.textAlign property to "right".

//Solution

<h1>Mountains</h1>

<div id="mountains"></div>

<script>
  const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
  ];

  // Your code here

  const generateTable = (data) =>{
  const table = document.createElement("table");
  const headerRow = document.createElement("tr");
    const columns = Object.keys(data[0]);
    columns.forEach(columnName => {
      const tableHeader = document.createElement("th");
      tableHeader.textContent = columnName;
      headerRow.appendChild(tableHeader);
      });
    table.appendChild(headerRow);

    data.forEach(obj =>{
      const newRow = document.createElement("tr");
      const cellDetails = Object.values(obj);
      cellDetails.forEach(cell =>{
        const tableDetail = document.createElement("td");
        tableDetail.textContent = cell;
        if(typeof(cell) === "number"){
          tableDetail.style.textAlign = "right";
          }
        newRow.appendChild(tableDetail);
        })
      table.appendChild(newRow);
      })
                                            
    return table;
  }
  const generatedTable = generateTable(MOUNTAINS);
  const mountians = document.getElementById("mountains");
  mountains.appendChild(generatedTable);
  
</script>
const mountainsElement = document.getElementById("mountains");

// Generate and append the table
mountainsElement.appendChild(generateTable(mountains));

/*Q-2: The document.getElementsByTagName method returns all child elements with a given tag name.
Implement your version of this as a function that takes a node and a string (the tag name) as arguments and returns 
an array containing all descendant element nodes with the given tag name. Your function should go through the document itself. 
It may not use a method like querySelectorAll to do the work.*/

//Solution

function byTagName(node, tagName) {
  let elements = [];

  function parseNodes(node) {
    if (node.nodeType === Node.ELEMENT_NODE) {
      if (node.nodeName.toLowerCase() === tagName.toLowerCase()) {
        elements.push(node);
      }
      for (let child of node.childNodes) {
        parseNodes(child);
      }
    }
  }

  parseNodes(node);
  return elements;
}
console.log(byTagName(document.body, "h1").length);
  // → 1
  console.log(byTagName(document.body, "span").length);
  // → 3
  let para = document.querySelector("p");
  console.log(byTagName(para, "span").length);
  // → 2

/* Q3: 
