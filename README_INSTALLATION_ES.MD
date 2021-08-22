# Instalalacion

## Requisitos previos para instalacion

Node `v12.18.0 >`  
MySql `5.7.25 >`

# Pasos

1 - Colocarse en la carpeta raiz de la aplicación y ejecutar `npm install`

2 - Una vez en la carpeta raiz del projecto dirigirse a hasta el archivo `config.json` en la carpeta `/database/config/`.
Una vez alli se debe remplazar los datos de la base de datos con la que se desea conectar según las opciones más abajo:

```
"development": {
    "username": "usuario_local",
    "password": "clave_local" , // null en caso de no tener contraseña
    "database": "bd_local",
    "host": "127.0.0.1",
    "dialect": "mysql"
},
```

3 - En la instancia de base de datos local debe estar creada la base de datos colocada en la opcion ```database``` del archivo `config.json` antes mencionado.
Puede crear la base de datos mediante la instrucción "`create database Library;`"