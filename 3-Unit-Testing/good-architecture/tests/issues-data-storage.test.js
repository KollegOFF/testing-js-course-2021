import { describe, test, jest, expect } from '@jest/globals';

import IssuesDataStorage from '../src/issues-data-storage';

describe('IssueDataStorage', () => {
  test('createIssue', () => {
    const issuesDataStorage = new IssuesDataStorage({
      loadEntities: jest.fn().mockReturnValue([]),
      addEntity: jest.fn().mockReturnValue(true),
    });
    const expectedIssue = { id: 1, status: 'Opened' };

    const result = issuesDataStorage.createIssue({ id: 1, status: 'Opened' });

    expect(result).toBe(true);
    expect(issuesDataStorage.issues).toContainEqual(expectedIssue);
  });

  test('changeIssueFieldById', () => {
    const issuesDataStorage = new IssuesDataStorage({
      loadEntities: jest.fn().mockReturnValue([{ id: 1, status: 'Opened' }]),
      changeEntity: jest.fn().mockReturnValue(true),
    });
    const expectedIssue = { id: 1, status: 'Closed' };

    const result = issuesDataStorage.changeIssueFieldById(1, 'status', 'Closed');

    expect(result).toBe(true);
    expect(issuesDataStorage.issues).toContainEqual(expectedIssue);
  });

  test('dateteIssueById', () => {
    const issuesDataStorage = new IssuesDataStorage({
      loadEntities: jest.fn().mockReturnValue([{ id: 1, status: 'Opened' }]),
      dateteEntityById: jest.fn().mockReturnValue(true),
    });

    const result = issuesDataStorage.dateteIssueById(1);

    expect(result).toBe(true);
    expect(issuesDataStorage.issues).toEqual([]);
  });
});
