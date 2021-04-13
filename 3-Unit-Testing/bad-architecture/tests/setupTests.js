const elementOnPage = {
  addEventListener: jest.fn()
};

document.getElementById = jest.fn().mockReturnValue(elementOnPage);