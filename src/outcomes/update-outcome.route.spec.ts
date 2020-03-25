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

                it('should return HTTP status code 400', () => {
                    
                });

            });

            describe('and the bloom is undefined', () => {

                it('should return HTTP status code 400', () => {
                    
                });

            });

            describe('and the bloom is empty', () => {

                it('should return HTTP status code 400', () => {
                    
                });

            });

            describe('and the bloom is not a string', () => {

                it('should return HTTP status code 400', () => {
                    
                });

            });

            describe('and the bloom is not one of [remember & understand, apply & analyze, evaluate & synthesize]', () => {

                it('should return HTTP status code 400', () => {
                    
                });

            });

        });

        describe('and the text is invalid', () => {

            describe('and the text is null', () => {

                it('should return HTTP status code 400', () => {

                });

            });

            describe('and the text is undefined', () => {

                it('should return HTTP status code 400', () => {

                });

            });

            describe('and the text is empty', () => {

                it('should return HTTP status code 400', () => {

                });
                
            });

            describe('and the text is not a string', () => {

                it('should return HTTP status code 400', () => {

                });

            });

            describe('and the text is greater than 1000 characters', () => {

                it('should return HTTP status code 400', () => {

                });

            });

        });

        describe('and the verb is invalid', () => {

            describe('and the verb is null', () => {

                it('should return HTTP status code 400', () => {

                });

            });

            describe('and the verb is undefined', () => {

                it('should return HTTP status code 400', () => {

                });

            });

            describe('and the verb is empty', () => {

                it('should return HTTP status code 400', () => {

                });
                
            });

            describe('and the verb is not a string', () => {

                it('should return HTTP status code 400', () => {

                });

            });

        });

        describe('and the username is invalid', () => {

            describe('and the username is less than 3 characters', () => {

                it('should return HTTP status code 400', () => {
                    
                });

            });

            describe('and the username is greater than 20 characters', () => {

                it('should return HTTP status code 400', () => {
                    
                });

            });

        });

    });

});