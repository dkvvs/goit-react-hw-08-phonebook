import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import SignIn from 'components/SignIn';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));

    setEmail('');
    setPassword('');
  };

  return (
    <>
      <SignIn
        onSubmit={handleSubmit}
        onChange={handleChange}
        email={email}
        password={password}
      />
    </>
  );
}
