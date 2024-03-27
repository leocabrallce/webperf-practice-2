import Link from 'next/link';
import Image from 'next/image';

export default function News() {
  return (
    <main>
      <header class="site-header site-news-header">
        <div class="container">
          <div class="row">

            <div class="col-lg-10 col-12 mx-auto">
              <h1 class="text-white">News &amp; Events</h1>

              <strong class="text-white">our latest updates, news, events and special promotions</strong>
            </div>

          </div>
        </div>

        <div class="overlay"></div>
      </header>

      <section class="news section-padding bg-white">
        <div class="container">
          <div class="row">

            <h2 class="mb-lg-5 mb-4">Latest Updates</h2>

            <div class="col-lg-6 col-md-6 col-12">
              <div class="news-thumb mb-4">
                <Link href="news-detail">
                  <img src="images/news/pablo-merchan-montes-Orz90t6o0e4-unsplash.jpg" class="img-fluid news-image" alt="" />
                </Link>

                <div class="news-text-info news-text-info-large">
                  <span class="category-tag bg-danger">Featured</span>

                  <h5 class="news-title mt-2">
                    <Link href="news-detail" class="news-title-link">How to make a healthy diet?</Link>
                  </h5>
                </div>
              </div>
            </div>

            <div class="col-lg-6 col-md-6 col-12">
              <div class="news-thumb mb-4">
                <Link href="news-detail">
                  <img src="images/news/stefan-johnson-xIFbDeGcy44-unsplash.jpg" class="img-fluid news-image" alt="" />
                </Link>

                <div class="news-text-info news-text-info-large">
                  <span class="category-tag bg-danger">Featured</span>

                  <h5 class="news-title mt-2">
                    <Link href="news-detail" class="news-title-link">Happy Living and happy eating tips</Link>
                  </h5>
                </div>
              </div>
            </div>

          </div >
        </div >
      </section >

      <section class="news section-padding">
        <div class="container">
          <div class="row">

            <div class="col-12">
              <h2 class="mb-lg-5 mb-4">News &amp; Events</h2>
            </div>

            <div class="col-lg-4 col-md-6 col-12">
              <div class="news-thumb mb-4">
                <Link href="news-detail">
                  <img src="images/news/gilles-lambert-S_LhjpfIdm4-unsplash.jpg" class="img-fluid news-image" alt="" />
                </Link>

                <div class="news-text-info">
                  <span class="category-tag me-3 bg-info">Promotions</span>

                  <strong>12 April 2022</strong>

                  <h5 class="news-title mt-2">
                    <Link href="news-detail" class="news-title-link">Is Coconut good for your health?</Link>
                  </h5>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 col-12">
              <div class="news-thumb mb-4">
                <Link href="news-detail">
                  <img src="images/news/ella-olsson-mmnKI8kMxpc-unsplash.jpg" class="img-fluid news-image" alt="" />
                </Link>

                <div class="news-text-info">
                  <span class="category-tag me-3 bg-info">Career</span>

                  <strong>18 April 2022</strong>

                  <h5 class="news-title mt-2">
                    <Link href="news-detail" class="news-title-link">How to run a sushi business?</Link>
                  </h5>
                </div>
              </div>
            </div >

            <div class="col-lg-4 col-md-6 col-12">
              <div class="news-thumb mb-4">
                <Link href="news-detail">
                  <img src="images/news/louis-hansel-GiIiRV0FjwU-unsplash.jpg" class="img-fluid news-image" alt="" />
                </Link>

                <div class="news-text-info">
                  <span class="category-tag me-3 bg-info">Meeting</span>

                  <strong>30 April 2022</strong>

                  <h5 class="news-title mt-2">
                    <Link href="news-detail" class=" news-title-link">Learning a fine dining experience</Link>
                  </h5>
                </div>
              </div >
            </div >

          </div >
        </div >
      </section >

    </main >
  );
}