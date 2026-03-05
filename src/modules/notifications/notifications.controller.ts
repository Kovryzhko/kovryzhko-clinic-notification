import { Controller } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { AccountChangedNotify, EmailChangedEvent, OtpRequestEvent, PhoneChangedEvent } from 'kovryzhko-clinic-contracts';
import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';

@Controller()
export class NotificationsController {
  constructor(
    private readonly notificationsService: NotificationsService,
  ) { }

  @RabbitSubscribe({
    exchange: 'auth',
    routingKey: 'auth.otp.request',
    queue: 'auth.otp.request',
  })
  public async sendAuthOtp(data: OtpRequestEvent) {
    await this.notificationsService.sendAuthOtp(data)
  }

  @RabbitSubscribe({
    exchange: 'account',
    routingKey: 'account.email.change',
    queue: 'account.email.change',
  })
  public async sendEmailChangeCode(data: EmailChangedEvent) {
    await this.notificationsService.sendEmailChangeCode(data)
  }

  @RabbitSubscribe({
    exchange: 'account',
    routingKey: 'account.phone.change',
    queue: 'account.phone.change',
  })
  public async sendPhoneChangeCode(data: PhoneChangedEvent) {
    await this.notificationsService.sendPhoneChangeCode(data)
  }

  @RabbitSubscribe({
    exchange: 'account',
    routingKey: 'account.settings-change.notify',
    queue: 'account.settings-change.notify',
  })
  public async sendOptionsChangedNotify(data: AccountChangedNotify) {
    await this.notificationsService.sendOptionsChangedNotify(data)
  }
}
