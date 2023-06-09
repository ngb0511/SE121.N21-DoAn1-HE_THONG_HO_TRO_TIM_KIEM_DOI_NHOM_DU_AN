//Login page
import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import Button from '../../components/Button';
import * as accountServices from '../../apiServices/accountServices';
import * as userServices from '../../apiServices/userServices';
import { useState } from 'react';
import Successful from '../../components/PopUp/Successful';
import Error from '../../components/PopUp/Error';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);
var user = { userName: 'admin', password: '12345' };
var account = {
  accountID: '0',
  email: '',
  password: '',
  permission: '',
  userID: '',
  verificationCode: '',
  isVerified: '',
};
var userEx = {
  userID: '',
  surname: '',
  forename: '',
  gender: '',
  dateOfBirth: '',
  email: '',
  phoneNumber: '',
  idNumber: '',
  address: '',
  job: '',
  degree: '',
  experience: '',
  description: '',
  avatar: '',
  majorID: '',
};
function Login() {
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [isError, setIsError] = useState(false);
  const [text, setText] = useState('');
  const navigate = useNavigate();
  const toggleSuccessful = () => {
    setIsSuccessful(!isSuccessful);
  };

  const toggleError = () => {
    setIsError(!isError);
  };
  function handleChange(event) {
    //document.getElementById('form').action = 'Home';

    event.preventDefault();
    if (document.getElementById('password').value === '' || document.getElementById('username').value === '') {
      setText('');
      setIsError(!isError);
      //alert('Vui lòng nhập đầy đủ tài khoản, mật khẩu');
      return;
    }
    const fetchApi = async () => {
      console.log(document.getElementById('username').value);
      const userResult = await accountServices.checkExistedAccount(document.getElementById('username').value);

      //setUser(userResult);
      if (userResult[0].checkExist === 0) {
        setText('Tài khoản không tồn tại');
        setIsError(!isError);
        //alert('Tai khoan co ton tai deo dau');
      } else {
        account.email = document.getElementById('username').value;
        account.password = document.getElementById('password').value;

        const passResult = await accountServices.checkAccount(account);
        console.log(passResult);
        if (passResult === false) {
          alert('Mật khẩu không chính xác');
        } else {
          sessionStorage.setItem('isLogIn', 1);
          const accountLogin = await accountServices.getAccountSortedByEmail(document.getElementById('username').value);
          console.log(accountLogin[0]);
          if (accountLogin[0].permission === 'admin') {
            //alert('chuan cmnr');
            const userLogin = await userServices.getUserDetailByID(accountLogin[0].userID);
            //console.log(userLogin[0]);
            userEx = userLogin[0];
            //console.log(userEx);
            sessionStorage.setItem('admin', 1);
            sessionStorage.setItem('userLogin', JSON.stringify(userEx));
            alert('Đăng nhập thành công');
            navigate('/Admin');
          } else {
            const userLogin = await userServices.getUserDetailByID(accountLogin[0].userID);
            console.log(userLogin);
            userEx = userLogin[0];
            sessionStorage.setItem('admin', 0);
            console.log(userEx);
            sessionStorage.setItem('userLogin', JSON.stringify(userEx));
            //var newOject = JSON.parse(sessionStorage.getItem('userLogin'));
            alert('Đăng nhập thành công');
            //console.log(newOject);
            navigate('/Home');
          }

          /*if (document.getElementById('username').value === 'admin') {
            
          } else {

          }*/
        }
      }
    };
    fetchApi();

    /*const username = document.getElementById('username');
    const password = document.getElementById('password');
    if (username.value === 'admin' && password.value === '1') {
      document.getElementById('form').action = 'Home';
    }*/
    /*   user.userName = document.getElementById('username').value;
    user.password = document.getElementById('password').value;*/

    /*const fetchApi = async () => {
      console.log(document.getElementById('username').value);
      const userResult = await accountServices.checkExistedAccount(document.getElementById('username').value);

      //setUser(userResult);
      if (userResult[0].checkExist === 1) {
        user.userName = document.getElementById('username').value;
        user.password = document.getElementById('password').value;
        account.email = document.getElementById('username').value;
        account.password = document.getElementById('password').value;
        const passResult = await accountServices.checkAccount(account);
        if (passResult === true) {
          const email = await accountServices.getAccountSortedByEmail(user.userName);
          const test = await userServices.getUserByID(email[0].userID);
          userEx = test[0];
          console.log(email[0].user);
          user.userName = email[0].user;
          account = email[0];
          console.log(account);
          sessionStorage.setItem('isLogIn', 1);
          sessionStorage.setItem('user', JSON.stringify(user));
          sessionStorage.setItem('account', JSON.stringify(account));
          sessionStorage.setItem('userEx', JSON.stringify(userEx));
          navigate('/Home');
        } else {
          setIsSuccessful(!isSuccessful);
        }
      } else {
        console.log('Tài khoản eo tồn tại');
      }
    };
    fetchApi();*/
  }
  /*return (
    <div className={cx('wrapper')}>
      <div className={cx('text-cointainer')}>
        <div className={cx('text')}>
          <h1>Chào mừng tới website C i t r o s</h1>
          <h3>Website hỗ trợ tìm kiếm dự án nhanh chóng </h3>
          <br></br>
          <p>
            彼女は固まった体をほぐすように目を閉じ、ユフィの情熱的なキスを受け入れた。
            そして、情熱的なキスがピタリと止まった。 「アニス」 その優しい声が僕の名前を呼んだ。 「もう我慢できない」
            ユフィの息遣いは、私を火傷するほど熱く、情熱的な欲望を運んでいた。
          </p>
        </div>
      </div>
      <div className={cx('form-cointainer')}>
        <form className={cx('form')} id="form">
          <h1>Đăng nhập</h1>
          <br></br>
          <label for="fname">Tên đăng nhập:</label>
          <br></br>
          <input type="text" id="username" className={cx('input')}></input>
          <br></br>
          <label for="fname">Mật khẩu:</label>
          <br></br>
          <input type="password" id="password" className={cx('input')}></input>
          <div className={cx('register')}>
            Chưa có tài khoản, đăng kí <a href="Register">tại đây</a>
          </div>
          <Button id="btn" login onClick={handleChange}>
            Đăng nhập
          </Button>
        </form>
      </div>
      {isSuccessful && <Successful handleClose={toggleSuccessful} />}
    </div>
  );*/

  function ShowPass() {
    if (document.getElementById('showPass').checked) {
      document.getElementById('password').type = 'text';
    } else {
      document.getElementById('password').type = 'password';
    }
  }
  return (
    <div className={cx('wrapper')}>
      <form>
        <h2>Login to Work</h2>
        <br></br>
        <label>Email:</label>
        <br></br>
        <input id="username"></input>
        <br></br>
        <label>Password:</label>
        <br></br>
        <input id="password" type="password"></input>
        <br></br>
        <div>
          <input id="showPass" type="checkbox" onClick={ShowPass}></input> &nbsp; <p>Show password</p>
        </div>

        <br></br>
        <button onClick={handleChange}>Login</button>
      </form>
      <br></br>

      <div className={cx('signup')}>
        <p>
          <hr></hr>Don't have an account? <hr></hr>
        </p>
        <button>
          <a href="Register">Sign Up</a>
        </button>
      </div>
      {isSuccessful && <Successful handleClose={toggleSuccessful} />}
      {isError && <Error handleClose={toggleError} text={text} />}
    </div>
  );
}

export default Login;
