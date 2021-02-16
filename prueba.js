const testing = [
  {
    position: ["Analista", "Ventas", "Costos", "Excel"],
    url: "../images/excel.png",
    _id: `602acfd1a24b944664e4f5a4`,
    name: "Excel",
    difficulty: "easy",
    skills: "hard",
    description:
      "Evaluar los conocomientos básicos de Excel como tablás dinámicas, gráficas, fórmulas, entre otros.",
    __v: 0,
  },
  {
    position: ["Analista", "Ventas", "Costos", "Access"],
    url: "../images/access.png",
    _id: `602acfd1a24b944664e4f5a5`,
    name: "Access",
    difficulty: "easy",
    skills: "hard",
    description:
      "Evaluar los conocomientos básicos de Acess como hacer tablas relacionales, configurar el tipo de dato de la columna, configurar llave primaria, etc...",
    __v: 0,
  },
  {
    position: [
      "Analista",
      "Ventas",
      "Costos",
      "PowerBi",
      "Inteligencia de Ventas",
    ],
    url: "../images/powerBi.png",
    _id: `602acfd1a24b944664e4f5a6`,
    name: "PowerBi",
    difficulty: "medium",
    skills: "hard",
    description:
      "Evaluar los conocomientos de PowerBI fórmulas DAX, relacionar tablas (1-muchos, 1-1, otros), insertar objetos visuales",
    __v: 0,
  },
  {
    position: ["Analista", "Contabilidad", "Corrida Financiera", "Financiero"],
    url: "../images/finanzas.png",
    _id: `602acfd1a24b944664e4f5a7`,
    name: "Finanzas",
    difficulty: "medium",
    skills: "hard",
    description:
      "Evaluar un Estado de Resultados, una Corrida Financiera, Entradas y Salidas, proyecciones, etc",
    __v: 0,
  },
  {
    position: ["Costos", "Ventas"],
    url: "../images/access.png",
    _id: `602acfd1a24b944664e4f5a8`,
    name: "Negociacion",
    difficulty: "easy",
    skills: "soft",
    description:
      "Enteder el proceso de negociación, estrategia de ventas,comunicación asertiva",
    __v: 0,
  },
  {
    position: ["Analista", "Ventas", "Costos", "Access"],
    url: "../images/test-default.png",
    _id: `602acfd1a24b944664e4f5a9`,
    name: "Razonamiento Lógico",
    difficulty: "medium",
    skills: "cognitive",
    description:
      "Poner a prueba las capacidades de razonamiento lógico y conginitivas",
    __v: 0,
  },
];

const position = "powerbi";

/* const filterTest = testing.filter(test=>{
  const strPosition = position.charAt(0).toUpperCase() + position.toLowerCase().slice(1)
  test.position.includes("Analista")); */

//console.log(filterTest);

const filterTest = testing.filter((test) => {
  const strLower= test.position.map(str=>str.toLowerCase());
  return strLower.includes(position.toLowerCase());
});

console.log(filterTest);
