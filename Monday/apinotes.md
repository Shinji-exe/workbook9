API Notes

JSON
JSON = "string"
JSON is a string for of a JavaScript object
use JSON.parse() to turn a json string back into a beach ball aka a js object
use JSON.stingify to turn a javascript object into a string so it can be passed over the network
Tools to make API calls
Browser
click the link and it opens in the browser
only works for GET methods
REST Client VS Code Extension
create .http file
type request on the left
click "send request"
see response on the right
POSTMAN
GUI (Graphical User Interface)
choose HTTP verb from dropdown
past URL into textbox
click Send
fetch function
how you call API from JavaScript code
doesn't happen right away (asynchronous)
need to await it
if you await you need to be in a function marked as async
OR
call the .then function on the promise
happens in the background of the browser (AJAX)

## HTTP Methods(Verbs)
-GET(Read) (Works for one thing or many things)
-POST(create/New/Insert)
-PUT(Update/Change/Edit/Mutate)
-DELETE(Delete/Remove)
> The second letter of PUT is U so it updates

CRUD
C - Create (POST)
R - Read (GET)
U - Update (PUT) 
D - Delete (DELETE)

GET /api/customers

Gets customer 101
GET /api/customers/101

Inserts accompanying body data into the customer data store
POST /api/customers

Updates customer data store from accompanying body data
PUT /api/customers

Deletes customer 101
DELETE api/customers/101
