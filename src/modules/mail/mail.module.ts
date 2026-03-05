import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { createMailtrapProvider } from './factories/mailtrap.factory';
import { ConfigService } from '@nestjs/config';

@Module({
  providers: [
    {
      provide: "MAIL_PROVIDER",
      useFactory: createMailtrapProvider,
      inject: [ConfigService]
    },
    MailService,
  ],
  exports: [MailService],
})
export class MailModule { }