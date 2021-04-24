import { describe, test, jest, expect } from '@jest/globals';

import IssuesDataStorage from '../src/issues-data-storage';
import RestApiStorageDataService from '../src/rest-api-storage-data-service';

const ENDPOINT_URI = 'http://localhost:3000/issues';

class IssuesDataStorageTest extends IssuesDataStorage {
  async loadIssues() {
    this._issues = await this.dataService.loadEntities();
  }
};

describe('IssueDataStorage', () => {
  test('createIssue', async () => {
    // Arrange.
    const issuesDataStorage = new IssuesDataStorageTest(new RestApiStorageDataService(ENDPOINT_URI));
    await issuesDataStorage.loadIssues();

    const expectedIssue = { id: 1, status: 'Opened' };

    // Act.
    const result = await issuesDataStorage.createIssue({ id: 1, status: 'Opened' });

    // Assert.
    expect(result).toBe(true);
    expect(issuesDataStorage.issues).toContainEqual(expectedIssue);
  });

  test('changeIssueFieldById', async () => {
    // Arrange.
    const issuesDataStorage = new IssuesDataStorageTest(new RestApiStorageDataService(ENDPOINT_URI));
    await issuesDataStorage.loadIssues();

    const expectedIssue = { id: 2, status: 'Closed' };

    // Act.
    const result = await issuesDataStorage.changeIssueFieldById(2, 'status', 'Closed');

    // Assert.
    expect(result).toBe(true);
    expect(issuesDataStorage.issues).toContainEqual(expectedIssue);
  });

  test('dateteIssueById', async () => {
    // Arrange.
    const issuesDataStorage = new IssuesDataStorageTest(new RestApiStorageDataService(ENDPOINT_URI));
    await issuesDataStorage.loadIssues();

    const deletedIssue = issuesDataStorage.issues[issuesDataStorage.issues.length - 1];

    // Act.
    const result = await issuesDataStorage.dateteIssueById(deletedIssue.id);

    // Assert.
    expect(result).toBe(true);
    expect(issuesDataStorage.issues).not.toContainEqual(deletedIssue);
  });
});
