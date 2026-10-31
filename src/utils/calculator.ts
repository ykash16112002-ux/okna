/**
 * Quiz Calculation helpers
 */

export interface QuizState {
  objectType: string;
  windowCount: number;
  profileType: string;
  district: string;
  name: string;
  phone: string;
  contactChannel: 'phone' | 'whatsapp' | 'telegram' | 'max';
  consent: boolean;
}

export interface EstimateResult {
  categoryName: string;
  profileName: string;
  recommendedChambers: number;
  depthMm: number;
  readyDays: string;
  summary: string;
}

export function computeQuizEstimate(quiz: Partial<QuizState>): EstimateResult {
  const profileKey = quiz.profileType || 'VEKA Softline 70';

  let depthMm = 70;
  let recommendedChambers = 5;
  let readyDays = '5–7 рабочих дней';
  let profileName = 'VEKA Softline 70 (Германия)';

  if (profileKey.includes('82')) {
    depthMm = 82;
    recommendedChambers = 7;
    readyDays = '6–8 рабочих дней';
    profileName = 'VEKA Softline 82 (Премиум энергосбережение)';
  } else if (profileKey.includes('WHS') || profileKey.includes('72')) {
    depthMm = 72;
    recommendedChambers = 5;
    readyDays = '5–7 рабочих дней';
    profileName = 'WHS by VEKA 72 (Высокая надежность)';
  }

  const categoryName = quiz.objectType || 'Квартира';

  return {
    categoryName,
    profileName,
    recommendedChambers,
    depthMm,
    readyDays,
    summary: `${categoryName} • ${profileName} • Монтаж по ГОСТ • Замер в г. ${quiz.district || 'Калининград'}`,
  };
}
