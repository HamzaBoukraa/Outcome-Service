import * as request from 'superagent';

describe('When the endpoint GET /users/:username/learning-objects/:learningObjectID/outcomesr is invoked', () => {

  describe('and the specified username abides to the schema requirements', () => {

    describe('and the requester has the privilege of viewing the requested resource', () => {

      describe('and the specified username belongs to an existing user', () => {

        describe('and the specified Learning Object ID belongs to an existing Learning Object', () => {

          it('should return an HTTP status code of 200 and an array of outcomes', async () => {

            const username = 'skaza';
            const learningObjectID = '5e725dfcaae30c0012c70e41';

            const response = await request
              .get(`http://localhost:3000/users/${username}/learning-objects/${learningObjectID}/outcomes`)
              .set('Accept', 'application/json')

            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty('length');
            expect(response.body[0]).toHaveProperty('mappings');
            expect(response.body[0]).toHaveProperty('bloom');
            expect(response.body[0]).toHaveProperty('verb');
            expect(response.body[0]).toHaveProperty('text');

          });

        });

        describe('the specified Learning Object ID does not belong to an existing Learning Object', () => {

          it('should return an HTTP status code of 404', async () => {

            const username = 'nvisal1';
            const learningObjectID = 'doesnotexist'

            try {
              const response = await request
                .get(`http://localhost:3000/users/${username}/learning-objects/${learningObjectID}/outcomes`)
                .set('Accept', 'application/json')
    
              // automatic failure if response is 200 series
              expect(true).toBe(false);
            } catch (error) {
              expect(error.status).toBe(404);
            }

          });

        });

      });

      describe('and the specified username does not belong to an existing user', () => {

        it('should return an HTTP status code of 404', async () => {
          const username = 'doesnotexist';
          const learningObjectID = '5e725dfcaae30c0012c70e41'

          try {
            const response = await request
              .get(`http://localhost:3000/users/${username}/learning-objects/${learningObjectID}/outcomes`)
              .set('Accept', 'application/json')
  
            // automatic failure if response is 200 series
            expect(true).toBe(false);
          } catch (error) {
            expect(error.status).toBe(404);
          }
        });

      });

    });

    describe('and the requester does not have privilege to view the requested resource', () => {

      describe('and the specified Learning Object has a status of unreleased', () => {

        describe('and the requester is not the author', () => {

          it('should return an HTTP status code of 401', () => {

          });

        });

      });

      describe('and the specified Learning Object has a status of waiting', () => {

        describe('and the requester is not an admin or editor', () => {

          it('should return an HTTP status code of 401', () => {

          });

        });

      });

      describe('and the specified Learning Object has a status of review', () => {

        describe('and the requester is not an admin or editor', () => {

          it('should return an HTTP status code of 401', () => {

          });

        });

      });

      describe('and the specified Learning Object has a status of proofing', () => {

        describe('and the requester is not an admin or editor', () => {

          it('should return an HTTP status code of 401', () => {

          });

        });

      });

    });

  });

  describe('and the specified username does not abide to the schema requirements', () => {

    describe('and the specified username is greater than 20 characters', () => {

      it('should return an HTTP status code of 400', async () => {

        const username = 'thisusernameisverylong';

        try {
          const response = await request
            .get(`http://localhost:3000/users/${username}/learning-objects/learningObjectID/outcomes`)
            .set('Accept', 'application/json')

          // automatic failure if response is 200 series
          expect(true).toBe(false);
        } catch (error) {
          expect(error.status).toBe(400);
        }

      });

    })
    
    describe('and the specified username is less than 3 characters', () => {

      it('should return an HTTP status code of 400', async () => {

        const username = 'un';

        try {
          const response = await request
            .get(`http://localhost:3000/users/${username}/learning-objects/learningObjectID/outcomes`)
            .set('Accept', 'application/json')

          // automatic failure if response is 200 series
          expect(true).toBe(false);
        } catch (error) {
          expect(error.status).toBe(400);
        }
      
      });
      
    });

  });

});
