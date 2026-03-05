import { Module } from '@nestjs/common';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { NotificationsController } from './notifications.controller';
import { NotificationsService } from './notifications.service';
import { ConfigService } from '@nestjs/config';
import { getRmqConfig } from 'src/config/rmq.config';
import { MailModule } from '../mail/mail.module';
import { SmsModule } from '../sms/sms.module';

@Module({
  imports: [
    RabbitMQModule.forRootAsync({
      inject: [ConfigService],
      useFactory: getRmqConfig,
    }),
    MailModule,
    SmsModule,
  ],
  controllers: [NotificationsController],  
  providers: [NotificationsService],
})
export class NotificationsModule { }