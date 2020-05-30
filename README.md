# Introduction to Cypress at Pataconf
Introduction to Cypress: From beginner to pro (Medellín, Colombia. 2019-2020)

## 👋 [Introducción](https://douglasfugazi.gitbook.io/introduction-to-cypress/)
La automatización de pruebas funcionales plantea sus propios desafíos diferentes de las pruebas manuales. No importa si eres un tester manual, las pruebas automatizadas con [Cypress.io](https://www.cypress.io) es una excelente manera de apoyar fácilmente las **Pruebas End-to-End** en un equipo multifuncional, logrando que el equipo tenga una comprensión común de qué probar de forma eficiente y rápida sin grandes conocimientos técnicos.

## 🏠 [Homepage](https://douglasfugazi.gitbook.io/introduction-to-cypress/cypress/instalacion)
Puedes seguir todo el tutorial paso a paso aquí: https://douglasfugazi.gitbook.io/introduction-to-cypress/

## ✨ Prerequisitos
- Node.js
- NPM
- Editor de código

## 🛠 [Instalación](https://douglasfugazi.gitbook.io/introduction-to-cypress/cypress/instalacion)

1. Instalar Cypress.io
`npm install cypress --save-dev`

2. Una vez instalado, escribir en la terminal para abrir Cypress.io
`./node_modules/.bin/cypress open`  
o tambien se puede usar el comando: `npx cypress open`  

**Opcional:** Si queremos abrir Cypress en un segundo nuevo proyecto. No es necesario instalar de nuevo el paquete de Cypress en la computadora. Simplemente debo ejecutar los siguientes comandos:
`npm init`
`npm i cypress`  
`npx cypress open`

## 😉 Acerca del tutorial
Este tutorial cubre lo básico de **Cypres.io** con lo siguiente:
* Información sobre el framework End-to-End
* Pasos para escribir el primer test
* Pasos para ejecutar el primer test
* Configuración y ejecución de reportes con Mochawesome
* Comandos avanzados de Cypress

## 🤝 Practiquemos!
Paginas web para practicar automatización
http://automationpractice.com  
https://www.phptravels.net  

- - -
-- Cypress con Cucumber BDD
1. Dentro de la carpeta "integration" se agregan el "feature"  
2. Dentro de la carpeta "support" se agregan los "steps_definitions"  

-- Cypress con POM (Page Object Model)
1. Crear una carpeta nueva 'page-objects'.
2. En la carpeta 'fixture' incluir todas las variables y datos estáticos que se van a utilizar en los tests.
3. En la carpeta 'integration' se crean los casos de prueba con el archivo `*.spec.js`
4. No olvidar que en el archivo `*.spec.js` se debe hacer `import { TodoPage } from "../page-objects/todomvc-page";`


