const Brand = [
  'Huawei',
  'Algebratec',
  'Tawasal',
  'Carrefour',
  'Dubai Police',
  'Reel Cinemas',
  'Dubai Sports',
  'Emirates',
  'Steppi',
  'Visit Abudhabi',
  'Approcks',
  'USeePay'
] as const;

export type BrandType = (typeof Brand)[number];
