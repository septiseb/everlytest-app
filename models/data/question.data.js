const questionData = [
  {
    nameExam: "Excel",
    question:
      "Para introducir en Excel que una celda es el producto de A1 por B1 colocaremos en dicha celda:",
    typeQuestion: "One Option",
    options: ["=A1*B1", "A1*B1", "=A1xB1", "A1xB1"],
    answer: "=A1*B1",
  },
  {
    nameExam: "Excel",
    question:
      "Para introducir en Excel la expresión numérica 3,1416 (número PI) introduciremos:",
    typeQuestion: "One Option",
    options: [
      "3,1416 ó bien =3,1416",
      "Sólo =3,1416",
      "'3,1416'",
      "Sólo 3,1416",
    ],
    answer: "3,1416 ó bien =3,1416",
  },
  {
    nameExam: "Excel",
    question:
      "Si tenemos en la celda B1 el número 3,1416 (PI) y lo queremos utilizar en otras fórmulas y luego copiarlas y pegarlas sobre otras celdas (que se encuentran en distintas filas y columnas), en dichas fórmulas utilizaremos:",
    typeQuestion: "One Option",
    options: ["$B$1", "B$1", "$B1", "B1"],
    answer: "$B$1",
  },
  {
    nameExam: "Excel",
    question:
      "Si tenemos en la celda B1 el número 3,1416 (PI) y lo queremos utilizar en otras fórmulas y luego copiarlas y pegarlas sobre otras celdas (que se encuentran en distintas filas y columnas), en dichas fórmulas utilizaremos:",
    typeQuestion: "One Option",
    options: [
      "Datos, palabras y números.",
      "Palabras, números y etiquetas",
      "Ecuaciones, datos y números",
      "Números, fórmulas y etiquetas",
    ],
    answer: "Números, fórmulas y etiquetas",
  },
  {
    nameExam: "Access",
    question: "¿Cuáles son las partes de la tabla en vista hoja de datos?",
    typeQuestion: "One Option",
    options: [
      "Campos y registros",
      "Valores y campos",
      "Propiedades y registros",
      "Registros y valores",
    ],
    answer: "Campos y registros",
  },
  {
    nameExam: "Access",
    question: "¿Qué es la clave principal?",
    typeQuestion: "One Option",
    options: [
      "Llave secundaria",
      "Valor único de identificación",
      "Varios registros",
      "LLave foránea",
    ],
    answer: "Valor único de identificación",
  },
  {
    nameExam: "Access",
    question: "¿Cuál es la utilidad de la base de datos?",
    typeQuestion: "One Option",
    options: [
      "Desplegar visualizaciones",
      "Interpretar los Datos",
      "Recopilar información",
      "Analisis de Datos",
    ],
    answer: "Recopilar información",
  },
  {
    nameExam: "PowerBi",
    question: "¿Cuál es la utilidad de la base de datos?",
    typeQuestion: "One Option",
    options: [
      "Desplegar visualizaciones",
      "Interpretar los Datos",
      "Recopilar información",
      "Analisis de Datos",
    ],
    answer: "Recopilar información",
  },
  {
    nameExam: "PowerBi",
    question: "¿Cuál es la utilidad de la base de datos?",
    typeQuestion: "One Option",
    options: [
      "Desplegar visualizaciones",
      "Interpretar los Datos",
      "Recopilar información",
      "Analisis de Datos",
    ],
    answer: "Recopilar información",
  },
  {
    nameExam: "PowerBi",
    question: "¿Cuál es la utilidad de la base de datos?",
    typeQuestion: "One Option",
    options: [
      "Desplegar visualizaciones",
      "Interpretar los Datos",
      "Recopilar información",
      "Analisis de Datos",
    ],
    answer: "Recopilar información",
  },
  {
    nameExam: "PowerBi",
    question: "¿Cuál es la utilidad de la base de datos?",
    typeQuestion: "One Option",
    options: [
      "Desplegar visualizaciones",
      "Interpretar los Datos",
      "Recopilar información",
      "Analisis de Datos",
    ],
    answer: "Recopilar información",
  },
  {
    nameExam: "Negociacion",
    question: "¿Cuál es la utilidad de la base de datos?",
    typeQuestion: "One Option",
    options: [
      "Desplegar visualizaciones",
      "Interpretar los Datos",
      "Recopilar información",
      "Analisis de Datos",
    ],
    answer: "Recopilar información",
  },
  {
    nameExam: "Negociacion",
    question: "¿Cuál es la utilidad de la base de datos?",
    typeQuestion: "One Option",
    options: [
      "Desplegar visualizaciones",
      "Interpretar los Datos",
      "Recopilar información",
      "Analisis de Datos",
    ],
    answer: "Recopilar información",
  },
  {
    nameExam: "Negociacion",
    question: "¿Cuál es la utilidad de la base de datos?",
    typeQuestion: "One Option",
    options: [
      "Desplegar visualizaciones",
      "Interpretar los Datos",
      "Recopilar información",
      "Analisis de Datos",
    ],
    answer: "Recopilar información",
  },
  {
    nameExam: "Negociacion",
    question: "¿Cuál es la utilidad de la base de datos?",
    typeQuestion: "One Option",
    options: [
      "Desplegar visualizaciones",
      "Interpretar los Datos",
      "Recopilar información",
      "Analisis de Datos",
    ],
    answer: "Recopilar información",
  },
  {
    nameExam: "Negociacion",
    question: "¿Cuál es la utilidad de la base de datos?",
    typeQuestion: "One Option",
    options: [
      "Desplegar visualizaciones",
      "Interpretar los Datos",
      "Recopilar información",
      "Analisis de Datos",
    ],
    answer: "Recopilar información",
  },
  {
    nameExam: "Finanzas",
    question: "¿Cuál es la utilidad de la base de datos?",
    typeQuestion: "One Option",
    options: [
      "Desplegar visualizaciones",
      "Interpretar los Datos",
      "Recopilar información",
      "Analisis de Datos",
    ],
    answer: "Recopilar información",
  },
  {
    nameExam: "Finanzas",
    question: "¿Cuál es la utilidad de la base de datos?",
    typeQuestion: "One Option",
    options: [
      "Desplegar visualizaciones",
      "Interpretar los Datos",
      "Recopilar información",
      "Analisis de Datos",
    ],
    answer: "Recopilar información",
  },
  {
    nameExam: "Finanzas",
    question: "¿Cuál es la utilidad de la base de datos?",
    typeQuestion: "One Option",
    options: [
      "Desplegar visualizaciones",
      "Interpretar los Datos",
      "Recopilar información",
      "Analisis de Datos",
    ],
    answer: "Recopilar información",
  },
  {
    nameExam: "Finanzas",
    question: "¿Cuál es la utilidad de la base de datos?",
    typeQuestion: "One Option",
    options: [
      "Desplegar visualizaciones",
      "Interpretar los Datos",
      "Recopilar información",
      "Analisis de Datos",
    ],
    answer: "Recopilar información",
  },
  {
    nameExam: "Finanzas",
    question: "¿Cuál es la utilidad de la base de datos?",
    typeQuestion: "One Option",
    options: [
      "Desplegar visualizaciones",
      "Interpretar los Datos",
      "Recopilar información",
      "Analisis de Datos",
    ],
    answer: "Recopilar información",
  },
  {
    nameExam: "Razonamiento Lógico",
    question: "¿Cuál es la utilidad de la base de datos?",
    typeQuestion: "One Option",
    options: [
      "Desplegar visualizaciones",
      "Interpretar los Datos",
      "Recopilar información",
      "Analisis de Datos",
    ],
    answer: "Recopilar información",
  },
  {
    nameExam: "Razonamiento Lógico",
    question: "¿Cuál es la utilidad de la base de datos?",
    typeQuestion: "One Option",
    options: [
      "Desplegar visualizaciones",
      "Interpretar los Datos",
      "Recopilar información",
      "Analisis de Datos",
    ],
    answer: "Recopilar información",
  },
  {
    nameExam: "Razonamiento Lógico",
    question: "¿Cuál es la utilidad de la base de datos?",
    typeQuestion: "One Option",
    options: [
      "Desplegar visualizaciones",
      "Interpretar los Datos",
      "Recopilar información",
      "Analisis de Datos",
    ],
    answer: "Recopilar información",
  },
  {
    nameExam: "Razonamiento Lógico",
    question: "¿Cuál es la utilidad de la base de datos?",
    typeQuestion: "One Option",
    options: [
      "Desplegar visualizaciones",
      "Interpretar los Datos",
      "Recopilar información",
      "Analisis de Datos",
    ],
    answer: "Recopilar información",
  },
  {
    nameExam: "Razonamiento Lógico",
    question: "¿Cuál es la utilidad de la base de datos?",
    typeQuestion: "One Option",
    options: [
      "Desplegar visualizaciones",
      "Interpretar los Datos",
      "Recopilar información",
      "Analisis de Datos",
    ],
    answer: "Recopilar información",
  },
  {
    nameExam: "Razonamiento Lógico",
    question: "¿Cuál es la utilidad de la base de datos?",
    typeQuestion: "One Option",
    options: [
      "Desplegar visualizaciones",
      "Interpretar los Datos",
      "Recopilar información",
      "Analisis de Datos",
    ],
    answer: "Recopilar información",
  },
];

module.exports = questionData;
