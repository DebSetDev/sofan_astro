import { Injectable } from '@nestjs/common';
import { zodiacSigns } from './zodiac.data';
import { ZodiacSign } from './zodiac.model';

@Injectable()
export class ZodiacService {
  //Renvoi tous les signes
  getAll(): ZodiacSign[] {
    return zodiacSigns;
  }
  // renvoi signe selon jour/mois
  getByDate(day: number, month: number): ZodiacSign | undefined {
    return zodiacSigns.find((sign) => {
      const { startDay, startMonth, endDay, endMonth } = sign;

      if (
        startMonth < endMonth ||
        (startMonth === endMonth && startDay <= endDay)
      ) {
        return (
          (month > startMonth || (month === startMonth && day >= startDay)) &&
          (month < endMonth || (month === endMonth && day <= endDay))
        );
      } else {
        return (
          month > startMonth ||
          (month === startMonth && day >= startDay) ||
          month < endMonth ||
          (month === endMonth && day <= endDay)
        );
      }
    });
  }
}
