import { Module } from '@nestjs/common';
import { SmsService } from './sms.service';
import { ConfigService } from '@nestjs/config';
import { createTestSmsProvider } from './factories/test-sms.factory';

@Module({
  providers: [
    {
      provide: "SMS_PROVIDER",
      useFactory: createTestSmsProvider,
      inject: [ConfigService]
    },
    SmsService,
  ],
  exports: [SmsService]
})
export class SmsModule { }
