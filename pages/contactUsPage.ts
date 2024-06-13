import { Locator, expect } from '@playwright/test';
import { BasePage } from './basePage';

export class ContactUsPage extends BasePage {
    readonly path: string;
    readonly locations: Locator;

    constructor(page) {
        super(page);

        this.path = this.baseUrl + '/contact-us';
        this.locations = this.page.locator('.locations .location-item');
    }

    async expectedCondition() {
        await expect(this.page).toHaveTitle(/Contact Us | Apex Fintech Solutions/);
    }

    async goToContactUsPage() {
        await this.navigate(this.path);
    }

    async assertLocationsCitiesAreCorrect() {
        const expectedCities = [/Dallas - HQ/, 
                    /Austin/, 
                    /Bridgewater/, 
                    /Chicago/, 
                    /New York/, 
                    /Omaha/, 
                    /Portland/, 
                    /Belfast, UK/, 
                    /Manila, Philippines/];

        await expect(this.locations).toHaveText(expectedCities);
    }




}