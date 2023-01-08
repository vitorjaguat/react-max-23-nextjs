//ourdomain.com/news will render this page.

import React from 'react';
import Link from 'next/link';

function NewsPage() {
  return (
    <React.Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/bolsonaristas-cagam-na-cadeira-do-xandao">
            Bolsonaristas cagam na cadeira do Xandão
          </Link>
        </li>
        <li>
          <Link href="/news/eliane-catanhede-janta-com-amigas">
            Eliane Catanhede janta com amigas
          </Link>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default NewsPage;
