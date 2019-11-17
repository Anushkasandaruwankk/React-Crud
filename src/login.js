import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Login extends Component{
    render() {
        return (
            <div>
                <table>
                    <tr>
                        <td colspan="2">
                            <h2>Login</h2>
                        </td>
                    </tr>
                    <tr>
                        <td>User Name</td>
                        <td><input type='text' /></td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td><input type='password' /></td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <button>Submit</button>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Login;
//jogff