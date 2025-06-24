export const mockEstimates = [
  {
    id: 1,
    title: 'Kitchen Remodel - Oak Street',
    description: 'Complete kitchen renovation with new cabinets, countertops, and appliances. Includes demolition, electrical work, plumbing updates, and premium finishes.',
    totalCost: 45000,
    laborCost: 18000,
    materialCost: 27000,
    status: 'completed',
    date: '2024-06-20',
    client: 'Johnson Family',
    address: '123 Oak Street, Springfield',
    breakdown: [
      {
        category: 'Materials',
        items: [
          { name: 'Kitchen Cabinets', quantity: '1 set', unitCost: 12000, total: 12000 },
          { name: 'Granite Countertops', quantity: '45 sq ft', unitCost: 80, total: 3600 },
          { name: 'Appliances Package', quantity: '1 set', unitCost: 8500, total: 8500 },
          { name: 'Flooring (Hardwood)', quantity: '200 sq ft', unitCost: 12, total: 2400 },
          { name: 'Hardware & Fixtures', quantity: '1 lot', unitCost: 500, total: 500 }
        ]
      },
      {
        category: 'Labor',
        items: [
          { name: 'Demolition', hours: 16, rate: 45, total: 720 },
          { name: 'Carpentry Work', hours: 80, rate: 65, total: 5200 },
          { name: 'Electrical Updates', hours: 24, rate: 85, total: 2040 },
          { name: 'Plumbing Work', hours: 16, rate: 75, total: 1200 },
          { name: 'Installation & Finishing', hours: 120, rate: 55, total: 6600 },
          { name: 'Cleanup', hours: 8, rate: 35, total: 280 }
        ]
      }
    ]
  },
  {
    id: 2,
    title: 'Bathroom Renovation - Pine Ave',
    description: 'Master bathroom remodel with luxury tile work, new fixtures, and custom vanity',
    totalCost: 22000,
    laborCost: 8000,
    materialCost: 14000,
    status: 'in-progress',
    date: '2024-06-18',
    client: 'Smith Residence',
    address: '456 Pine Avenue, Springfield',
    breakdown: [
      {
        category: 'Materials',
        items: [
          { name: 'Porcelain Tiles', quantity: '120 sq ft', unitCost: 15, total: 1800 },
          { name: 'Custom Vanity', quantity: '1 unit', unitCost: 3500, total: 3500 },
          { name: 'Luxury Fixtures', quantity: '1 set', unitCost: 2200, total: 2200 },
          { name: 'Plumbing Supplies', quantity: '1 lot', unitCost: 800, total: 800 }
        ]
      },
      {
        category: 'Labor',
        items: [
          { name: 'Tile Installation', hours: 40, rate: 60, total: 2400 },
          { name: 'Plumbing Work', hours: 20, rate: 75, total: 1500 },
          { name: 'Electrical Work', hours: 12, rate: 85, total: 1020 },
          { name: 'General Construction', hours: 48, rate: 55, total: 2640 }
        ]
      }
    ]
  },
  {
    id: 3,
    title: 'Deck Construction - Maple Drive',
    description: 'New 400 sq ft composite deck with railing, built-in seating, and LED lighting',
    totalCost: 15000,
    laborCost: 6000,
    materialCost: 9000,
    status: 'draft',
    date: '2024-06-15',
    client: 'Brown Family',
    address: '789 Maple Drive, Springfield'
  }
];

export const dashboardStats = {
  totalRevenue: 182000,
  revenueChange: 12,
  activeProjects: 8,
  projectsChange: 3,
  totalClients: 24,
  clientsChange: 5,
  successRate: 94,
  successRateChange: 2
};