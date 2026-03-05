import { ConfigService } from "@nestjs/config";
import { TestSmsProvider } from "../providers/test-sms.provider";

export function createTestSmsProvider(config: ConfigService) {
    return new TestSmsProvider()
}