class Carro {
    constructor(marca, modelo, ano) {
      this.marca = marca;
      this.modelo = modelo;
      this.ano = ano;
    }
  
    setMarca(novaMarca) {
      this.marca = novaMarca;
    }
  
    getMarca() {
      return this.marca;
    }
  }
  
  const carro = new Carro("Honda", "Civic", 2018);
  carro.setMarca("Ford");
  console.log(carro.getMarca());
  