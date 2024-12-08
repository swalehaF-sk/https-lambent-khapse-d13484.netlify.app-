export interface User {
  id: string;
  name: string;
  email: string;
  role: 'parent' | 'child';
}

export interface ChildProfile {
  id: string;
  name: string;
  age: number;
  parentId: string;
  preferences: {
    categories: string[];
    maxScreenTime: number;
  };
}

export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: number;
  category: string;
  ageRange: {
    min: number;
    max: number;
  };
  educational: boolean;
}