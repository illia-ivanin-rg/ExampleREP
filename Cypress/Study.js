// Test Websites
webdriveruniversity.com
automationteststore.com


// launch cypress 
./node_modules/.bin/cypress open 

 SELECTORS
// how to search  the selector with id : 
  cy.get("[id='#id-name']")

// How to search selectors  with class: 
 cy.get("//div[@class='class_name'][1] or [last()]")
 cy.get(".class_name")
 cy.get("[class='navbar navbar-inverse navbar-fixed-top']")  //multiple classes
 

// How to find by data label: 
  cy.get("[data-id="51"]")


// How to find element by text : 
 "//span[text()='See Our Most featured Products'] " 
 " //span[text='']"
 "//[text=''] " 

 //BY tag name 
 cy.get("input")

 //By attribute name and value
 cy.get("input[name='first_name']")

 //By two different attributes
 cy.get("[name='email'][placeholder='Email Address']")

 // By Xpath
 cy.xpath("//input[@name='first_name']")




Expression	Description
// nodename	Selects all nodes with the name "nodename"
// /	Selects from the root node
// //	Selects nodes in the document from the current node that match the selection no matter where they are
// .	Selects the current node
// ..	Selects the parent of the current node
// @	Selects attributes





Cypress E-BOX  

// TZ=Etc/UTC yarn cypress run --spec "cypress/integration/**/*" --headless

// yarn build
// yarn start

// RAILS_ENV=test rails db:drop db:create db:migrate
// RAILS_ENV=test rails s