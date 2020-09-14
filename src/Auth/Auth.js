class Auth {
    constructor() {
      this.authenticated = false;
    }
  
    onAuthentication(){
      this.authenticated=true
      sessionStorage.setItem("login",true)
    }
  
  
    logout() {
      this.authenticated = false;
       
    }
  
    getLoginState(){
      return this.authenticated
    }
   
  }
  
  export default new Auth();
  
  
  
   