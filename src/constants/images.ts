export const getAssetPath = (filename: string): string => {
  const base = import.meta.env.BASE_URL || './';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  return `${cleanBase}assets/aistudio/${filename}`;
};

export const APP_IMAGES = {
  // 1. Главный экран: плашка директора на производстве
  heroDirector: getAssetPath('Gemini_Generated_Image_9vbxdl9vbxdl9vbx__1__e3c46305.jpg'),
  
  // 2. Квартира: замена окон
  apartmentWindows: getAssetPath('Gemini_Generated_Image_vrmh9rvrmh9rvrmh_9661eaa3.jpg'),
  
  // 3. Почему выбирают нас: плашка для фото производства
  whyUsProduction: getAssetPath('Gemini_Generated_Image_iotn7siotn7siotn_d21b7d97.jpg'),
  
  // 4. Квиз-расчёт: остекление объекта
  quizCalculation: getAssetPath('Gemini_Generated_Image_y9ojm7y9ojm7y9oj_3597dd19.jpg'),
  
  // 5. Коттедж / дача
  cottageHouse: getAssetPath('Gemini_Generated_Image_mw9ey6mw9ey6mw9e_b962834d.jpg'),
  
  // 6. Балкон / лоджия
  balconyGlazing: getAssetPath('Gemini_Generated_Image_rjczifrjczifrjcz_fe30121a.jpg'),
  
  // 7. Двери и конструкции
  doorsStructures: getAssetPath('Gemini_Generated_Image_oexi8foexi8foexi_bd186068.jpg'),
  
  // 8. Терраса и веранда
  terraceVeranda: getAssetPath('Gemini_Generated_Image_bfjt84bfjt84bfjt_5640e825.jpg'),
};
