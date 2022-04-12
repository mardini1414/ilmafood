import React, { useRef, useState, useEffect } from 'react';
import MainLayout from './MainLayout';
import axios from 'axios';
import { Link, Head } from '@inertiajs/inertia-react';
import Loading from '../components/Loading';

function Search() {
  const [text, setText] = useState('');
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(true);
  const inputSearch = useRef();

  useEffect(() => {
    inputSearch.current.focus();
  }, []);

  async function searchData() {
    if (text !== '') {
      setIsLoading(true);
      setData([]);
      const res = await axios.get(`/search?q=${text}`);
      setData(res.data.data);
      res.data.data.length > 0 ? setResult(true) : setResult(false);
      setIsLoading(false);
    } else {
      setIsLoading(false);
      setResult(true);
      setData([]);
    }
  }

  return (
    <MainLayout>
      <Head>
        <title>Cari makanan kesukaanmu</title>
      </Head>
      <div
        className="px-2"
        style={{ height: 'max-content', minHeight: '100vh' }}
      >
        <div className="py-2">
          <div className="input-search input-group rounded-pill overflow-hidden border text-decoration-none">
            <span className="input-group-text bg-white border-0">
              <i className="fa-solid fa-magnifying-glass text-muted"></i>
            </span>
            <input
              ref={inputSearch}
              type="text"
              className="form-control form-control-sm border-0 search-form"
              placeholder="Cari disini"
              onKeyUp={searchData}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
        </div>
        <div className="row gx-1 gy-3">
          {result === false && (
            <div className="text-muted px-2">
              Hasil untuk {text} tidak di temukan
            </div>
          )}
          {data.map((el) => {
            return (
              <Link
                key={el.id}
                href={`/product/${el.id}`}
                className="col-6 d-block text-decoration-none"
              >
                <div className="bg-white p-1 rounded text-center">
                  <img
                    src={`/storage/${el.image}`}
                    alt={el.name}
                    width="100%"
                    height={170}
                    loading="lazy"
                    className="rounded image-fit"
                  />
                  <div className="d-grid gap-1">
                    <span className="text-muted text-small text-start fw-normal mt-2">
                      {el.name}
                    </span>
                    <span className="text-danger text-decoration-line-through text-start text-small">
                      Rp.{el.price}
                    </span>
                    <div className="d-flex justify-content-between">
                      <strong className="text-dark text-start">
                        Rp.{el.price - el.discounts}
                      </strong>
                      <div
                        className="text-success px-1 rounded-3"
                        style={{ backgroundColor: 'rgba(25, 135, 84, 0.2)' }}
                      >
                        stok {el.stock}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="py-5"></div>
        {isLoading && (
          <div className="position-absolute top-50 start-50 translate-middle">
            <Loading />
          </div>
        )}
      </div>
    </MainLayout>
  );
}

export default Search;
