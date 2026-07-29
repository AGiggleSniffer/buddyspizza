import "better-auth";

declare module "better-auth" {
    interface AuthPluginBase {
        views?: Record<string, any>;
        fallbackViews?: Record<string, any>;
        captchaComponent?: any;
        authButtons?: any[];
    }
}
