import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.static('public'));
app.use(cors());
app.use(express.json());

const jugadores = [];

class Jugador{
  constructor(id){
    this.id = id;
  };

  asignarMokepon(mokepon){
    this.mokepon = mokepon;
  };
}

class Mokepon {
  constructor(nombre){
    this.nombre = nombre;
  };
};

app.get('/unirse', (req, res) => {
  const id = `${Math.random()}`;
  const jugador = new Jugador(id);

  jugadores.push(jugador);

  res.send(id);
});

app.post('/mokepon/:id', (req, res) => {
  const jugadorId = req.params.id;
  const nombre = req.body.mokepon;
  const mokepon = new Mokepon(nombre);
  const idx = jugadores.findIndex((jugador) => jugador.id === jugadorId);
  if(idx < 0){ 
    console.log(`${jugadorId} doesn't exist, not ok`);
    return res.send({ ok: false })
  };

  jugadores[idx].asignarMokepon(mokepon);

  console.log(`${jugadorId} added ${nombre}, eveything ok`);

  res.end();
});

app.listen(8080, () => {
  console.log('server running');
});
