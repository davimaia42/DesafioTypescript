import React from 'react';

import Document, {
    DocumentProps,
    Head,
    Html,
    Main,
    NextScript,
} from 'next/document';

class MyDocument extends Document<DocumentProps> {
    render(): JSX.Element {
        return (
            <Html>
                <Head>
                    <title>Products</title>
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossOrigin="anonymous"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
