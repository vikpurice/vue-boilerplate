import type { App } from "vue";
import HTTPProvider from "./HTTPProvider";
import LocalizationProvider from "./LocalizationProvider";

class ServiceProviders {
  app: App;
  constructor(app: App) {
    this.app = app;
  }

  provide(provider: HTTPProvider | LocalizationProvider) {
    provider.provide(this.app);
    return this;
  }
}

const serviceProviders = (app: App) => {
  return new ServiceProviders(app);
};

export {
  serviceProviders,
  ServiceProviders,
  HTTPProvider,
  LocalizationProvider,
};
