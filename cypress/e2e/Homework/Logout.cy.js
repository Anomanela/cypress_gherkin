describe ('Skenario logout Blaze app',() => {
    it('Berhasil Logout',() => {
        cy.visit('https://www.demoblaze.com/index.html')

        // click link text login
        cy.get ("[data-target='#logInModal']"). click()
        cy.get ("[onclick='logIn()']"). should('be.visible')
        cy.wait(1000)

        //fill username password
        cy.get ("#loginusername").type ('wibowo.bullseye').should('have.value', 'wibowo.bullseye')
        cy.get ("#loginpassword").type ('bullseye').should ('have.value', 'bullseye')

        //click login button
        cy.get ("[onclick='logIn()']").click()

        //assert homescreen
        cy.get ("#nameofuser").should ('contain', 'wibowo.bullseye')
    

        //Logout user
        cy.get ("[onclick='logOut()']"). click()


        //assert berhasil logout
        cy.get ("[data-target='#logInModal']").should('contain', 'Log in')

    })
})