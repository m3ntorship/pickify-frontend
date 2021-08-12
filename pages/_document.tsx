import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  public render(): JSX.Element {
    return (
      <Html>
        <Head />
        <body className="font-sans overflow-y-scroll scrollbar scrollbar-thumb-primary-shd3 scrollbar-track-white-DEFAULT scrollbar-width-2 bg-grey-bg2">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
