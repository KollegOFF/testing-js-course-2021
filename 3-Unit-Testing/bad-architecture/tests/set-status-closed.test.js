import { describe, beforeEach, jest, test, expect } from '@jest/globals';

import { setStatusClosed } from '../src/main';

describe('setStatusClosed function:', () => {
  beforeEach(() => {
    JSON.parse = jest.fn().mockReturnValue([{ id: 1, status: 'Opened' }, { id: 2, status: 'Opened' }]);
    JSON.stringify = jest.fn();
  });

  test('it works despite different id types', () => {
    const expectedIssues = [{ id: 1, status: 'Closed' }, { id: 2, status: 'Opened' }];

    setStatusClosed('1');

    expect(JSON.stringify).toHaveBeenCalledWith(expectedIssues);
  });

  test('no issue no changes', () => {
    const expectedIssues = [{ id: 1, status: 'Opened' }, { id: 2, status: 'Opened' }];

    setStatusClosed(3);

    expect(JSON.stringify).toHaveBeenCalledWith(expectedIssues);
  });

  test('no errors when id unspecified', () => {
    const expectedIssues = [{ id: 1, status: 'Opened' }, { id: 2, status: 'Opened' }];

    setStatusClosed();

    expect(JSON.stringify).toHaveBeenCalledWith(expectedIssues);
  });
});
