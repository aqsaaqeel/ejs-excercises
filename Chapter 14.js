//Q-1: Given a data set of mountains, an array of objects with name, height, and place properties, generate the DOM structure for a table that enumerates the objects. 
// It should have one column per key and one row per object, plus a header row with <th> elements at the top, listing the column names. Write this so that the columns are automatically derived from the objects, 
//by taking the property names of the first object in the data. Add the resulting table to the element with an id attribute of "mountains" so that it becomes visible in the document.
//Once you have this working, right-align cells that contain number values by setting their style.textAlign property to "right".

//Solution

// Sample data set of mountains
const mountains = [
    { name: "Mount Everest", height: 8848, place: "Nepal" },
    { name: "K2", height: 8611, place: "Pakistan" },
    { name: "Kangchenjunga", height: 8586, place: "Nepal" }
];

// Function to generate the table
function generateTable(data) {
    const table = document.createElement("table");
    const headerRow = document.createElement("tr");

    // Extract column names from the first object
    const columns = Object.keys(data[0]);

    // Create header row
    columns.forEach(columnName => {
        const th = document.createElement("th");
        th.textContent = columnName;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // Create rows with data
    data.forEach(obj => {
        const row = document.createElement("tr");
        columns.forEach(columnName => {
            const cell = document.createElement("td");
            cell.textContent = obj[columnName];

            // Right-align cells containing number values
            if (typeof obj[columnName] === "number") {
                cell.style.textAlign = "right";
            }
            row.appendChild(cell);
        });
        table.appendChild(row);
    });

    return table;
}

// Get the element to append the table to
const mountainsElement = document.getElementById("mountains");

// Generate and append the table
mountainsElement.appendChild(generateTable(mountains));
