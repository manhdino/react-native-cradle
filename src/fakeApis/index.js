import {createServer} from 'miragejs';

export const setupServer = () => {
  if (window.server) {
    window.server.shutdown();
  }
  window.server = createServer({
    routes() {
      this.get('/api/account', () => {
        return {
          account: {
            username: 'Dinomanh',
            email: 'Manhnguyen@gmail.com',
          },
        };
      });

      this.get('/api/data', () => {
        return {
          data: [
            {
              id: 1,
              temp: 81,
              hum: 64,
              noice: 54,
              angle: 65,
              fan: true,
              music: true,
            },
            {
              id: 2,
              temp: 82,
              hum: 62,
              noice: 52,
              angle: 62,
              fan: false,
              music: false,
            },
          ],
        };
      });

      this.post('/api/data/updateFan', (schema, request) => {
        const id = JSON.parse(request.requestBody);
        console.log('id fan from api:', id);
        return {
          data: [
            {
              id: 1,
              temp: 81,
              hum: 64,
              noice: 54,
              angle: 65,
              fan: false,
              music: true,
            },
            {
              id: 2,
              temp: 82,
              hum: 62,
              noice: 52,
              angle: 62,
              fan: false,
              music: false,
            },
          ],
        };
      });

      this.post('/api/data/updateMusic', (schema, request) => {
        const id = JSON.parse(request.requestBody);
        console.log('id music from api:', id);
        return {
          data: [
            {
              id: 1,
              temp: 81,
              hum: 64,
              noice: 54,
              angle: 65,
              fan: false,
              music: true,
            },
            {
              id: 2,
              temp: 82,
              hum: 62,
              noice: 52,
              angle: 62,
              fan: false,
              music: false,
            },
          ],
        };
      });
    },
  });
};
