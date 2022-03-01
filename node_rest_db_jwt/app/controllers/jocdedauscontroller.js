const { Joc } = require("../config/dbconfig");
const { Op } = require("sequelize");



//find all players
findAll = (req, res) => {
  Joc.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving names."
      });
    });  
};

// const jugadas = () => {
//   Joc.findAndCountAll({
//     where: { name: "toni" }
//   })
//     .then(data => {
//       console.log(data.count)
//     })
//     .catch(error => {
//       throw error
//     })
// }
// console.log(jugadas());

create = (req, res) => {
  const percent = 'Aquí irá el % de acierto';
  const player = {
    //id: req.body.id,
    name: req.body.name ? req.body.name : "Anonim",
    game: req.body.game,
    dau1: req.body.dau1,
    dau2: req.body.dau2,
    success_percentage: percent
  };
  //publish player in database
  Joc.create(player)
    .then(data => {
      res.send({
        message: "nuevo jugador creado: " + req.body.name});
    })
    .catch(err => {
      res.status(500).send({
        message:
        err.message || 'ha ocurrido un error'
      })
    })
};


//edit player by name
update = (req, res) => {
  const name = req.params.name;
  Joc.update(req.body, {
    where: { name: name }
  })
    .then(data => {
      if (data >= 1) {
        res.send({
          message: "Player updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update player with name: ${name}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Error updating player with name: ${name}.`
      });
    });  
};

//specific player makes a game
updateGame = (req, res) => {
  const player = {
    id: req.body.id,
    name: req.params.name,
    game: req.body.game,
    dau1: req.body.dau1,
    dau2: req.body.dau2,
    success_percentage: req.body.success_percentage,
  };
  Joc.create(player)
    .then(data => {
      res.send({
        message: `new game ${req.body.game} created for ${req.params.name}`});
    })
    .catch(err => {
      res.status(500).send({
        message:
        err.message || 'ha ocurrido un error'
      })
    })
};

//elimina les tirades del jugador
deleteGame = (req, res) => {
  const name = req.params.name;
  Joc.destroy({
    where: { name: name }
  })
    .then(num => {
      if (num >= 1) {
        res.send({
          message: "Games were deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete game for ${name}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error"
      });
    });  
};

//retorna el llistat de jugades per un jugador.
findPlayerGames = (req, res) => {
  const name = req.params.name;
  Joc.findAll({
    where: { name: name }
  })
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find games for player ${name}`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Error retrieving player ${name}`
      });
    });  
}

//retorna percentatge mig d’èxits del conjunt de tots els jugadors
ranking = (req, res) => {
  Joc.findAll({
    where: {success_percentage: {[Op.gte]: 0}},
    attributes: ["success_percentage","name"],
    order: [
      ["success_percentage", "DESC"]
    ]
  })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred"
    });
  });  
}

//retorna jugador amb pitjor % d'èxit
loser = (req, res) => {
  Joc.findOne({
    order: [
      ["success_percentage", "ASC"],
    ],
})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred"
      });
    });  
};

//retorna jugador amb millor % d'èxit
winner = (req, res) => {
  Joc.findOne({
    order: [
      ["success_percentage", "DESC"],
    ],
})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred"
      });
    });  
};


module.exports = {
  findAll,
  create,
  update,
  updateGame,
  deleteGame,
  findPlayerGames,
  ranking,
  loser,
  winner
}
