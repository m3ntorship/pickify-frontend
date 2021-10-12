import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  public render(): JSX.Element {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
