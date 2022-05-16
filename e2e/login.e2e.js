describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('welcomeText'))).toBeVisible();
    await expect(element(by.id('welcomeText'))).toHaveText('Welcome');
  });

  it('can Login', async () => {
    const domainTextInputValue = 'Raj';
    await checkLogin(domainTextInputValue);
    await enterUrl(domainTextInputValue);
  });

  async function checkLogin(domainTextInputValue) {
    await expect(element(by.id('username'))).toBeVisible();
    await element(by.id('username')).tap();
    await element(by.id('username')).typeText('yashpal');

    await expect(element(by.id('password'))).toBeVisible();
    await element(by.id('password')).tap();
    await element(by.id('password')).typeText('khush');

    await expect(element(by.id('buttonLogin'))).toBeVisible();
    await element(by.id('buttonLogin')).tap();

    await expect(element(by.id('domainTextInput'))).toBeVisible();
    await element(by.id('domainTextInput')).tap();
    await element(by.id('domainTextInput')).typeText(domainTextInputValue);

    await expect(element(by.id('buttonDomain'))).toBeVisible();
    await element(by.id('buttonDomain')).tap();

    await expect(element(by.label(domainTextInputValue))).toBeVisible();
    await expect(element(by.id('domainTextInput'))).not.toBeVisible();

    await element(by.id('username')).tap();
    await element(by.id('username')).typeText('Khush');

    await element(by.id('password')).tap();
    await element(by.id('password')).typeText('Yash');

    await element(by.id('buttonLogin')).tap();

    await element(by.id('domainTextInput')).tap();
    await element(by.id('domainTextInput')).typeText('');
    await element(by.id('buttonDomain')).tap();

    await element(by.id('domainTextInput')).tap();
    await element(by.id('domainTextInput')).typeText('Domain');
    await element(by.id('buttonDomain')).tap();

    // await element(by.id('username')).tap();
    // await element(by.id('username')).typeText('Hardik');

    // await element(by.id('password')).tap();
    // await element(by.id('password')).typeText('HS1717');

    // await element(by.id('buttonLogin')).tap();

    // await element(by.id('domainTextInput')).tap();
    // await element(by.id('domainTextInput')).typeText('HS');

    // await element(by.id('buttonDomain')).tap();

    await element(by.id('username')).tap();
    await element(by.id('username')).typeText('Yas');

    await element(by.id('password')).tap();
    await element(by.id('password')).typeText('123');

    await element(by.id('buttonLogin')).tap();

    await element(by.id('domainTextInput')).tap();
    await element(by.id('domainTextInput')).typeText('');

    await element(by.id('buttonDomainCancel')).tap();
  }

  async function enterUrl(domainTextInputValue) {
    const urlText = 'www.google.com';

    await element(by.label(domainTextInputValue)).tap();
    await element(by.id('newUrlButton')).tap();
    await element(by.id('urlTextInput')).typeText(urlText);
    await element(by.label(urlText)).toBeVisible();
    await element(by.id('urlTextInput')).not.toBeVisible();
  }
});
