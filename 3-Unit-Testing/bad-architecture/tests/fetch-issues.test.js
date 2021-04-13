//import { beforeAll, jest, expect } from '@jest/globals';
import { fetchIssues } from '../src/main';

describe('fetchIssues function:', () => {
  test('DOM renders correctly for non empty data', () => {

    expect.assertions(2);

    //1. "Загрузить" данные

    const ID_1 = "060e3461-baa1-5c97-86f3-8983f85823f2";
    const ID_2 = "cb7de04c-7744-50e4-8a59-917efcd62196";
    const fakeData = [
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
      }
    ];

    JSON.parse = jest.fn().mockReturnValue(fakeData);

    fetchIssues();

    //3. Проверить записанную разметку в "заглушку" элемента
    expect(document.getElementById.mock.results[0].value.innerHTML).toMatch(`<h6>Issue ID: ${ID_1}</h6>`)
    expect(document.getElementById.mock.results[0].value.innerHTML).toMatch(`<h6>Issue ID: ${ID_2}</h6>`)
  });
})