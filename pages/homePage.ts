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
}