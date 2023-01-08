//ourdomain.com/news/something will render this page.

import { useRouter } from 'next/router';

function DetailPage() {
  const router = useRouter();

  const newsId = router.query.newsId;

  //send a request to the backend API
  // to fetch the news data with that Id

  return <h1>The Detail Page</h1>;
}

export default DetailPage;
