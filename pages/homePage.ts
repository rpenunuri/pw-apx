import { Locator, expect } from '@playwright/test';
import { BasePage } from './basePage';
import { ContactUsPage } from './contactUsPage';

export class HomePage extends BasePage {
  readonly path: string;
  readonly galaxySwiper: Locator;
  readonly galaxySwiperActiveSlide: Locator;
  readonly galaxySwiperNextSlide: Locator;
  readonly galaxySwiperNavigationRightButton: Locator;
  readonly contactLink: Locator;

  constructor(page) {
    super(page);

    this.path = this.baseUrl + '/';
    this.contactLink = this.page.getByRole('link', { name: /Contact/ });
    this.galaxySwiper = this.page.locator('.galaxy-carousel');
    this.galaxySwiperActiveSlide = this.galaxySwiper.locator('.swiper-slide-visible.swiper-slide-active');
    this.galaxySwiperNextSlide = this.galaxySwiper.locator('.swiper-slide-visible.swiper-slide-next');
    this.galaxySwiperNavigationRightButton = this.galaxySwiper.locator('div.navigation-arrows div.navigation-arrow.right');
    // this.revenuePlatformCardsHeader = this.page.getByRole('heading', { name: /Everything you need to run revenue/ });
    // this.revenuePlatformCards = this.page.getByRole('listitem').filter({ has: this.page.locator('a.cl-tile-cta-card') });
    // this.forecastPlatformCard = this.revenuePlatformCards.filter({ hasText: /Forecasting & RevOps/ });
    // this.forecastPlatformCardDescription = this.forecastPlatformCard.locator('div[class*=__short-des]');
    // this.forecastPlatformCardButton = this.forecastPlatformCard.locator('div[class*=__buttons]');
 }

  async expectedCondition() {
    await expect(this.page).toHaveTitle(/Home | Apex Fintech Solutions/);
  }

  async goToHomePage() {
    await this.navigate(this.path);
  }

  async assertSwiperActiveSlideIsVisible() {
    await expect(this.galaxySwiperActiveSlide).toBeVisible();
  }

  async swipeNavigationSlider() {
    await this.galaxySwiperNavigationRightButton.click();
  }

  async getActiveSwiperSlideTitleText() {
    return await this.galaxySwiperActiveSlide.textContent();
  }

  async getNextSwiperSlideTitleText() {
    return await this.galaxySwiperNextSlide.textContent();
  }

  async clickContactLink(): Promise<ContactUsPage> {
    await this.contactLink.click();
    return new ContactUsPage(this.page);
  }

  // async assertForecasePlatformCardDescriptionIsVisible() {
  //   await expect(this.forecastPlatformCardDescription).toBeVisible();
  // }

  // async assertForecasePlatformCardDescriptionIsNotVisible() {
  //   await expect(this.forecastPlatformCardDescription).not.toBeVisible();
  // }

  // async assertForecastPlatformCardButtonIsVisible() {
  //   await expect(this.forecastPlatformCardButton).toBeVisible();
  // }

  // async assertForecastPlatformCardButtonIsNotVisible() {
  //   await expect(this.forecastPlatformCardButton).not.toBeVisible();
  // }

  // async mouseOverForecastPlatformCard() {
  //   await this.forecastPlatformCard.hover();
  // }

  // async scrollToRevenuePlatformCardsHeader() {
  //   await this.revenuePlatformCardsHeader.scrollIntoViewIfNeeded();
  // }

  // async clickForecastPlatformCardButton(): Promise<ForecastOverviewPage> {
  //   await this.forecastPlatformCardButton.click();
  //   return new ForecastOverviewPage(this.page);
  // }

  // async assertRevenuePlatformCardsTitleTextIsCorrect() {
  //   const expectedRevenuePlatformCardsText = [/Forecasting & RevOps/, 
  //                         /Conversation Intelligence/, 
  //                         /Sales Engagement/, 
  //                         /Deal Inspection & Management/,
  //                         /Mutual Action Plans & Deal Rooms/,
  //                         /Data Capture & Ingestion/
  //                       ];
    
  //   await expect(this.revenuePlatformCards).toHaveText(expectedRevenuePlatformCardsText);
  // }
}