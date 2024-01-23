
//lista básica de materiais hidráulicos do almoxarifado do SAAE Salto
//Sérgio Merces - atualizado em 22 de janeiro de 2024

const materiais = [
    {
        id: 0,
        codigo: "54.01.001129",
        descricao: "Porca para tubete PEAD preto (com inserto) 3/4",
        unidade: "Peça",
        material: "PEAD",
        tamanho: "3/4",
        almoxarifado: "Central",
        corredor: "C01-P01-B01",
        custo: "R$ 0,00",
        fornecedor: "Guimarães",
        compra: "Ata"
    },

    {
        id: 1,
        codigo: "54.01.000616",
        descricao: "Porca para tubete preto 3/4",
        unidade: "Peça",
        material: "PEAD",
        tamanho: "3/4",
        almoxarifado: "Central",
        corredor: "C01-P01-B02",
        custo: "R$ 0,00",
        fornecedor: "Guimarães",
        compra: "Ata"
    }

];

materiais.forEach(material => {
    console.log(material);
});