# Cifrado César

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Hacker edition](#6-hacker-edition)
* [7. Consideraciones técnicas](#7-consideraciones-técnicas)
* [8. Pistas, tips y lecturas complementarias](#8-pistas-tips-y-lecturas-complementarias)
* [9. Checklist](#9-checklist)

***

## 1. Preámbulo

El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher) es una de las técnicas más simples para cifrar un mensaje. Es un tipo de cifrado por sustitución, es decir que cada letra del texto original es reemplazada por otra que se encuentra un número fijo de posiciones (desplazamiento) más adelante en el mismo alfabeto. Aunque se encuentra en desuso, el cifrado César es estudiado por su relevancia histórica y por ser un problema simple desde el punto de vista matemático y de pensamiento lógico.


## 2. Resumen del proyecto

Este producto se propone, a través de una interfaz simple e intuitiva, servir como una herramienta para estudiantes que quieran aprender sobre criptografía, seguridad o incluso aritmética simple, pues puede modelarse matemáticamente usando el módulo. Por este motivo, los principales usuarios son estudiantes de todas las edades, cuyo principal objetivo es familiarizarse con el cifrado César, probar distintos casos y usarlo como un insumo para comentar el aprendizaje.

Para cumplir estos objetivos, el producto tiene una interfaz similar a la de un traductor online, con dos cajas de texto y un selector para el offset. También se proponen algunas preguntas interesantes para seguir aprendiendo acerca del tema. 


## 3. Scripts / Archivos

* `README.md`: introduce a la aplicación y explica cuáles son los usuarios.
* `src/index.html`: este es el punto de entrada a la aplicación.
* `src/cipher.js`: contiene el objeto `cipher`, el cual contiene dos
  métodos:
  - `cipher.encode(offset, string)`: tiene dos parámetros: `offset` es el número de posiciones que queremos mover a la derecha en el alfabeto y `string` el mensaje (texto) que queremos cifrar.
  - `cipher.decode(offset, string)`: tiene dos parámetros: `offset` es el número de posiciones que queremos mover a la derecha en el alfabeto y `string` el mensaje (texto) que queremos descifrar.
* `src/index.js`: escucha eventos del DOM, e invoca `cipher.encode()` o `cipher.decode()` según sea necesario, para luego actualizar el resultado en la UI.
* `test/cipher.spec.js`: este archivo contiene tests para `cipher.encode()` y `cipher.decode()`.
