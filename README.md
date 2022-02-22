# api_teachers_crud

### Ambiente local
Después de clonar el repositorio, para poder ejecutarlo de manera local es necesario instalar las dependencias
`npm i`

Luego, instalar nodemon
`npm i -g nodemon`

### Variables de entorno
Esta API necesita dos variables de entorno, las cuales se agregan en un archivo .env en la raiz del directorio.
`PORT` (si no se proporciona, por defecto es el 3000), y como palabra secreta para encriptar el token, es necesaria la variable `SECRET_WORD` con el valor que se desee asignar

### Ejecutar en desarrollo
Para que inicie desde nodemon se debe ingresar el siguiente comando `npm run dev`
