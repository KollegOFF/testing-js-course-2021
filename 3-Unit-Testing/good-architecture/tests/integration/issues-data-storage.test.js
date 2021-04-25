import IssuesDataStorage from '../../src/issues-data-storage';
import RestApiStorageDataService from '../../src/rest-api-storage-data-service';
import { BACKEND_URL } from './config';

describe('Integration Tests for IssuesDataStorage', () => {
  const ID_1 = "060e3461-baa1-5c97-86f3-8983f85823f3";
  let issueToAdd;

  beforeEach(() => {
    issueToAdd = {
      id: ID_1,
      description: "sdfsdf",
      severity: "Medium",
      assignedTo: "23r",
      status: "Open"
    };

    const ds = new RestApiStorageDataService(BACKEND_URL);
    ds._makeRequest('POST', []);
  });


  const expectedIssues = [
    {
      id: ID_1,
      description: "sdfsdf",
      severity: "Medium",
      assignedTo: "23r",
      status: "Open"
    }
  ];

  test('Issue creates successfuly', async () => {
    // Arrange
    const ds = new RestApiStorageDataService(BACKEND_URL);
    const ids = new IssuesDataStorage(ds);
    await ids.init();

    // Act
    const result = await ids.createIssue(issueToAdd);

    // Assert
    expect(result).toBeTruthy();
  })
});