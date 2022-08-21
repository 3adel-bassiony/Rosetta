import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps, locale: ctx?.locale || 'en' };
    }

    // ----------------------------------------------------------------------------------------------------
    // Main Component Body UI
    // ----------------------------------------------------------------------------------------------------
    render(): JSX.Element {
        return (
            <Html dir={this.props.locale === 'ar' ? 'rtl' : 'ltr'} lang={this.props.locale}>
                <Head>
                    <title>Rosetta</title>
                </Head>
                <body className="bg-slate-100 dark:bg-slate-900">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
