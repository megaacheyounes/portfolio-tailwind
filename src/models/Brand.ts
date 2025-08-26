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
  'USeePay',
  'Anghami',
  'Road and Transport Authority',
  'Dasman Diabetes Institute',
  'Islamic Affairs and Charitable Activities Department',
  'ADCB',
  'MegTech',
] as const;

export type BrandType = (typeof Brand)[number];
