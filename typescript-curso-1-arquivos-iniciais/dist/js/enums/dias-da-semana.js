// Criando uma enumeraçãp
export var DiasDaSemana;
(function (DiasDaSemana) {
    //    VALORES QUE NAO MUDARÃO DENTRO DA ENUM
    DiasDaSemana[DiasDaSemana["DOMINGO"] = 0] = "DOMINGO";
    DiasDaSemana[DiasDaSemana["SEGUNDA"] = 1] = "SEGUNDA";
    DiasDaSemana[DiasDaSemana["TERCA"] = 2] = "TERCA";
    DiasDaSemana[DiasDaSemana["QUARTA"] = 3] = "QUARTA";
    DiasDaSemana[DiasDaSemana["QUINTA"] = 4] = "QUINTA";
    DiasDaSemana[DiasDaSemana["SEXTA"] = 5] = "SEXTA";
    DiasDaSemana[DiasDaSemana["SABADO"] = 6] = "SABADO";
})(DiasDaSemana || (DiasDaSemana = {}));
