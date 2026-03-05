import { Injectable } from '@nestjs/common';
import { MailProvider } from './mail.interfaces';
import { Inject } from '@nestjs/common';

@Injectable()
export class MailService {
    constructor(
        @Inject('MAIL_PROVIDER')
        private readonly mailProvider: MailProvider,
    ) { }

    public async sendOtp(email: string, code: string) {
        return await this.mailProvider.sendMail({
            to: email,
            subject: 'Код подтверждения',
            text: `Ваш код подтверждения: ${code}`,
        });
    }

    public async sendEmailChangeCode(email: string, code: string) {
        return await this.mailProvider.sendMail({
            to: email,
            subject: 'Изменение email',
            text: `Ваш код подтверждения: ${code}`,
        });
    }

    public async sendAccountSettingChangedNotify(email: string) {
        return await this.mailProvider.sendMail({
            to: email,
            subject: 'Изменение настроек',
            text: `Настройки аккаунта изменены`,
        });
    }
}