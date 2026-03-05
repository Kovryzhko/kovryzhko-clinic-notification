import { Injectable } from '@nestjs/common';
import { AccountChangedNotify, EmailChangedEvent, OtpRequestEvent, PhoneChangedEvent } from 'kovryzhko-clinic-contracts';
import { MailService } from '../mail/mail.service';
import { SmsService } from '../sms/sms.service';

@Injectable()
export class NotificationsService {
    constructor(
        private readonly mailService: MailService,
        private readonly smsService: SmsService,
    ) { }

    public async sendAuthOtp(data: OtpRequestEvent) {
        const { identifier, code, type } = data

        if (type === 'phone') {
            await this.smsService.sendOtp(identifier, code)
            return
        }

        if (type === 'email') {
            await this.mailService.sendOtp(identifier, code)
            return
        }
    }

    public async sendEmailChangeCode(data: EmailChangedEvent) {
        const { email, code } = data

        await this.mailService.sendEmailChangeCode(email, code)
    }

    public async sendPhoneChangeCode(data: PhoneChangedEvent) {
        const { phone, code } = data

        await this.smsService.sendPhoneChangeCode(phone, code)
    }

    public async sendOptionsChangedNotify(data: AccountChangedNotify) {
        const { email } = data

        await this.mailService.sendAccountSettingChangedNotify(email)
    }
}
