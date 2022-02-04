// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

// src/setupTests.js
import { server } from "src/mocks/server";

// Establish API mocking before all tests.
// 테스트 전, api mocking을 실행한다.
beforeAll(() => server.listen());

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.

//

afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
// 테스트가 끝난 후에, 서버를 종료한다.
afterAll(() => server.close());
