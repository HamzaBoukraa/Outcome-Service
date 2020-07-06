import * as request from 'superagent';

describe('When the endpoint GET /outcomes/stats is invoked', () => {
    it('should return HTTP status code 200', async () => {
        try {
            const response = await request
                .delete(`http://localhost:3000/outcomes/stats`)
                .set('Accept', 'application/json')
        } catch (error) {
            expect(error.status).toBe(200);
        }
    });
});