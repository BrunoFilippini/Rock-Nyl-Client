import axios from "axios";
import { api } from "../../api/api";

import { useState, useEffect } from "react";

import { SearchBar } from "../../Components/SearchBar/SearchBar";
import { LoadingSpinner } from "../../Components/LoadingSpinner/LoadingSpinner";
import { CardsAlbunsList } from "../../Components/cardsAlbunsList/cardsAlbunsList";
import { PaginationComponent } from "../../Components/PaginationComponent/PaginationComponent";
import { PaginationSelector } from "../../Components/PaginationSelector/PaginationSelector";

export function AlbumList() {
  const [albuns, setAlbuns] = useState([]);
  const [itensPerPage, setItensPerPage] = useState(30);
  const [currentPage, setCurrentPage] = useState(0);
  const [rerender, setRerender] = useState(true);
  const [backup, setBackup] = useState([]);
  const [loading, Setloading] = useState(false);

  const pages = Math.ceil(albuns.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = albuns.slice(startIndex, endIndex);

  useEffect(() => {
    const source = axios.CancelToken.source();
    async function fetchAlbum() {
      try {
        const response = await api.get("/product/all-artists");

        setAlbuns([...response.data]);
        setBackup([...response.data]);
        Setloading(true);
      } catch (error) {
        console.log(error);
      }
    }
    fetchAlbum();
    setRerender(false);

    return () => {
      source.cancel();
    };
  }, [rerender]);

  useEffect(() => {
    const source = axios.CancelToken.source();

    setCurrentPage(0);

    return () => {
      source.cancel();
    };
  }, [itensPerPage]);

  function filterAlbum(searchParams) {
    if (searchParams === "") {
      setAlbuns([...backup]);
      return;
    }

    const filtered = albuns.filter((currentAlbum) => {
      return (
        currentAlbum.artist
          .toLowerCase()
          .includes(searchParams.toLowerCase()) ||
        currentAlbum.albumName
          .toLowerCase()
          .includes(searchParams.toLowerCase())
      );
    });

    setAlbuns(filtered);
  }

  return (
    <div>
      <div className="container mx-auto mt-5 mb-2">
        <div className="flex flex-col items-center">
          <p className="title2 text-3xl font-bold m-2 ">Album List</p>
          <p className="subtitle text-lg font-bold tracking-tighter text-stone-600">
            Search for your favorite Album!
          </p>
        </div>

        <div className="flex justify-between  ">
          <div className="w-5/6">
            <SearchBar
              placeholder="Search for your favorite Album or Artist!"
              filterList={filterAlbum}
            />
          </div>
          <div>
            <span>
              <b>{albuns.length}</b> results found
            </span>
          </div>
          <div>
            <PaginationSelector
              itensPerPage={itensPerPage}
              setItensPerPage={setItensPerPage}
            />
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-5 gap-4">
            {currentItens.map((currentAlbum) => {
              return (
                <CardsAlbunsList
                  key={currentAlbum._id}
                  id={currentAlbum._id}
                  url_img={currentAlbum.url_img}
                  alt={currentAlbum.alt}
                  albumName={
                    currentAlbum.albumName.length > 50
                      ? `${currentAlbum.albumName.substring(0, 50)} ...`
                      : `${currentAlbum.albumName}`
                  }
                  artist={currentAlbum.artist}
                  description={`${currentAlbum.description.substring(
                    0,
                    100
                  )}...`}
                  price={currentAlbum.price}
                />
              );
            })}
          </div>
        ) : (
          <LoadingSpinner />
        )}

        <div className="p-2">
          <PaginationComponent
            pages={pages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}
