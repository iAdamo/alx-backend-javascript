/* eslint-disable @typescript-eslint/triple-slash-reference */
// Reference to the type declarations for the CRUD module
/// <reference path="./crud.d.ts" />

// Import the types RowID and RowElement from the 'interface' module
import { RowID, RowElement } from './interface';

// Import everything from the 'crud' module as a namespace called 'CRUD'
import * as CRUD from './crud';

// Create a new row element
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// Insert the new row into the database using the insertRow function from the CRUD module
// The insertRow function returns the ID of the new row
const newRowID: RowID = CRUD.insertRow(row);

// Create an updated version of the row with an 'age' property
const updatedRow: RowElement = { ...row, age: 23 };

// The following lines are commented out, but if uncommented, they would:

// Update the row in the database with the new data using the updateRow function from the CRUD module
// CRUD.updateRow(newRowID, updatedRow);

// Delete the row with ID 125 from the database using the deleteRow function from the CRUD module
// CRUD.deleteRow(125);