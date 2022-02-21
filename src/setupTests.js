//import { server } from './mocks/server';
import '@testing-library/jest-dom';
require('jest-fetch-mock').enableMocks();

// beforeAll(() => server.listen(
//     {onUnhandledRequest(req) {
//         console.error(
//             'Found an unhandled %s request to %s',
//             req.method,
//             req.url.href,
//           )
//     }}
// ));
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());
