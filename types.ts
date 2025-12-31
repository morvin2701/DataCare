export interface ProductVersion {
  id: string;
  name: string;
  description: string;
  uniqueFeatures: string[];
  recommendedFor: string;
}

export interface Sector {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface CommonFeature {
  name: string;
  category: 'Sales' | 'Inventory' | 'Finance' | 'Reporting' | 'Utility';
}