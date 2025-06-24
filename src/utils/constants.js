export const PROJECT_STATUS = {
  DRAFT: 'draft',
  IN_PROGRESS: 'in-progress',
  COMPLETED: 'completed'
};

export const LABOR_RATES = {
  CARPENTRY: 65,
  PLUMBING: 75,
  ELECTRICAL: 85,
  PAINTING: 45,
  GENERAL: 55,
  ROOFING: 70,
  FLOORING: 55,
  DRYWALL: 50
};

export const MATERIAL_CATEGORIES = [
  'Lumber',
  'Hardware',
  'Fixtures',
  'Appliances',
  'Paint & Supplies',
  'Flooring',
  'Roofing',
  'Insulation',
  'Electrical',
  'Plumbing'
];

export const PROJECT_TEMPLATES = [
  {
    id: 1,
    title: 'Kitchen Remodel',
    description: 'Complete kitchen renovation with cabinets, countertops, and appliances',
    estimatedRange: { min: 25000, max: 60000 },
    category: 'Interior'
  },
  {
    id: 2,
    title: 'Bathroom Renovation',
    description: 'Full bathroom remodel with tile, fixtures, and vanity',
    estimatedRange: { min: 15000, max: 35000 },
    category: 'Interior'
  },
  {
    id: 3,
    title: 'Deck Construction',
    description: 'New deck with composite materials and railing',
    estimatedRange: { min: 8000, max: 25000 },
    category: 'Exterior'
  },
  {
    id: 4,
    title: 'Room Addition',
    description: 'New room addition with framing and finishing',
    estimatedRange: { min: 30000, max: 80000 },
    category: 'Addition'
  }
];

export const ANIMATION_DURATION = {
  FAST: 150,
  NORMAL: 300,
  SLOW: 500
};

export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536
};