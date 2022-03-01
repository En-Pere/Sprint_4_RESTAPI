const router = require('express').Router();
const jocControllers = require("../controllers/jocdedauscontroller");

//find all players
router.get("/", jocControllers.findAll);

//post players
router.post("/players", jocControllers.create);

//edit player name
router.put("/players/:name", jocControllers.update)

//specific player makes a game
router.post("/players/games/:name", jocControllers.updateGame)

//elimina les tirades del jugador
router.delete("/players/games/:name", jocControllers.deleteGame)

//retorna el llistat de jugades per un jugador.
router.get("/players/games/:name", jocControllers.findPlayerGames)

//retorna percentatge mig d’èxits del conjunt de tots els jugadors
router.get("/ranking", jocControllers.ranking)

//retorna jugador amb pitjor % d'èxit
router.get("/loser", jocControllers.loser)

//retorna jugador amb millor % d'èxit
router.get("/winner", jocControllers.winner)


module.exports = router;