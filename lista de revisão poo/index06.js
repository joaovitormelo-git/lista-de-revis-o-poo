class Veiculo {
    constructor(marca, ano) {
      this.marca = marca;
      this.ano = ano;
    }
  }
  
  class Moto extends Veiculo {
    constructor(marca, ano, cilindrada) {
      super(marca, ano);
      this.cilindrada = cilindrada;
    }
  }
  
  const moto = new Moto("Yamaha", 2022, 150);
  console.log(moto);
  