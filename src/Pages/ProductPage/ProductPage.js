import { api } from "../../api/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SingleProduct } from "../../Components/SingleProduct/SingleProduct";
import { Section2 } from "../Hompage-Components/Section2/Section2";


export function ProducPage() {
  const params = useParams();


  const [album, setAlbum] = useState({
    url_img: "",
    artist: "",
    albumName: "",
    type: "",
    price: "",
    description: "",
    details:""
  });

  useEffect(() => {
    async function fetchAlbum() {
      try {
        const response = await api.get(`/product/album/${params.id}`);
        setAlbum({ ...response.data[0] });
      } catch (error) {
        console.log(error);
      }
    }
    fetchAlbum();
  }, [params.id]);

  return (
    <>
      <SingleProduct
        img={album.url_img}
        artist={album.artist}
        albumName={album.albumName}
        type={album.type}
        price={album.price}
        description={album.description}
      />

      <Section2 />
    </>
  );
}
