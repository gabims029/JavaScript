module.exports = class controllerNumbers {
  static async checkPar(req, res) {
    const { numero } = req.body;

    if (typeof numero !== "numner"){
      return res.status(400).json({message: "Não é um número"});
    }

    if (numero % 2 == 0) {
      return res.status(200).json({ message: "Número Par!!" });
    }
    return res.status(200).json({ message: "Número Ímpar!" });
  }

  static async checkPrimo(req, res) {
    const { numero } = req.body;

    if (typeof numero !== "numner"){
      return res.status(400).json({message: "Não é um número"});
    }

    if (numero <= 1) {
      return res.status(200).json({ message: "Não é Primo" });
    }
    for (let i = 2; i < numero; i++) {
      if (numero % i == 0) {
        return res.status(200).json({ message: "Não é primo!" });
      }
    }

    return res.status(200).json({ message: "É primo!" });
  }
};
