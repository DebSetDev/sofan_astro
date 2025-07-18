import { Module } from '@nestjs/common';
import { ZodiacResolver } from './zodiac.resolver';
import { ZodiacService } from './zodiac.service';

@Module({
  providers: [ZodiacResolver, ZodiacService],
})
export class ZodiacModule {}
