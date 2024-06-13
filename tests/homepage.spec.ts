import { expect, test } from '@playwright/test';
import { HomePage } from '../pages/homePage';

test.describe('Home Page', () => {
  test('user can swipe navigation slider', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goToHomePage();
    await homePage.assertSwiperActiveSlideIsVisible();

    const nextSlideTitle = await homePage.getNextSwiperSlideTitleText();
    await homePage.swipeNavigationSlider();
    const activeSlideTitle = await homePage.getActiveSwiperSlideTitleText();

    expect(activeSlideTitle).toBe(nextSlideTitle);
  });

  test('user is redirected to Contact Us page', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goToHomePage();
    
    const contactUsPage = await homePage.clickContactLink();
    await contactUsPage.assertLocationsCitiesAreCorrect();
  });
});
