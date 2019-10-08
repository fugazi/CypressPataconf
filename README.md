# Introduction to Cypress at Pataconf
Introduction to Cypress: From beginner to pro


Prerequisitos:
- Node.js  
- NPM  

1. Instalar Cypress  
https://docs.cypress.io/guides/getting-started/installing-cypress.html#npm-install

2. Escribir en la terminal para abrir cypress  
./node_modules/.bin/cypress open  
o tambien se puede usar el comando: npx cypress open  

3. Ingresar al package.json y agregar: **"cypress:open": "cypress open"**  
4. Ahora ya podemos correr Cypress solamente ejecutando en la terminal: **npm run cypress:open**

5. Para ejecutar Cypress CLI donde se pueda grabar videos y screenshots agregamos en el package.json la linea: **"test": "cypress run spec"**  
Ahora para correr Cypress sin levantar el Runner y grabar videos e imagenes lo corremos en la terminal para trabajar con Cypress CLI: **npm test**

6. Opcional: Si queremos abrir Cypress en un segundo nuevo proyecto. No es necesario instalar de nuevo el paquete de Cypress en la computadora. Simplemente debo ejecutar los siguientes comandos:
* npm init  
* npm i cypress  
* npx cypress open  
Ingresar al package.json y agregar en "scripts" el comando: **"cypress:open": "cypress open"**
Ahora ya podemos correr Cypress solamente ejecutando en la terminal: **npm run cypress:open**

Paginas web para practicar automatización  
http://automationpractice.com  
https://www.phptravels.net  

-- Cypress con Cucumber BDD
1. Dentro de la carpeta "integration" se agregan el "feature"  
2. Dentro de la carpeta "support" se agregan los "steps_definitions"  

-- Cypress con POM (Page Object Model)
1. Crear una carpeta nueva 'page-objects'.
2. En la carpeta 'fixture' incluir todas las variables y datos estáticos que se van a utilizar en los tests.
3. En la carpeta 'integration' se crean los casos de prueba con el archivo *.spec.js*
4. No olvidar que en el archivo *.spec.js* se debe hacer import { TodoPage } from "../page-objects/todomvc-page";

