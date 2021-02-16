const examData = [
  {
    position: ["Analista", "Ventas", "Costos", "Excel"],
    url: "../images/excel.png",
    name: "Excel",
    difficulty: "easy",
    skills: "hard",
    description:
      "Evaluar los conocomientos básicos de Excel como tablás dinámicas, gráficas, fórmulas, entre otros.",
    questions: [
      ObjectId("602b58bbb2f3464c48658e76"),
      ObjectId("602b58bbb2f3464c48658e77"),
      ObjectId("602b58bbb2f3464c48658e78"),
      ObjectId("602b58bbb2f3464c48658e79"),
    ],
  },
  {
    position: ["Analista", "Ventas", "Costos", "Access"],
    url: "../images/access.png",
    name: "Access",
    difficulty: "easy",
    skills: "hard",
    description:
      "Evaluar los conocomientos básicos de Acess como hacer tablas relacionales, configurar el tipo de dato de la columna, configurar llave primaria, etc...",
    questions: [
      ObjectId("602b58bbb2f3464c48658e7a"),
      ObjectId("602b58bbb2f3464c48658e7b"),
      ObjectId("602b58bbb2f3464c48658e7c"),
    ],
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
    name: "PowerBi",
    difficulty: "medium",
    skills: "hard",
    description:
      "Evaluar los conocomientos de PowerBI fórmulas DAX, relacionar tablas (1-muchos, 1-1, otros), insertar objetos visuales",
    questions: [
      ObjectId("602b58bbb2f3464c48658e7e"),
      ObjectId("602b58bbb2f3464c48658e7d"),
      ObjectId("602b58bbb2f3464c48658e7f"),
      ObjectId("602b58bbb2f3464c48658e80"),
    ],
  },
  {
    position: ["Analista", "Contabilidad", "Corrida Financiera", "Financiero"],
    url: "../images/finanzas.png",
    name: "Finanzas",
    difficulty: "medium",
    skills: "hard",
    description:
      "Evaluar un Estado de Resultados, una Corrida Financiera, Entradas y Salidas, proyecciones, etc",
    questions: [
      ObjectId("602b58bbb2f3464c48658e86"),
      ObjectId("602b58bbb2f3464c48658e87"),
      ObjectId("602b58bbb2f3464c48658e88"),
      ObjectId("602b58bbb2f3464c48658e89"),
      ObjectId("602b58bbb2f3464c48658e8a"),
    ],
  },
  {
    position: ["Costos", "Ventas"],
    url: "../images/negociacion.png",
    name: "Negociacion",
    difficulty: "easy",
    skills: "soft",
    description:
      "Enteder el proceso de negociación, estrategia de ventas,comunicación asertiva",
    questions: [
      ObjectId("602b58bbb2f3464c48658e81"),
      ObjectId("602b58bbb2f3464c48658e82"),
      ObjectId("602b58bbb2f3464c48658e83"),
      ObjectId("602b58bbb2f3464c48658e85"),
      ObjectId("602b58bbb2f3464c48658e84"),
    ],
  },
  {
    position: ["Analista", "Ventas", "Costos", "Access"],
    url: "../images/test-default.png",
    name: "Razonamiento Lógico",
    difficulty: "medium",
    skills: "cognitive",
    description:
      "Poner a prueba las capacidades de razonamiento lógico y conginitivas",
    questions: [
      ObjectId("602b58bbb2f3464c48658e8b"),
      ObjectId("602b58bbb2f3464c48658e8c"),
      ObjectId("602b58bbb2f3464c48658e8d"),
      ObjectId("602b58bbb2f3464c48658e8e"),
      ObjectId("602b58bbb2f3464c48658e8f"),
      ObjectId("602b58bbb2f3464c48658e90"),
    ],
  },
];

module.exports = examData;
