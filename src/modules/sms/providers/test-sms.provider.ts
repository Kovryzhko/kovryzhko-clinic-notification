
import { IS_PROD } from "src/config/app.config";
import { SmsOptions, SmsProvider } from "../sms.interfaces";

export class TestSmsProvider implements SmsProvider {
    public async sendSms(options: SmsOptions) {
        if (!IS_PROD) { console.log(`sms to ${options.phone}: ${options.text}`); return }
    }
}