class Veiculo {
    descrever() {
      console.log("Sou um veículo.");
    }
  }
  
  class Moto extends Veiculo {
    descrever() {
      console.log("Sou uma moto.");
    }
  }
  
  const veiculo = new Veiculo();
  const moto = new Moto();
  
  veiculo.descrever();
  moto.descrever();
  