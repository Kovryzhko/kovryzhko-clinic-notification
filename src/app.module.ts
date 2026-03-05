import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { MailModule } from './modules/mail/mail.module';
import { SmsModule } from './modules/sms/sms.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), NotificationsModule, MailModule, SmsModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
