import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';
export default function Computed(props) {
  useEffect(() => {
    nprogress.start();
  });
  useEffect(() => {
    nprogress.done();
  });
  return <div>{props.path === '/' ? <Redirect from="/" to="/home" /> : <Route {...props} />}</div>;
}
