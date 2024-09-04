module.exports = class controllersNumbers{
    //Cadastro professor
    static async checkPar(req,res){
        const {numero} = req.body;
        if(numero % 2 === 0){
            res.json({message: "Número Par"});         
        }
        else{
            res.json({message: "Número Impar"});
        }
    }
}