describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('welcomeText'))).toBeVisible();
    await expect(element(by.id('welcomeText'))).toHaveText('Welcome');
  });

  it('can Login', async () => {
    await expect(element(by.id('username'))).toBeVisible();
    await element(by.id('username')).tap();
    await element(by.id('username')).typeText('yashpal');

    await expect(element(by.id('password'))).toBeVisible();
    await element(by.id('password')).tap();
    await element(by.id('password')).typeText('khush');

    await expect(element(by.id('buttonLogin'))).toBeVisible();
    await element(by.id('buttonLogin')).tap();
  });
  // it('should show hello screen after tap', async () => {
  //   await element(by.id('hello_button')).tap();
  //   await expect(element(by.text('Hello!!!'))).toBeVisible();
  // });

  // it('should show world screen after tap', async () => {
  //   await element(by.id('world_button')).tap();
  //   await expect(element(by.text('World!!!'))).toBeVisible();
  // });
});
