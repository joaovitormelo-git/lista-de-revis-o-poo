const Carro = require("/.index04");

test("Testando getters e setters", () => {
  const carro = new Carro("Chevrolet", "Onix", 2021);
  carro.marca = "Fiat";
  expect(carro.marca).toBe("Fiat");
});
