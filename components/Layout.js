import Head from 'next/head';

// eslint-disable-next-line react/display-name
// export default ({ children }) => (
//   <div>
//     <Head>
//       <meta name="viewport" content="width=device-width, initial-scale=1" />
//       <meta charSet="utf-8" />
//       <title>Next-Antd-Scafflod</title>
//       <link rel="icon" href="/favicon.ico" />
//       <link rel="stylesheet" href="" />
//     </Head>
//     <style jsx global>{`
//       html,
//       body {
//         padding: 0;
//         margin: 0;
//         font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
//           Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
//       }

//       * {
//         box-sizing: border-box;
//       }
//     `}</style>
//     {children}
//   </div>
// );
// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>Next-Antd-Scafflod</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="" />
      </Head>
      <style jsx global>{`
        html,
        body {
          background: rgba(249, 249, 249, 1);
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
      {children}
    </div>
  );
}
