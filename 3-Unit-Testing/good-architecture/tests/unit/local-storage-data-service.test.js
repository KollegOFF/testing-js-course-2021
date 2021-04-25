import LocalStorageDataService from '../../src/local-storage-data-service';

describe('Local Storage Data Service', () => {
  test('dateteEntityById works correctly on non empty data', () => {
    // Arrange
    expect.assertions(2);
    const ds = new LocalStorageDataService('testEntity');

    const ID_1 = "060e3461-baa1-5c97-86f3-8983f85823f2";
    const ID_2 = "cb7de04c-7744-50e4-8a59-917efcd62196";
    const ID_3 = "cb7de04c-7744-50e4-8a59-919efcd63196";
    const fakeDataFirstCall = [
      {
        id: ID_1,
        description: "sdfsdf",
        severity: "Medium",
        assignedTo: "23r",
        status: "Open"
      },
      {
        id: ID_2,
        description: "sdfa",
        severity: "Medium",
        assignedTo: "3333",
        status: "Open"
      },
      {
        id: ID_3,
        description: "sdfdsf",
        severity: "Medium",
        assignedTo: "4567",
        status: "Open"
      }
    ];

    ds.loadEntities = jest.fn().mockReturnValue(fakeDataFirstCall);
    ds.saveEntities = jest.fn().mockReturnValue(true);

    // Act
    const result = ds.dateteEntityById(ID_2);

    // Assert
    expect(fakeDataFirstCall.length).toBe(2);
    expect(result).toBe(true);

  });

  test('dateteEntityById works correctly on non empty data (testing implementation)', () => {
    // Arrange
    //expect.assertions(2);
    const ds = new LocalStorageDataService('testEntity');

    const ID_1 = "060e3461-baa1-5c97-86f3-8983f85823f2";
    const ID_2 = "cb7de04c-7744-50e4-8a59-917efcd62196";
    const ID_3 = "cb7de04c-7744-50e4-8a59-919efcd63196";
    const fakeDataFirstCall = [
      {
        id: ID_1,
        description: "sdfsdf",
        severity: "Medium",
        assignedTo: "23r",
        status: "Open"
      },
      {
        id: ID_2,
        description: "sdfa",
        severity: "Medium",
        assignedTo: "3333",
        status: "Open"
      },
      {
        id: ID_3,
        description: "sdfdsf",
        severity: "Medium",
        assignedTo: "4567",
        status: "Open"
      }
    ];

    ds.loadEntities = jest.fn().mockReturnValue(fakeDataFirstCall);
    ds.saveEntities = jest.fn().mockReturnValue(true);

    // Act
    const result = ds.dateteEntityById(ID_2);

    // Assert
    expect(fakeDataFirstCall.length).toBe(2);
    expect(ds.saveEntities).toHaveBeenCalled();

  });
});