import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../components/Modal";
import Input from "../components/Input";
import Button from "../components/Button";
import { createDataFunc, updateDataFunc } from "../redux/dataSlice";
import { modalFunc } from "../redux/modalSlice";
import { useLocation, useNavigate } from "react-router-dom";

const Product = () => {
  const { modal } = useSelector((state) => state.modal);
  const { data, keyword } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [productInfo, setproductInfo] = useState({
    name: "",
    price: "",
    url: "",
  });
  const onChangeFunc = (e, type) => {
    if (type == "url") {
      setproductInfo((prev) => ({
        ...prev,
        [e.target.name]: URL.createObjectURL(e.target.files[0]),
      }));
    } else {
      setproductInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  let loc = location?.search.split("=")[1];

  useEffect(() => {
    if (loc) {
      setproductInfo(data.find((dt) => dt.id == loc));
    }
  }, [loc]);

  console.log(modal, "modal");
  console.log(data, "data");
  const buttonFunc = () => {
    dispatch(createDataFunc({ ...productInfo, id: data.length + 1 }));
    dispatch(modalFunc());
  };
  const buttonUpdateFunc = () => {
    dispatch(modalFunc());
    dispatch(updateDataFunc({ ...productInfo, id: loc }));
    navigate("/");
  };
  const contentModal = (
    <>
      <Input
        value={productInfo.name}
        type={"text"}
        placeholder={"Ürün Ekle"}
        name={"name"}
        id={"name"}
        onChange={(e) => onChangeFunc(e, "name")}
      ></Input>
      <Input
        value={productInfo.price}
        type={"text"}
        placeholder={"Fiyat Ekle"}
        name={"price"}
        id={"price"}
        onChange={(e) => onChangeFunc(e, "price")}
      ></Input>
      <Input
        type={"file"}
        placeholder={"Resim Seç"}
        name={"url"}
        id={"url"}
        onChange={(e) => onChangeFunc(e, "url")}
      ></Input>
      <Button
        btnText={loc ? "Ürün Güncelle" : "Ürün Oluştur"}
        onClick={loc ? buttonUpdateFunc : buttonFunc}
      ></Button>
    </>
  );
  const filteredItems = data.filter((dt) =>
    dt.name.toLowerCase().includes(keyword.toLowerCase())
  );
  return (
    <div>
      <div className="flex items-center flex-wrap">
        {filteredItems?.map((dt, i) => (
          <ProductCard key={i} dt={dt}></ProductCard>
        ))}
      </div>
      {modal && (
        <Modal
          content={contentModal}
          title={loc ? "Ürün Güncelle" : "Ürün Oluştur"}
        ></Modal>
      )}
    </div>
  );
};

export default Product;
