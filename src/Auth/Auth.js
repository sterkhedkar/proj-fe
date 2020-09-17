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
      sessionStorage.removeItem('login');
       
    }
  
    getLoginState(){
      return this.authenticated
    }
   
  }
  
  export default new Auth();
  
  
  
   