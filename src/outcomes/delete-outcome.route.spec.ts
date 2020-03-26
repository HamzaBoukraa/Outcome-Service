import * as request from 'superagent'

describe('When the endpoint DELETE /users/:username/learning-objects/:learningObjectID/outcomes/:outcomeID is invoked', () => {

    describe('and all of the parameters abide to the schema requirements', () => {

        describe('and the requester has a valid token', () => {

            describe('and the requester has permission to view the requested resource', () => {

                describe('and the specified username belongs to an existing user', () => {

                    describe('and the specified Learning Object ID belongs to an existing Learning Object', () => {

                        describe('and the specified Outcome ID belongs to an existing Outcome', () => {

                            it('should return HTTP status code 204', () => {

                            });

                        });

                        describe('and the specified Outcome ID does not belong to an existing Outcome', () => {

                            it('should return HTTP status code 404', () => {

                            });

                        });

                    });

                    describe('and the specified Learning Object ID does not belong to an existing Learning Object', () => {

                        it('should return HTTP status code 404', () => {

                        });

                    });

                });

                describe('and the specified username does not belong to an existing user', () => {

                    it('should return HTTP status code 404', () => {

                    });

                });

            });

            describe('and the requester does not have permission to view the requested resource', () => {

                describe('and the Learning Object has a status of unreleased', () => {

                    describe('and te requester is not the author of the Learning Object', () => {

                        it('should return HTTP status code 403', () => {

                        });

                    });

                });

                describe('and the Learning Object has a status of waiting', () => {

                    describe('and the requester is not an admin or editor', () => {

                        it('should return HTTP status code 403', () => {

                        });

                    });

                });

                describe('and the Learning Object has a status of review', () => {

                    describe('and the requester is not an admin or editor', () => {

                        it('should return HTTP status code 403', () => {

                        });

                    });

                });

                describe('and the Learning Object has a status of proofing', () => {
                    
                    describe('and the requester is not an admin or editor', () => {

                        it('should return HTTP status code 403', () => {

                        });

                    });

                });

            });

        });

        describe('and the requester does not have a valid token', () => {

            it('should return HTTP status code 401', () => {

            });

        });

    });

    describe('and all of the parameters do not abide to the schema requirements', () => {

        describe('and the username is invalid', () => {

            describe('and the username is less than 3 characters', () => {

                it('should return HTTP status code 400', async () => {

                    const username = 'un';

                    try {
                        const response = await request
                            .delete(`http://localhost:3000/users/${username}/learning-objects/:learningObjectID/outcomes/:outcomeID`)
                            .set('Accept', 'application/json')

                        // automatic failure if response is 200 series
                        expect(true).toBe(false);
                    } catch (error) {
                        expect(error.status).toBe(400);
                    }
                    
                });

            });

            describe('and the username is greater than 20 characters', () => {

                it('should return HTTP status code 400', async () => {

                    const username = 'thisusernameisverylong';

                    try {
                        const response = await request
                            .delete(`http://localhost:3000/users/${username}/learning-objects/:learningObjectID/outcomes/:outcomeID`)
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

});