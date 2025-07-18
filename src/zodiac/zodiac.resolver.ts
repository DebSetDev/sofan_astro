import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { ZodiacService } from './zodiac.service';
import { ZodiacSign } from './zodiac.model';

@Resolver(() => ZodiacSign)
export class ZodiacResolver {
  constructor(private readonly zodiacService: ZodiacService) {}
  //tous les signes
  @Query(() => [ZodiacSign])
  zodiacSigns() {
    return this.zodiacService.getAll();
  }
  //par signe selon date
  @Query(() => ZodiacSign, { nullable: true })
  zodiacSignByDate(
    @Args('day', { type: () => Int }) day: number,
    @Args('month', { type: () => Int }) month: number,
  ) {
    return this.zodiacService.getByDate(day, month);
  }
}
