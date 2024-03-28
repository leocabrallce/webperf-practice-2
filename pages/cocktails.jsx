import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Cocktails() {
  const [cocktails, setCocktails] = useState([]);
  const [search, setSearch] = useState('');
  const [timer, setTimer] = useState(null);

  const handleChange = (newValue) => {
    setSearch(newValue);

    if (timer) {
      clearTimeout(timer);
    }

    setTimer(setTimeout(() => {
      fetchCocktails();
    }, 1000));
  };

  const fetchCocktails = async () => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`;
    const response = await fetch(url);
    const data = await response.json();

    setCocktails(data.drinks);
  };

  return (
    <main>
      <header class="site-header site-contact-header">
        <div class="container">
          <div class="row">

            <div class="col-lg-10 col-12 mx-auto">
              <h1 class="text-white">Our Cocktails</h1>
              <div className="c-reviews my-3 d-flex flex-wrap align-items-center">
                <div className="d-flex w-100">
                  <input value={search} onChange={(e) => handleChange(e.target.value)} type="text" name="search-cocktails" id="search-cocktails" class="form-control" placeholder="Search" />
                </div>

                <p className="text-white w-100">We have more than <strong>600</strong> available</p>
              </div>
            </div>

          </div>
        </div>

        <div class="overlay"></div>
      </header>

      {cocktails.length > 0 ? (
        <>
          <section className="menu section-padding">
            <div className="container">
              <div className="row">

                <div className="col-12">
                  <h2 className="text-center mb-lg-5 mb-4">Results for {search}</h2>
                </div>

                {cocktails.map((cocktail) => (
                  <div key={cocktail.idDrink} className="col-lg-4 col-md-6 col-12">
                    <div className="menu-thumb">
                      <div className="menu-image-wrap">
                        <Image width={416} height={416} src={cocktail.strDrinkThumb} className="img-fluid menu-image" alt="" />

                        <span className="menu-tag bg-warning">{cocktail.strCategory}</span>
                      </div>

                      <div className="menu-info d-flex flex-wrap align-items-center">
                        <h4 className="mb-0">{cocktail.strDrink}</h4>
                      </div>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </section>

          <section className="BgImage"></section>
        </>
      ) : null}

      <section className="menu section-padding">
        <div className="container">
          <div className="row">

            <div className="col-12">
              <h2 className="text-center mb-lg-5 mb-4">Special Menus</h2>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className="menu-thumb">
                <div className="menu-image-wrap">
                  <Image width={416} height={416} src="/images/breakfast/brett-jordan-8xt8-HIFqc8-unsplash.jpg" className="img-fluid menu-image" alt="" />

                  <span className="menu-tag bg-warning">Breakfast</span>
                </div>

                <div className="menu-info d-flex flex-wrap align-items-center">
                  <h4 className="mb-0">Morning Fresh</h4>

                  <span className="price-tag bg-white shadow-lg ms-4"><small>$</small>12.50</span>

                  <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                    <h6 className="reviews-text mb-0 me-3">4.3/5</h6>

                    <div className="reviews-stars">
                      <i className="bi-star-fill reviews-icon"></i>
                      <i className="bi-star-fill reviews-icon"></i>
                      <i className="bi-star-fill reviews-icon"></i>
                      <i className="bi-star-fill reviews-icon"></i>
                      <i className="bi-star reviews-icon"></i>
                    </div>

                    <p className="reviews-text mb-0 ms-4">102 Reviews</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className="menu-thumb">
                <div className="menu-image-wrap">
                  <Image width={416} height={416} src="/images/lunch/farhad-ibrahimzade-MGKqxm6u2bc-unsplash.jpg" className="img-fluid menu-image" alt="" />

                  <span className="menu-tag bg-warning">Lunch</span>
                </div>

                <div className="menu-info d-flex flex-wrap align-items-center">
                  <h4 className="mb-0">Tooplate Soup</h4>

                  <span className="price-tag bg-white shadow-lg ms-4"><small>$</small>24.50</span>

                  <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                    <h6 className="reviews-text mb-0 me-3">3/5</h6>

                    <div className="reviews-stars">
                      <i className="bi-star-fill reviews-icon"></i>
                      <i className="bi-star-fill reviews-icon"></i>
                      <i className="bi-star-fill reviews-icon"></i>
                      <i className="bi-star reviews-icon"></i>
                      <i className="bi-star reviews-icon"></i>
                    </div>

                    <p className="reviews-text mb-0 ms-4">50 Reviews</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className="menu-thumb">
                <div className="menu-image-wrap">
                  <Image width={416} height={416} src="/images/dinner/keriliwi-c3mFafsFz2w-unsplash.jpg" className="img-fluid menu-image" alt="" />

                  <span className="menu-tag bg-warning">Dinner</span>
                </div>

                <div className="menu-info d-flex flex-wrap align-items-center">
                  <h4 className="mb-0">Premium Steak</h4>

                  <span className="price-tag bg-white shadow-lg ms-4"><small>$</small>45</span>

                  <del className="ms-4"><small>$</small>150</del>

                  <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                    <h6 className="reviews-text mb-0 me-3">3/5</h6>

                    <div className="reviews-stars">
                      <i className="bi-star-fill reviews-icon"></i>
                      <i className="bi-star-fill reviews-icon"></i>
                      <i className="bi-star-fill reviews-icon"></i>
                      <i className="bi-star reviews-icon"></i>
                      <i className="bi-star reviews-icon"></i>
                    </div>

                    <p className="reviews-text mb-0 ms-4">86 Reviews</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className="menu-thumb">
                <div className="menu-image-wrap">
                  <Image width={416} height={416} src="/images/dinner/farhad-ibrahimzade-ZipYER3NLhY-unsplash.jpg" className="img-fluid menu-image" alt="" />

                  <span className="menu-tag bg-warning">Dinner</span>
                </div>

                <div className="menu-info d-flex flex-wrap align-items-center">
                  <h4 className="mb-0">Seafood Set</h4>

                  <span className="price-tag bg-white shadow-lg ms-4"><small>$</small>86</span>

                  <del className="ms-4"><small>$</small>124</del>

                  <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                    <h6 className="reviews-text mb-0 me-3">3/5</h6>

                    <div className="reviews-stars">
                      <i className="bi-star-fill reviews-icon"></i>
                      <i className="bi-star-fill reviews-icon"></i>
                      <i className="bi-star-fill reviews-icon"></i>
                      <i className="bi-star reviews-icon"></i>
                      <i className="bi-star reviews-icon"></i>
                    </div>

                    <p className="reviews-text mb-0 ms-4">44 Reviews</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className="menu-thumb">
                <div className="menu-image-wrap">
                  <Image width={416} height={416} src="/images/breakfast/louis-hansel-dphM2U1xq0U-unsplash.jpg" className="img-fluid menu-image" alt="" />

                  <span className="menu-tag bg-warning">Breakfast</span>
                </div>

                <div className="menu-info d-flex flex-wrap align-items-center">
                  <h4 className="mb-0">Burger Set</h4>

                  <span className="price-tag bg-white shadow-lg ms-4"><small>$</small>20.50</span>

                  <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                    <h6 className="reviews-text mb-0 me-3">4.3/5</h6>

                    <div className="reviews-stars">
                      <i className="bi-star-fill reviews-icon"></i>
                      <i className="bi-star-fill reviews-icon"></i>
                      <i className="bi-star-fill reviews-icon"></i>
                      <i className="bi-star-fill reviews-icon"></i>
                      <i className="bi-star reviews-icon"></i>
                    </div>

                    <p className="reviews-text mb-0 ms-4">102 Reviews</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className="menu-thumb">
                <div className="menu-image-wrap">
                  <Image width={416} height={416} src="/images/lunch/farhad-ibrahimzade-D5c9ZciQy_I-unsplash.jpg" className="img-fluid menu-image" alt="" />

                  <span className="menu-tag bg-warning">Lunch</span>
                </div>

                <div className="menu-info d-flex flex-wrap align-items-center">
                  <h4 className="mb-0">Healthy Soup</h4>

                  <span className="price-tag bg-white shadow-lg ms-4"><small>$</small>34.20</span>

                  <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                    <h6 className="reviews-text mb-0 me-3">3/5</h6>

                    <div className="reviews-stars">
                      <i className="bi-star-fill reviews-icon"></i>
                      <i className="bi-star-fill reviews-icon"></i>
                      <i className="bi-star-fill reviews-icon"></i>
                      <i className="bi-star reviews-icon"></i>
                      <i className="bi-star reviews-icon"></i>
                    </div>

                    <p className="reviews-text mb-0 ms-4">64 Reviews</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="BgImage"></section>

      <section className="news section-padding">
        <div className="container">
          <div className="row">

            <h2 className="text-center mb-lg-5 mb-4">News &amp; Events</h2>

            <div className="col-lg-6 col-md-6 col-12">
              <div className="news-thumb mb-4">
                <Link href="news-detail.html">
                  <img src="/images/news/pablo-merchan-montes-Orz90t6o0e4-unsplash.jpg" className="img-fluid news-image" alt="" />
                </Link>

                <div className="news-text-info news-text-info-large">
                  <span className="category-tag bg-danger">Featured</span>

                  <h5 className="news-title mt-2">
                    <Link href="news-detail.html" className="news-title-link">Healthy Lifestyle and happy living tips</Link>
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-12">
              <div className="news-thumb mb-4">
                <Link href="news-detail.html">
                  <img src="/images/news/stefan-johnson-xIFbDeGcy44-unsplash.jpg" className="img-fluid news-image" alt="" />
                </Link>

                <div className="news-text-info news-text-info-large">
                  <span className="category-tag bg-danger">Featured</span>

                  <h5 className="news-title mt-2">
                    <Link href="news-detail.html" className="news-title-link">How to make a healthy meal</Link>
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-12">
              <div className="news-thumb mb-lg-0 mb-lg-4 mb-0">
                <Link href="news-detail.html">
                  <img src="/images/news/gilles-lambert-S_LhjpfIdm4-unsplash.jpg" className="img-fluid news-image" alt="" />
                </Link>

                <div className="news-text-info">
                  <span className="category-tag me-3 bg-info">Promotions</span>

                  <strong>8 April 2022</strong>

                  <h5 className="news-title mt-2">
                    <Link href="news-detail.html" className="news-title-link">Is Coconut good for you?</Link>
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-12">
              <div className="news-thumb mb-lg-0 mb-lg-4 mb-2">
                <Link href="news-detail.html">
                  <img src="/images/news/caroline-attwood-bpPTlXWTOvg-unsplash.jpg" className="img-fluid news-image" alt="" />
                </Link>

                <div className="news-text-info">
                  <span className="category-tag">News</span>

                  <h5 className="news-title mt-2">
                    <Link href="news-detail.html" className="news-title-link">Salmon Steak Noodle</Link>
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className="news-thumb mb-4">
                <Link href="news-detail.html">
                  <img src="/images/news/louis-hansel-GiIiRV0FjwU-unsplash.jpg" className="img-fluid news-image" alt="" />
                </Link>

                <div className="news-text-info">
                  <span className="category-tag me-3 bg-info">Meeting</span>

                  <strong>30 April 2022</strong>

                  <h5 className="news-title mt-2">
                    <Link href="news-detail.html" className="news-title-link">Making a healthy salad</Link>
                  </h5>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
