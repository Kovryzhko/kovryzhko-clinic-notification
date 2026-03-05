import { Inject, Injectable } from '@nestjs/common';
import { SmsProvider } from './sms.interfaces';

@Injectable()
export class SmsService {
    constructor(
        @Inject('SMS_PROVIDER')
        private readonly provider: SmsProvider
    ) { }

    public async sendOtp(phone: string, code: string) {
        return await this.provider.sendSms({
            phone: phone,
            text: `Ваш код подтверждения входа: ${code}`,
        });
    }

    public async sendPhoneChangeCode(phone: string, code: string) {
        return await this.provider.sendSms({
            phone: phone,
            text: `Код подтверждения смены номера: ${code}`,
        });
    }
}
