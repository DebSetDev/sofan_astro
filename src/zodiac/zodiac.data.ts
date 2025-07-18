import { ZodiacSign } from './zodiac.model';

export const zodiacSigns: ZodiacSign[] = [
  { name: 'Aries', startDay: 21, startMonth: 3, endDay: 19, endMonth: 4 },
  { name: 'Taurus', startDay: 20, startMonth: 4, endDay: 20, endMonth: 5 },
  { name: 'Gemini', startDay: 21, startMonth: 5, endDay: 20, endMonth: 6 },
  { name: 'Cancer', startDay: 21, startMonth: 6, endDay: 22, endMonth: 7 },
  { name: 'Leo', startDay: 23, startMonth: 7, endDay: 22, endMonth: 8 },
  { name: 'Virgo', startDay: 23, startMonth: 8, endDay: 22, endMonth: 9 },
  { name: 'Libra', startDay: 23, startMonth: 9, endDay: 22, endMonth: 10 },
  { name: 'Scorpio', startDay: 23, startMonth: 10, endDay: 21, endMonth: 11 },
  {
    name: 'Sagittarius',
    startDay: 22,
    startMonth: 11,
    endDay: 21,
    endMonth: 12,
  },
  { name: 'Capricorn', startDay: 22, startMonth: 12, endDay: 19, endMonth: 1 },
  { name: 'Aquarius', startDay: 20, startMonth: 1, endDay: 18, endMonth: 2 },
  { name: 'Pisces', startDay: 19, startMonth: 2, endDay: 20, endMonth: 3 },
];
