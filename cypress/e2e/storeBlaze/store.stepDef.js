import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import userVerified from "./otherPage/userVerified";



Given(/^john login user$/, () => {
    // Visit Link
	cy.visit ('https://www.demoblaze.com/')

    // click link text login
    cy.get ("[data-target='#logInModal']"). click()
    cy.get ("[onclick='logIn()']"). should('be.visible')
    cy.wait(1000)

    //fill username password
    // cy.get ("#loginusername").type ('wibowo.bullseye').should('have.value', 'wibowo.bullseye')
    // cy.get ("#loginpassword").type ('bullseye').should ('have.value', 'bullseye')
    userVerified.verified1('wibowo.bullseye');
    userVerified.verified2('bullseye');

    //click login button
    cy.get ("[onclick='logIn()']").click()

    //assert homescreen
    cy.get ("#nameofuser").should ('contain', 'wibowo.bullseye')
});
When(/^john logout user$/, () => {
	// John Logout user
    cy.get ("[onclick='logOut()']"). click()
});
Then(/^john sucessfully logout his user$/, () => {
	//john berhasil logout
    cy.get ("[data-target='#logInModal']").should('contain', 'Log in')
});


Given(/^Budi login user$/, () => {
	// Visit Link
	cy.visit ('https://www.demoblaze.com/')

    // click link text login
    cy.get ("[data-target='#logInModal']"). click()
    cy.get ("[onclick='logIn()']"). should('be.visible')
    cy.wait(1000)

    //fill username password
    // cy.get ("#loginusername").type ('wibowo.bullseye').should('have.value', 'wibowo.bullseye')
    // cy.get ("#loginpassword").type ('bullseye').should ('have.value', 'bullseye')
    userVerified.verified1('wibowo.bullseye');
    userVerified.verified2('bullseye');

    //click login button
    cy.get ("[onclick='logIn()']").click()

    //assert homescreen
    cy.get ("#nameofuser").should ('contain', 'wibowo.bullseye')
});


When(/^Budi choose 2 item and put in the cart$/, () => {
	// Budi pilih item yang pertama
    cy.get ('a.hrefch').contains ('Sony xperia z5').click()
    cy.wait(1000)
    
    // item yang pertama di masukan ke cart
    cy.get ('.btn-success').contains ('Add to cart').click ()
    cy.wait (1000)

    // Budi kembali ke menu home
    cy.get (".nav-link[href='index.html']").click()

    // Budi pilih item yang kedua
    cy.get ('a.hrefch').contains ('Sony vaio i5').click()
    cy.wait(1000)

    // item yang kedua di masukan ke cart
    cy.get ('.btn-success').contains ('Add to cart').click ()
    cy.wait (3000)

    // menuju menu cart
    cy.get ('#cartur').click()

    // item sudah masuk ke dalam cart
    cy.get('tbody#tbodyid').children('.success').children()
        .next('td').should('contain', 'Sony xperia z5')
    cy.get('tbody#tbodyid').children('.success').children()
        .next('td').should('contain', 'Sony vaio i5')
    cy.get('h3#totalp').should('contain', '1110')

});


Then(/^Budi sucessfully place the order$/, () => {
	// click place order
    cy.get ('.btn-success').contains ('Place Order').click ()
    cy.wait (3000)

    // fill formulir place order
    cy.get ('#name').type ('anom').should('have.value','anom')
    cy.wait(1000)
    cy.get ('#country').type ('indonesia').should('have.value','indonesia')
    cy.wait(1000)
    cy.get ('#city').type ('Depok').should('have.value','Depok')
    cy.wait(1000)
    cy.get ('#card').type ('845945634435345').should('have.value','845945634435345')
    cy.wait(1000)
    cy.get ('#month').type ('januari').should('have.value','januari')
    cy.wait(1000)
    cy.get ('#year').type ('2022').should('have.value','2022')
    cy.wait(1000)


    // click purcase
    cy.get ("[onclick='purchaseOrder()']").contains ('Purchase').click ()

    // assert purchase
    cy.get ('body > div.sweet-alert.showSweetAlert.visible > p').should('contain', 'Amount: 1110 USD')
    cy.get ('body > div.sweet-alert.showSweetAlert.visible > p').should('contain', 'Card Number: 845945634435345')
    cy.get ('body > div.sweet-alert.showSweetAlert.visible > p').should('contain', 'Name: anom')

        

});
