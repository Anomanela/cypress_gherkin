class userVerified{
    elements = {
        userVer: (user) => cy.get ("#loginusername").type (user),
        
    }

    verified1(user) {
        this.elements.userVer(user).should('have.value', (user));
    }

    elements2 = {
        userPass: (passw) => cy.get ("#loginpassword").type (passw)

    }

    verified2(passw) {
        this.elements2.userPass(passw).should ('have.value', (passw));
    }

} 


module.exports = new userVerified();

