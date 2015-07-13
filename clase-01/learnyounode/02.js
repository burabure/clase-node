console.log(
  process.argv
    .slice(2)
    .reduce(function(valorPrevio, valorActual){
      return valorPrevio + Number(valorActual);
    }, 0)
);
