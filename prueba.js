const allTest = [{
  "_id": {
    "$oid": "602bf50ec6fe4801ec7604ad"
  },
  "position": [
    "Analista",
    "Ventas",
    "Costos",
    "Excel"
  ],
  "url": "../images/excel.png",
  "duration": 10,
  "questions": [
    {
      "$oid": "602bf35f34a4151170666ec3"
    },
    {
      "$oid": "602bf35f34a4151170666ec4"
    },
    {
      "$oid": "602bf35f34a4151170666ec5"
    },
    {
      "$oid": "602bf35f34a4151170666ec6"
    }
  ],
  "name": "Excel",
  "difficulty": "easy",
  "skills": "hard",
  "description": "Evaluar los conocomientos básicos de Excel como tablás dinámicas, gráficas, fórmulas, entre otros.",
  "__v": 0
},{
  "_id": {
    "$oid": "602bf50ec6fe4801ec7604ae"
  },
  "position": [
    "Analista",
    "Ventas",
    "Costos",
    "Access"
  ],
  "url": "../images/access.png",
  "duration": 10,
  "questions": [
    {
      "$oid": "602bf35f34a4151170666ec7"
    },
    {
      "$oid": "602bf35f34a4151170666ec8"
    },
    {
      "$oid": "602bf35f34a4151170666ec9"
    }
  ],
  "name": "Access",
  "difficulty": "easy",
  "skills": "hard",
  "description": "Evaluar los conocomientos básicos de Acess como hacer tablas relacionales, configurar el tipo de dato de la columna, configurar llave primaria, etc...",
  "__v": 0
},{
  "_id": {
    "$oid": "602bf50ec6fe4801ec7604af"
  },
  "position": [
    "Analista",
    "Ventas",
    "Costos",
    "PowerBi",
    "Inteligencia de Ventas"
  ],
  "url": "../images/powerBi.png",
  "duration": 10,
  "questions": [
    {
      "$oid": "602bf35f34a4151170666eca"
    },
    {
      "$oid": "602bf35f34a4151170666ecb"
    },
    {
      "$oid": "602bf35f34a4151170666ecc"
    },
    {
      "$oid": "602bf35f34a4151170666ecd"
    }
  ],
  "name": "PowerBi",
  "difficulty": "medium",
  "skills": "hard",
  "description": "Evaluar los conocomientos de PowerBI fórmulas DAX, relacionar tablas (1-muchos, 1-1, otros), insertar objetos visuales",
  "__v": 0
},{
  "_id": {
    "$oid": "602bf50ec6fe4801ec7604b0"
  },
  "position": [
    "Analista",
    "Contabilidad",
    "Corrida Financiera",
    "Financiero"
  ],
  "url": "../images/finanzas.png",
  "duration": 10,
  "questions": [
    {
      "$oid": "602bf35f34a4151170666ed3"
    },
    {
      "$oid": "602bf35f34a4151170666ed4"
    },
    {
      "$oid": "602bf35f34a4151170666ed5"
    },
    {
      "$oid": "602bf35f34a4151170666ed6"
    },
    {
      "$oid": "602bf35f34a4151170666ed7"
    }
  ],
  "name": "Finanzas",
  "difficulty": "medium",
  "skills": "hard",
  "description": "Evaluar un Estado de Resultados, una Corrida Financiera, Entradas y Salidas, proyecciones, etc",
  "__v": 0
},{
  "_id": {
    "$oid": "602bf50ec6fe4801ec7604b1"
  },
  "position": [
    "Costos",
    "Ventas"
  ],
  "url": "../images/negociacion.png",
  "duration": 10,
  "questions": [
    {
      "$oid": "602bf35f34a4151170666ecf"
    },
    {
      "$oid": "602bf35f34a4151170666ece"
    },
    {
      "$oid": "602bf35f34a4151170666ed1"
    },
    {
      "$oid": "602bf35f34a4151170666ed0"
    },
    {
      "$oid": "602bf35f34a4151170666ed2"
    }
  ],
  "name": "Negociacion",
  "difficulty": "easy",
  "skills": "soft",
  "description": "Enteder el proceso de negociación, estrategia de ventas,comunicación asertiva",
  "__v": 0
},{
  "_id": {
    "$oid": "602bf50ec6fe4801ec7604b2"
  },
  "position": [
    "Analista",
    "Ventas",
    "Costos",
    "Access"
  ],
  "url": "../images/test-default.png",
  "duration": 10,
  "questions": [
    {
      "$oid": "602bf35f34a4151170666ed8"
    },
    {
      "$oid": "602bf35f34a4151170666ed9"
    },
    {
      "$oid": "602bf35f34a4151170666eda"
    },
    {
      "$oid": "602bf35f34a4151170666edb"
    },
    {
      "$oid": "602bf35f34a4151170666edc"
    },
    {
      "$oid": "602bf35f34a4151170666edd"
    }
  ],
  "name": "Razonamiento Lógico",
  "difficulty": "medium",
  "skills": "cognitive",
  "description": "Poner a prueba las capacidades de razonamiento lógico y conginitivas",
  "__v": 0
}]

const group = {
  "_id": {
    "$oid": "602c6352a38b1d2ae4c73087"
  },
  "testerEmail": [],
  "test": [
    {
      "$oid": "602bf50ec6fe4801ec7604ad"
    },
    {
      "$oid": "602bf50ec6fe4801ec7604ae"
    },
    {
      "$oid": "602bf50ec6fe4801ec7604b0"
    }
  ],
  "name": "Perfil para Ironhack",
  "namePosition": "Web Developer",
  "department": "IT",
  "positionDescription": "buscar optimizar los Q&A",
  "user": {
    "$oid": "602b0e565ae18d4e605abcef"
  }
}


console.log(["hola","hello"].includes("hola"));