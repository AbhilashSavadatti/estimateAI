import { LABOR_RATES, MATERIAL_CATEGORIES } from '../utils/constants';

class AIService {
  // Simulate AI processing with realistic construction estimation logic
  generateEstimate(description) {
    return new Promise((resolve) => {
      // Simulate API delay
      setTimeout(() => {
        const estimate = this.processDescription(description);
        resolve(estimate);
      }, 1500);
    });
  }

  processDescription(description) {
    const text = description.toLowerCase();
    const projectType = this.identifyProjectType(text);
    const scope = this.analyzeScope(text);
    const breakdown = this.generateBreakdown(projectType, scope, text);
    
    const laborCost = breakdown.labor.reduce((sum, item) => sum + item.total, 0);
    const materialCost = breakdown.materials.reduce((sum, item) => sum + item.total, 0);
    const totalCost = laborCost + materialCost;

    return {
      title: this.generateTitle(projectType, scope),
      description,
      totalCost: Math.round(totalCost),
      laborCost: Math.round(laborCost),
      materialCost: Math.round(materialCost),
      status: 'draft',
      client: 'New Client',
      breakdown: [
        { category: 'Materials', items: breakdown.materials },
        { category: 'Labor', items: breakdown.labor }
      ]
    };
  }

  identifyProjectType(text) {
    const keywords = {
      kitchen: ['kitchen', 'cabinet', 'countertop', 'appliance'],
      bathroom: ['bathroom', 'shower', 'toilet', 'vanity', 'tile'],
      deck: ['deck', 'patio', 'outdoor', 'composite'],
      addition: ['addition', 'room', 'expand', 'extension'],
      roofing: ['roof', 'shingle', 'gutter', 'attic'],
      flooring: ['floor', 'hardwood', 'carpet', 'laminate', 'tile'],
      painting: ['paint', 'color', 'wall', 'interior', 'exterior']
    };

    for (const [type, words] of Object.entries(keywords)) {
      if (words.some(word => text.includes(word))) {
        return type;
      }
    }
    
    return 'general';
  }

  analyzeScope(text) {
    const size = this.extractSize(text);
    const complexity = this.assessComplexity(text);
    
    return { size, complexity };
  }

  extractSize(text) {
    // Try to extract square footage or room count
    const sqftMatch = text.match(/(\d+)\s*(sq\s*ft|square\s*feet?)/i);
    if (sqftMatch) {
      return parseInt(sqftMatch[1]);
    }
    
    // Default sizes based on keywords
    if (text.includes('small')) return 100;
    if (text.includes('large')) return 400;
    if (text.includes('master')) return 300;
    
    return 200; // Default size
  }

  assessComplexity(text) {
    const luxuryWords = ['luxury', 'premium', 'high-end', 'custom', 'designer'];
    const basicWords = ['basic', 'simple', 'budget', 'standard'];
    
    if (luxuryWords.some(word => text.includes(word))) return 'high';
    if (basicWords.some(word => text.includes(word))) return 'low';
    
    return 'medium';
  }

  generateBreakdown(projectType, scope, text) {
    const multiplier = {
      low: 0.8,
      medium: 1.0,
      high: 1.3
    }[scope.complexity];

    switch (projectType) {
      case 'kitchen':
        return this.generateKitchenBreakdown(scope, multiplier);
      case 'bathroom':
        return this.generateBathroomBreakdown(scope, multiplier);
      case 'deck':
        return this.generateDeckBreakdown(scope, multiplier);
      default:
        return this.generateGeneralBreakdown(scope, multiplier, text);
    }
  }

  generateKitchenBreakdown(scope, multiplier) {
    const baseCost = scope.size * 150 * multiplier;
    
    return {
      materials: [
        { name: 'Kitchen Cabinets', quantity: '1 set', unitCost: baseCost * 0.4, total: Math.round(baseCost * 0.4) },
        { name: 'Countertops', quantity: `${Math.round(scope.size * 0.3)} sq ft`, unitCost: 80, total: Math.round(scope.size * 0.3 * 80 * multiplier) },
        { name: 'Appliances', quantity: '1 set', unitCost: baseCost * 0.25, total: Math.round(baseCost * 0.25) },
        { name: 'Hardware & Fixtures', quantity: '1 lot', unitCost: 800, total: Math.round(800 * multiplier) }
      ],
      labor: [
        { name: 'Demolition', hours: Math.round(scope.size * 0.1), rate: LABOR_RATES.GENERAL, total: Math.round(scope.size * 0.1 * LABOR_RATES.GENERAL) },
        { name: 'Carpentry Work', hours: Math.round(scope.size * 0.4), rate: LABOR_RATES.CARPENTRY, total: Math.round(scope.size * 0.4 * LABOR_RATES.CARPENTRY * multiplier) },
        { name: 'Electrical Work', hours: Math.round(scope.size * 0.15), rate: LABOR_RATES.ELECTRICAL, total: Math.round(scope.size * 0.15 * LABOR_RATES.ELECTRICAL) },
        { name: 'Installation', hours: Math.round(scope.size * 0.3), rate: LABOR_RATES.GENERAL, total: Math.round(scope.size * 0.3 * LABOR_RATES.GENERAL) }
      ]
    };
  }

  generateBathroomBreakdown(scope, multiplier) {
    const baseCost = scope.size * 120 * multiplier;
    
    return {
      materials: [
        { name: 'Tiles', quantity: `${Math.round(scope.size * 1.5)} sq ft`, unitCost: 15, total: Math.round(scope.size * 1.5 * 15 * multiplier) },
        { name: 'Fixtures', quantity: '1 set', unitCost: baseCost * 0.35, total: Math.round(baseCost * 0.35) },
        { name: 'Vanity', quantity: '1 unit', unitCost: baseCost * 0.25, total: Math.round(baseCost * 0.25) },
        { name: 'Plumbing Supplies', quantity: '1 lot', unitCost: 600, total: Math.round(600 * multiplier) }
      ],
      labor: [
        { name: 'Tile Installation', hours: Math.round(scope.size * 0.3), rate: LABOR_RATES.GENERAL, total: Math.round(scope.size * 0.3 * LABOR_RATES.GENERAL * multiplier) },
        { name: 'Plumbing Work', hours: Math.round(scope.size * 0.2), rate: LABOR_RATES.PLUMBING, total: Math.round(scope.size * 0.2 * LABOR_RATES.PLUMBING) },
        { name: 'Electrical Work', hours: Math.round(scope.size * 0.1), rate: LABOR_RATES.ELECTRICAL, total: Math.round(scope.size * 0.1 * LABOR_RATES.ELECTRICAL) }
      ]
    };
  }

  generateDeckBreakdown(scope, multiplier) {
    return {
      materials: [
        { name: 'Composite Decking', quantity: `${scope.size} sq ft`, unitCost: 12, total: Math.round(scope.size * 12 * multiplier) },
        { name: 'Support Structure', quantity: '1 lot', unitCost: scope.size * 8, total: Math.round(scope.size * 8 * multiplier) },
        { name: 'Railing', quantity: `${Math.round(scope.size * 0.4)} linear ft`, unitCost: 25, total: Math.round(scope.size * 0.4 * 25 * multiplier) },
        { name: 'Hardware', quantity: '1 lot', unitCost: 400, total: Math.round(400 * multiplier) }
      ],
      labor: [
        { name: 'Foundation Work', hours: Math.round(scope.size * 0.1), rate: LABOR_RATES.GENERAL, total: Math.round(scope.size * 0.1 * LABOR_RATES.GENERAL) },
        { name: 'Framing', hours: Math.round(scope.size * 0.15), rate: LABOR_RATES.CARPENTRY, total: Math.round(scope.size * 0.15 * LABOR_RATES.CARPENTRY) },
        { name: 'Decking Installation', hours: Math.round(scope.size * 0.1), rate: LABOR_RATES.CARPENTRY, total: Math.round(scope.size * 0.1 * LABOR_RATES.CARPENTRY) }
      ]
    };
  }

  generateGeneralBreakdown(scope, multiplier, text) {
    const baseCost = scope.size * 80 * multiplier;
    
    return {
      materials: [
        { name: 'Materials', quantity: '1 lot', unitCost: baseCost * 0.6, total: Math.round(baseCost * 0.6) },
        { name: 'Hardware & Supplies', quantity: '1 lot', unitCost: baseCost * 0.2, total: Math.round(baseCost * 0.2) }
      ],
      labor: [
        { name: 'General Labor', hours: Math.round(scope.size * 0.3), rate: LABOR_RATES.GENERAL, total: Math.round(scope.size * 0.3 * LABOR_RATES.GENERAL * multiplier) },
        { name: 'Specialized Work', hours: Math.round(scope.size * 0.2), rate: LABOR_RATES.CARPENTRY, total: Math.round(scope.size * 0.2 * LABOR_RATES.CARPENTRY * multiplier) }
      ]
    };
  }

  generateTitle(projectType, scope) {
    const typeNames = {
      kitchen: 'Kitchen Remodel',
      bathroom: 'Bathroom Renovation',
      deck: 'Deck Construction',
      addition: 'Room Addition',
      roofing: 'Roofing Project',
      flooring: 'Flooring Installation',
      painting: 'Interior/Exterior Painting',
      general: 'Construction Project'
    };

    return typeNames[projectType] || 'New Project Estimate';
  }
}

export const aiService = new AIService();