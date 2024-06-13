import { type Page } from '@playwright/test';
import config from '../playwright.config.ts';

export abstract class BasePage {
    baseUrl: string;
    page: Page;
  
    constructor(page: Page) {
      this.page = page;
      this.baseUrl = config?.use?.baseURL ?? 'https://apexfintechsolutions.com';
      this.expectedCondition();
    }
  
    abstract expectedCondition(): void;

    async navigate(path: string) {
      await this.page.goto(path, { waitUntil: 'domcontentloaded' });
    }

    async getTitle() {
      return await this.page.title();
    }
  }
  