import {test, expect} from '@playwright/test'

test.describe('HomePageTest' , ()=>{

    test('@Smoke HomePageTitleTest' ,  async ({page})=>{

        console.log("This is HomePageTitleTest")
           
    })

    test('HomePageHeadingTest' ,  async ({page})=>{

        console.log("This is HomePageHeadingTest")
           
    }) 

})

test.describe('LoginTest' , ()=>{

test('ValidLoginTest @Smoke' ,  async ({page})=>{

 console.log("This is ValidLoginTest")

})

test('@Regression InValidLoginTest' ,  async ({page})=>{

 console.log("This is InValidLoginTest")

})

})