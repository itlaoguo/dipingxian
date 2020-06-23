import Router from 'next/router';
import 'isomorphic-fetch';
export default function Details(props) {
  console.log(props, 'query');
  return (
    <div className="main">
      <div></div>
    </div>
  );
}
Details.getInitialProps = async ({ query }) => {
  return { query };
};
