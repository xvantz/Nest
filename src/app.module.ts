import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

const environment = process.env.NODE_ENV || 'development';
@Module({
  imports: [UserModule, AuthModule,
    ConfigModule.forRoot({
      envFilePath: `.env.${environment}`,
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      autoLoadEntities: true,
    })
  ],
})
export class AppModule {}
