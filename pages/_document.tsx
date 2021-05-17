import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  public render(): JSX.Element {
    return (
      <Html>
        <Head />
        <body className="font-sans">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
