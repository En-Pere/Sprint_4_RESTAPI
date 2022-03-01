
# Sprint 4.
**Entrega 4.2: Node REST + DB + JWT**

# Para iniciar el proyecto:
npm -i

# Instalar dependencias:
npm i bcryptjs
npm i body-parser
npm i cors
npm i express
npm i jwt-simple
npm i moment
npm i mysql2
npm i sequelize

# Iniciar la app:
node index.js

# Funcionalidades:
**Ejemplos en Postman**

*//retorna el lista de tots els jugador amb el set percentatge d’exit mig.
GET —> http://localhost:8080/api/jocdedaus/

*//crea un jugador
POST: —> http://localhost:8080/api/jocdedaus/post/players
 {
  "name": "federico",
  "game": 5,
  "dau1": 4,
  "dau2": 6
  }

*//modifica el nom del jugador:
PUT: —> http://localhost:8080/api/jocdedaus/put/players/PLAYERNAME
{
    “name: “antonio”,
}

*//jugador específico realiza una tirada
POST: --> http://localhost:8080/api/jocdedaus/players/games/PLAYERNAME
  {
  "game": "3",
  "dau1": 5,
  "dau2": 5,
  }

*//elimina tirades d’un jugador
DELETE —> http://localhost:8080/api/jocdedaus/players/games/PLAYERNAME

*//retorna llistat de jugades per jugador:
GET —> http://localhost:8080/api/jocdedaus/players/games/PLAYERNAME

*//retorna el percentatge mig d’exits del conjoint de tots els jugadors
GET —>http://localhost:8080/api/jocdedaus/ranking

*//retorna jugador amb millor percentatge d’èxits
GET —> http://localhost:8080/api/jocdedaus/winner

*//retorna jugador amb pitjor percentatge d’èxits
GET —> http://localhost:8080/api/jocdedaus/loser

——————————————

*//crea un usuari nou
POST —> http://localhost:8080/api/users/register
username: xxx
email: xxx@xxx.com
password: ++++

*//genera token per poder accedir al joc
GET —> http://localhost:8080/api/users/login

*//retorna tots els usuaris
GET —> http://localhost:8080/api/users/register

*//Per entrar a qualsevol ruta del /jocdedaus/
Postman headers:
KEY: “user-token”
VALUE: (insert generated token)