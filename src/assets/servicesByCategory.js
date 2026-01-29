const servicesByCategory = {
  fr: {
    "Véhicule sous compacte": [
      { id: 1, description: "Nettoyage intérieur et extérieur", price: 75 },
      { id: 2, description: "Nettoyage intérieur", price: 50 }
    ],
    "VUS/Berline": [
      { id: 3, description: "Nettoyage intérieur et extérieur", price: 95 },
      { id: 4, description: "Nettoyage intérieur", price: 60 }
    ],
    "Minivan/Pick-up": [
      { id: 5, description: "Nettoyage intérieur et extérieur", price: 120 },
      { id: 6, description: "Nettoyage intérieur", price: 85 }
    ],
    "Extras": [
      { id: 7, description: "Élimination du chlorure de calcium", price: 30 },
      { id: 8, description: "Shampoing complet des sièges", price: 35 },
      { id: 9, description: "Polissage des phares", price: 40 }
    ]
  },
  en: {
    "Compact Cars": [
      { id: 1, description: "Interior and Exterior Cleaning", price: 75 },
      { id: 2, description: "Interior Cleaning Only", price: 50 }
    ],
    "SUVs/Sedans": [
      { id: 3, description: "Interior and Exterior Cleaning", price: 95 },
      { id: 4, description: "Interior Cleaning Only", price: 60 }
    ],
    "Minivan/Pick-up": [
      { id: 5, description: "Interior and Exterior Cleaning", price: 120 },
      { id: 6, description: "Interior Cleaning Only", price: 85 }
    ],
    "Extras": [
      { id: 7, description: "Calcium Chloride Removal", price: 30 },
      { id: 8, description: "Full Seat Shampoo", price: 35 },
      { id: 9, description: "Headlight polishing", price: 40 }
    ]
  }
};

export default servicesByCategory;