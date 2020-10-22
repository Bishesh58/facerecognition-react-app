import React from 'react';

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            username: ''
        }
    }

    onNameChange = (e) => {
        this.setState({username: e.target.value})
     }

    onEmailChange = (e) => {
       this.setState({email: e.target.value})
    }

    onPasswordChange = (e) => {
       this.setState({password: e.target.value})
    }

    onSubmitSignin =()=>{
        fetch('https://frozen-temple-66405.herokuapp.com/register', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                username: this.state.username
            })
        })
        .then(response => response.json())
        .then(user =>{
            if(user.id){
                this.props.loadUser(user)
                this.props.onRouteChange('home');
            }
        })
    }


    render(){
       

        return (
            <div>
                <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                    <main className="pa4 black-80">
                        <div className="measure">
                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Register</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                                <input 
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="text" name="name"  
                                id="username"
                                onChange={this.onNameChange}
                                />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input 
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="email" 
                                name="email"  
                                id="email"
                                onChange={this.onEmailChange}
                                />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input 
                                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="password" 
                                name="password"  
                                id="password"
                                onChange={this.onPasswordChange}
                                />
                            </div>
                            
                            </fieldset>
                            <div className="">
                                <input
                                onClick={this.onSubmitSignin} 
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"
                                value="Register"
                                />
                                
                            </div>
                        </div>
                    </main>
                </article>
            </div>
        )
    }

  
}

export default Register;
