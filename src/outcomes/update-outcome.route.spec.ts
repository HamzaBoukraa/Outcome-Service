import * as request from 'superagent'

describe('When the endpoint PATCH /users/:username/learning-objects/:learningObjectID/outcomes/:outcomeID is invoked', () => {

    describe('and all of the parameters abide to the schema requirements', () => {

        describe('and the requester has a valid token', () => {

            describe('and the requester has permission to view the requested resource', () => {

                describe('and the specified username belongs to an existing user', () => {

                    describe('and the specified Learning Object ID belongs to an existing Learning Object', () => {

                        describe('and the specified Outcome ID belongs to an existing Outcome', () => {

                            describe('and the requested update will not result in a duplicate resource', () => {

                                it('should return HTTP status code 204', () => {

                                });

                            });

                            describe('and the requested update will result in a duplicate resource', () => {

                                it('should return HTTP status code 409', () => {

                                });
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

    describe('and the parameters do not abide to the schema requirements', () => {

        describe('and the bloom is invlaid', () => {

            describe('and the bloom is null', () => {

                it('should return HTTP status code 400', async () => {

                    const body = {
                        bloom: null,
                        text: 'string',
                        verb: 'string',
                    }

                    try {
                        const response = await request
                            .patch(`http://localhost:3000/users/username/learning-objects/learningObjectID/outcomes/outcomeID`)
                            .send(body)
                            .set('Accept', 'application/json')
                            .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhOTU4MzQwMTQwNWNiMDUzMjcyY2VkMSIsInVzZXJuYW1lIjoibnZpc2FsMSIsIm5hbWUiOiJuaWNrIHZpc2FsbGkiLCJlbWFpbCI6Im52aXNhbDFAc3R1ZGVudHMudG93c29uLmVkdSIsIm9yZ2FuaXphdGlvbiI6InRvd3NvbiB1bml2ZXJzaXR5IiwiZW1haWxWZXJpZmllZCI6dHJ1ZSwiYWNjZXNzR3JvdXBzIjpbImFkbWluIiwiIl0sImlhdCI6MTU4NTE1NDEzNSwiZXhwIjoxNTg1MjQwNTM1LCJhdWQiOiJudmlzYWwxIiwiaXNzIjoiVEhJU19JU19BTl9JU1NVRVIifQ.dx07cX7wX0qP0-LSj-Pyq50ta67F26RPStWSoRhqqms')

                        // automatic failure if response is 200 series
                        expect(true).toBe(false);
                    } catch (error) {
                        expect(error.status).toBe(400);
                    }
                    
                });

            });

            describe('and the bloom is undefined', () => {

                it('should return HTTP status code 400', async () => {

                    const body = {
                        bloom: undefined,
                        text: 'string',
                        verb: 'string',
                    }

                    try {
                        const response = await request
                            .patch(`http://localhost:3000/users/:username/learning-objects/:learningObjectID/outcomes/:outcomeID`)
                            .send(body)
                            .set('Accept', 'application/json')
                            .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhOTU4MzQwMTQwNWNiMDUzMjcyY2VkMSIsInVzZXJuYW1lIjoibnZpc2FsMSIsIm5hbWUiOiJuaWNrIHZpc2FsbGkiLCJlbWFpbCI6Im52aXNhbDFAc3R1ZGVudHMudG93c29uLmVkdSIsIm9yZ2FuaXphdGlvbiI6InRvd3NvbiB1bml2ZXJzaXR5IiwiZW1haWxWZXJpZmllZCI6dHJ1ZSwiYWNjZXNzR3JvdXBzIjpbImFkbWluIiwiIl0sImlhdCI6MTU4NTE1NDEzNSwiZXhwIjoxNTg1MjQwNTM1LCJhdWQiOiJudmlzYWwxIiwiaXNzIjoiVEhJU19JU19BTl9JU1NVRVIifQ.dx07cX7wX0qP0-LSj-Pyq50ta67F26RPStWSoRhqqms')

                        // automatic failure if response is 200 series
                        expect(true).toBe(false);
                    } catch (error) {

                        console.log(error);
                        expect(error.status).toBe(400);
                    }
                    
                });

            });

            describe('and the bloom is empty', () => {

                it('should return HTTP status code 400', async () => {

                    const body = {
                        bloom: '',
                        text: 'string',
                        verb: 'string',
                    }

                    try {
                        const response = await request
                            .patch(`http://localhost:3000/users/:username/learning-objects/:learningObjectID/outcomes/:outcomeID`)
                            .send(body)
                            .set('Accept', 'application/json')

                        // automatic failure if response is 200 series
                        expect(true).toBe(false);
                    } catch (error) {
                        expect(error.status).toBe(400);
                    }
                    
                });

            });

            describe('and the bloom is not a string', () => {

                it('should return HTTP status code 400', async () => {

                    const body = {
                        bloom: 123,
                        text: 'string',
                        verb: 'string',
                    }

                    try {
                        const response = await request
                            .patch(`http://localhost:3000/users/:username/learning-objects/:learningObjectID/outcomes/:outcomeID`)
                            .send(body)
                            .set('Accept', 'application/json')

                        // automatic failure if response is 200 series
                        expect(true).toBe(false);
                    } catch (error) {
                        expect(error.status).toBe(400);
                    }
                    
                });

            });

            describe('and the bloom is not one of [remember & understand, apply & analyze, evaluate & synthesize]', () => {

                it('should return HTTP status code 400', async () => {

                    const body = {
                        bloom: 'invalid bloom',
                        text: 'string',
                        verb: 'string',
                    }

                    try {
                        const response = await request
                            .patch(`http://localhost:3000/users/:username/learning-objects/:learningObjectID/outcomes/:outcomeID`)
                            .send(body)
                            .set('Accept', 'application/json')

                        // automatic failure if response is 200 series
                        expect(true).toBe(false);
                    } catch (error) {
                        expect(error.status).toBe(400);
                    }
                    
                });

            });

        });

        describe('and the text is invalid', () => {

            describe('and the text is null', () => {

                it('should return HTTP status code 400', async () => {

                    const body = {
                        bloom: 'string',
                        text: null,
                        verb: 'string',
                    }

                    try {
                        const response = await request
                            .patch(`http://localhost:3000/users/:username/learning-objects/:learningObjectID/outcomes/:outcomeID`)
                            .send(body)
                            .set('Accept', 'application/json')

                        // automatic failure if response is 200 series
                        expect(true).toBe(false);
                    } catch (error) {
                        expect(error.status).toBe(400);
                    }

                });

            });

            describe('and the text is undefined', () => {

                it('should return HTTP status code 400', async () => {

                    const body = {
                        bloom: 'string',
                        text: undefined,
                        verb: 'string',
                    }

                    try {
                        const response = await request
                            .patch(`http://localhost:3000/users/:username/learning-objects/:learningObjectID/outcomes/:outcomeID`)
                            .send(body)
                            .set('Accept', 'application/json')

                        // automatic failure if response is 200 series
                        expect(true).toBe(false);
                    } catch (error) {
                        expect(error.status).toBe(400);
                    }

                });

            });

            describe('and the text is empty', () => {

                it('should return HTTP status code 400', async () => {

                    const body = {
                        bloom: 'string',
                        text: '',
                        verb: 'string',
                    }

                    try {
                        const response = await request
                            .patch(`http://localhost:3000/users/:username/learning-objects/:learningObjectID/outcomes/:outcomeID`)
                            .send(body)
                            .set('Accept', 'application/json')

                        // automatic failure if response is 200 series
                        expect(true).toBe(false);
                    } catch (error) {
                        expect(error.status).toBe(400);
                    }

                });
                
            });

            describe('and the text is not a string', () => {

                it('should return HTTP status code 400', async () => {

                    const body = {
                        bloom: 'string',
                        text: 123,
                        verb: 'string',
                    }

                    try {
                        const response = await request
                            .patch(`http://localhost:3000/users/:username/learning-objects/:learningObjectID/outcomes/:outcomeID`)
                            .send(body)
                            .set('Accept', 'application/json')

                        // automatic failure if response is 200 series
                        expect(true).toBe(false);
                    } catch (error) {
                        expect(error.status).toBe(400);
                    }

                });

            });

            describe('and the text is greater than 1000 characters', () => {

                it('should return HTTP status code 400', async () => {

                    const body = {
                        bloom: 'string',
                        text: 'BNH7Rh3xybPSfT5yNxPCCoTC1xC3E2Iai6PjtnNsrGK6ZjoMl40jOppurbJ2lehuecS6YMErhLRjirKnlnaSJcCYS3KDlDj6AMUgwvcZyG2LFhaeljSQPIci3kJWp5l1Duopf5WK8b501LZzhvqYLzjYGoOf5p1FG7krZfSbTALdoweDhofKsGIsdasmjva2UtzLLPnly4MBX8LTWqVhzSU1f3xLiCdG2ltizuidhqxbD9aa59bxFAX8zWYcbZsvFsv2z4xNuXZd916R7JIJimiBtqwZdjV6ibgl8ZonHdJeCq0FGNbclRMwbFRWFkBitqRmwyRmlKFw6yxjHWv5qoJUbONaxnjuKh7XEq0qmqGXECXUoVlu6AqGiROfqImG1yo0S8rZNy0XN1Dgqm1IHFYXopUh7NYsKMOAOOKJlieSaoNrtZ5ttENJwHN3IX3lnAF3jyL3FBYc5C6nOfdlSd5RXWrY7yxftLSKZA1RMYzpVcFVVTKpbRCf7nKE9YeItTu2zABLXxg6LezJFWP0eEqQs8lCqmnchLomJkwZr1y00BnzqBFA6hLKWuwx08O8fP3xQxd7Lh7PDP7OropwLhcwYPPBDcbPDN0ItCJr5HrzTH9M0bHGWs6qgq0m5qEQ7Vp2dAKcj91s4axvTcCwtOKDwBVPBcY0xyAxD9rTWlRAPvWAMIpSNhGknV1OUkhjPac0qjfFAhXPJrFNQbWPqPNt93ZamQJIzfxPocr29Rtahj36naB6CJCjZg7odTol1s7P5VRi4PQos9KBoFrL7x46BfuvEIzuXrLf2FTKU2RPXnKE2l9NDaFtyDnSeSSeH91l3aSBx5pXzJH5oUVHrfeelZ95SdCC3Dtmtzd2XynglHBnlD7wTqQpNMhBFy5VMILANne8zpQu2sBdsqrnWfJE7y5iQIfVHpMASAvNmVJlFDac4JQZWmGUW7dTPkN6pj9Zr0Num2OfnFya3KysUgsAK3Sp1dBdbRaXg13LYPY',
                        verb: 'string',
                    }

                    try {
                        const response = await request
                            .patch(`http://localhost:3000/users/:username/learning-objects/:learningObjectID/outcomes/:outcomeID`)
                            .send(body)
                            .set('Accept', 'application/json')

                        // automatic failure if response is 200 series
                        expect(true).toBe(false);
                    } catch (error) {
                        expect(error.status).toBe(400);
                    }

                });

            });

        });

        describe('and the verb is invalid', () => {

            describe('and the verb is null', () => {

                it('should return HTTP status code 400', async () => {

                    const body = {
                        bloom: 'string',
                        text: 'string',
                        verb: null,
                    }

                    try {
                        const response = await request
                            .patch(`http://localhost:3000/users/:username/learning-objects/:learningObjectID/outcomes/:outcomeID`)
                            .send(body)
                            .set('Accept', 'application/json')

                        // automatic failure if response is 200 series
                        expect(true).toBe(false);
                    } catch (error) {
                        expect(error.status).toBe(400);
                    }

                });

            });

            describe('and the verb is undefined', () => {

                it('should return HTTP status code 400', async () => {

                    const body = {
                        bloom: 'string',
                        text: 'string',
                        verb: undefined,
                    }

                    try {
                        const response = await request
                            .patch(`http://localhost:3000/users/:username/learning-objects/:learningObjectID/outcomes/:outcomeID`)
                            .send(body)
                            .set('Accept', 'application/json')

                        // automatic failure if response is 200 series
                        expect(true).toBe(false);
                    } catch (error) {
                        expect(error.status).toBe(400);
                    }

                });

            });

            describe('and the verb is empty', () => {

                it('should return HTTP status code 400', async () => {

                    const body = {
                        bloom: 'string',
                        text: 'string',
                        verb: '',
                    }

                    try {
                        const response = await request
                            .patch(`http://localhost:3000/users/:username/learning-objects/:learningObjectID/outcomes/:outcomeID`)
                            .send(body)
                            .set('Accept', 'application/json')

                        // automatic failure if response is 200 series
                        expect(true).toBe(false);
                    } catch (error) {
                        expect(error.status).toBe(400);
                    }

                });
                
            });

            describe('and the verb is not a string', () => {

                it('should return HTTP status code 400', async () => {

                    const body = {
                        bloom: 'string',
                        text: 'string',
                        verb: 123,
                    }

                    try {
                        const response = await request
                            .patch(`http://localhost:3000/users/:username/learning-objects/:learningObjectID/outcomes/:outcomeID`)
                            .send(body)
                            .set('Accept', 'application/json')

                        // automatic failure if response is 200 series
                        expect(true).toBe(false);
                    } catch (error) {
                        expect(error.status).toBe(400);
                    }

                });

            });

        });

        describe('and the username is invalid', () => {

            describe('and the username is less than 3 characters', () => {

                it('should return HTTP status code 400', async () => {

                    const username = 'un';

                    try {
                        const response = await request
                            .patch(`http://localhost:3000/users/${username}/learning-objects/:learningObjectID/outcomes/:outcomeID`)
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
                            .patch(`http://localhost:3000/users/${username}/learning-objects/:learningObjectID/outcomes/:outcomeID`)
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