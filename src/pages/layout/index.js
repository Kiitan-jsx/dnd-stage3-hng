import { useEffect } from 'react'
import {useNavigate } from 'react-router-dom';
import { LOGIN } from '../../lib/routes';

export default function Layout() {
  const navigate = useNavigate();

  useEffect(() => {
      navigate(LOGIN);
  }, []);

  return (
    <div></div>
  )
}