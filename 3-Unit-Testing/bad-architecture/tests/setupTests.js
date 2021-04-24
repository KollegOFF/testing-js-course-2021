global.document.getElementById = jest.fn().mockReturnValue({
  addEventListener: jest.fn()
});