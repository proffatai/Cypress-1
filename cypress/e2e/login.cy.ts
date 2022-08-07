// let's import the class
import{LoginPage} from '../e2e/classDeclaration.cy'

let obj = new LoginPage() //creating an object of the class
it('login test', ()=>{

    let website='https://trytestingthis.netlify.app/';
    let username='test';
    let password ='test';

   obj.navigate(website);
   obj.enterUsername(username);
   obj.enterPassword(password);
   obj.clickSubmit();
   obj.contact();
   obj.openSourceCode();
})