module.exports = (data) => {
    const title = data.title || data.pagination.items[0].title
    const headline = data.headline || data.pagination.items[0].headline
    let previous = ''
    let next = ''
    let nextTitle = ''
    let previousTitle = ''

    if (data.pagination) {
        previous = data.pagination.href.previous
        next = data.pagination.href.next
        nextTitle = data.pagination.page.next && data.pagination.page.next.title
        previousTitle = data.pagination.page.previous && data.pagination.page.previous.title
    }

    return /*html*/ `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>${title} - My Blog</title>
        <meta name="description" content="${headline}"/>
        <link rel="stylesheet" href="/css/global.css" />
    </head>
        <body class="post">
            <header>
                <a href="${data.page.url === '/blog/' ? '/' : '/blog/'}">&larr; back</a>
            </header>
            <main>
                ${data.content}
            </main>
            <footer>
                ${previous ? `<a class="previous" href="${previous}">&larr; ${previousTitle}</a>` : ''}
                ${next ? `<a class="next" href="${next}">${nextTitle} &rarr;</a>` : ''}
            </footer>
        </body>
    </html>
`;
}