import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class ZodiacSign {
  @Field()
  name: string;

  @Field(() => Int)
  startDay: number;

  @Field(() => Int)
  startMonth: number;

  @Field(() => Int)
  endDay: number;

  @Field(() => Int)
  endMonth: number;
}
