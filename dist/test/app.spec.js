'use strict';

var app = require('../app');
var mocha = require('mocha');
var expect = require('chai').expect;

describe('Here I describe what the test is', function () {

        it('Should tell me if the functionality works as expected', function () {

                //Setup (t.ex. låtsar variabler för att få ett resultat)

                //Simulate (Har skickar vi med vår setup och simulerar det som ska köras.)

                //Assert

                expect(app).to.exist;
        });
});