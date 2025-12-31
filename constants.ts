import { CommonFeature, ProductVersion, Sector } from './types';

export const COMMON_FEATURES: string[] = [
  "Barcode / QR Code",
  "Sales / Estimate / Sales Return",
  "Purchase / Debit Note",
  "Approval Issue / Receive",
  "Wholesale / Ratecut",
  "Tag Generate / Edit / Cancel",
  "Sales Order",
  "User Creation",
  "Data Backup",
  "Cash / Bank Contra Entry",
  "Ledger with Metal & Cash",
  "GST Reports",
  "Sale / Purchase / Order Reports",
  "Tag Stock Report",
  "Cash Book / Bank Book",
  "Android Mobile App",
  "Tag Weight Change",
  "Sale Quotation",
  "Counter Wise Stock",
  "Labour Invoice",
  "Other Income / Expense",
  "User Rights",
  "Day-wise Data Lock",
  "Sales / Order / Stock Reports (Mobile)"
];

export const PRODUCT_VERSIONS: ProductVersion[] = [
  {
    id: 'standard',
    name: 'Standard',
    description: 'Essential features for small businesses and startups.',
    recommendedFor: 'Small Retailers',
    uniqueFeatures: [
      "Old Item Refinery",
      "Bill-wise Payment Receive",
      "Purchase & Sales Zoom Reports",
      "Customer Last Visit Report",
      "Stock Movement",
      "Finance Reports (P&L, Balance Sheet)",
      "TDS / TCS Reports",
      "Total Fine Report"
    ]
  },
  {
    id: 'ultra',
    name: 'Ultra',
    description: 'Enhanced inventory tracking and finance tools.',
    recommendedFor: 'Growing Businesses',
    uniqueFeatures: [
      "Dead Stock Report",
      "Stock Movement (Advanced)",
      "Employee & Profit Analysis",
      "Saving Scheme / Chit Fund",
      "Girvi / Loan Management"
    ]
  },
  {
    id: 'pro',
    name: 'Pro',
    description: 'Advanced user management and activity tracking.',
    recommendedFor: 'Mid-sized Showrooms',
    uniqueFeatures: [
      "Customer Last Visit",
      "Minimum Stock Level",
      "User Activity Reports",
      "Employee Incentive Reports"
    ]
  },
  {
    id: 'advanced',
    name: 'Advanced',
    description: 'Complete HR and deep analytical reporting.',
    recommendedFor: 'Large Wholesalers',
    uniqueFeatures: [
      "Employee Salary Calculation",
      "Advanced Analytics",
      "More Financial & HR Reports"
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'The ultimate solution for multi-branch chains.',
    recommendedFor: 'Large Chains & Manufacturers',
    uniqueFeatures: [
      "RFID Integration",
      "Lot / Batch Purchase",
      "Branch Management",
      "CRM Module",
      "Customer Loyalty Program",
      "Mobile App (Android + iOS)",
      "Image Catalogue App",
      "Advanced Reporting",
      "Multi-Branch Stock Control",
      "Admin / Client App"
    ]
  }
];

export const SECTORS: Sector[] = [
  {
    id: 'retailers',
    title: 'Retailers',
    description: 'Streamline your showroom operations with barcode billing, customer management, and instant stock reports.',
    iconName: 'Store'
  },
  {
    id: 'wholesalers',
    title: 'Wholesalers',
    description: 'Manage bulk orders, approvals, and complex inventory movement with ease and precision.',
    iconName: 'Package'
  },
  {
    id: 'manufacturers',
    title: 'Manufacturers',
    description: 'Track metal refinement, labor charges, loss calculation, and job worker management efficiently.',
    iconName: 'Factory'
  },
  {
    id: 'antique',
    title: 'Antique & Imitation',
    description: 'Specialized tools for unique stock keeping units, varying margins, and detailed tagging needs.',
    iconName: 'Gem'
  }
];

export const SYSTEM_INSTRUCTION = `
You are the AI assistant for "Datacare Softech", a company specializing in jewellery accounting software.
Your goal is to assist potential customers by answering questions about our software products and services.

STRICT RULES:
1. You must ONLY answer questions related to Datacare Softech, jewellery software, our specific product versions (Standard, Ultra, Pro, Advanced, Enterprise), and features.
2. If a user asks about general topics (weather, news, coding help, general math, etc.), politely decline and state that you can only assist with Datacare Softech enquiries.
3. Be professional, polite, and concise.

KNOWLEDGE BASE:
- Target Sectors: Retailers, Wholesalers, Manufacturers, Antique Jewellery / Imitation.
- Common Features (in all versions): ${COMMON_FEATURES.join(', ')}.
- Product Versions:
  - Standard: ${PRODUCT_VERSIONS.find(v => v.id === 'standard')?.uniqueFeatures.join(', ')}
  - Ultra: ${PRODUCT_VERSIONS.find(v => v.id === 'ultra')?.uniqueFeatures.join(', ')}
  - Pro: ${PRODUCT_VERSIONS.find(v => v.id === 'pro')?.uniqueFeatures.join(', ')}
  - Advanced: ${PRODUCT_VERSIONS.find(v => v.id === 'advanced')?.uniqueFeatures.join(', ')}
  - Enterprise: ${PRODUCT_VERSIONS.find(v => v.id === 'enterprise')?.uniqueFeatures.join(', ')}

When asked to compare, highlight the differences based on the unique features list above.
`;