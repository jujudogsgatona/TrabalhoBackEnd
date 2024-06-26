joias = [];

lerJoias();

cadastrarjoias("prata", "prata", "brinco", 0, 60.0, "rubi");
cadastrarjoias("ouro", "ouro", "anel", 32, 250.0, "esmeralda");
cadastrarjoias("titanio", "titanio", "colar", 20, 180.0, "jade");
cadastrarjoias("ouro_rose", "ouro_rose", "pulseira", 16, 300.0, "turmalina");
cadastrarjoias("ouro_branco", "ouro_branco", "alianca", 40, 400.0, "topazio");
cadastrarjoias("ouro_amarelo", "ouro_amarelo", "pingentes", 50, 120.0, "safira");

function cadastrarjoias(cor, material, tipo, quilates, preco, pedra_preciosa,){
    const encontrado = encontrar(joias, "material", material);
    if (typeof encontrado === "undefined"){
        const joia = {
            cor: cor,
            material: material,
            tipo: tipo,
            quilates: quilates,
            preco: preco,
            pedra_preciosa: pedra_preciosa,
        }
        joias.push(joia);

        // PERSISTINDO OS DADOS:
        const fs = require('fs');

        joiasJSON = JSON.stringify(joias);
        fs.writeFileSync("joias.json", joiasJSON);
        console.log("Dados foram adicionados com sucesso!");
    }
}

//const ordenadoCor = ordenar(joias, "cor");
const ordenadoPreco = ordenar(joias, "preco");

// MOSTRA AS JOIAS ORDENADAS NA TELA
console.log("## JOIAS ORDENADAS POR PRECO ##")
ordenadoPreco.forEach(joia => {
    console.log("joia:" + joia.cor
                + ", " + joia.material 
                + ", tipo: " + joia.tipo
                + ", " + joia.quilates
                + "ct, R$ " + joia.preco
                + ", pedra: " + joia.pedra_preciosa
                )
});

function lerJoias(){
    joias = require("./joias.json");
}

/*function cadastrarPeruca(cor, tamanho, tipo, penteado, preco){
    const encontrado = encontrar(perucas, "cor", cor);
    if (typeof encontrado === "undefined"){
        const peruca = {
            cor: cor,
            tamanho: tamanho,
            tipo: tipo,
            penteado: penteado,
            preco: preco
        }
        perucas.push(peruca);

        // PERSISTINDO OS DADOS:
        const fs = require('fs');

        perucasJSON = JSON.stringify(perucas);
        fs.writeFileSync("perucas.json", perucasJSON);
        console.log("Dados foram adicionados com sucesso!");
    }
}*/

function encontrar(lista, chave, valor){
    return lista.find((item) => item[chave] === valor);
}

function ordenar(lista, chave){
    return lista.sort((a, b) => {
        if(a[chave] < b[chave]){
            return -1;
        }
        if(a[chave] > b[chave]){
            return 1;
        }
        return 0;
    });
}
