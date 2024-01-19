import React, { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [products, setProducts] = useState([
    {
      _id: "1",
      title: "گوشی آیفون 11",
      images: [
        "/images/1.jpg",
        "/images/2.jpg",
        "/images/3.jpg",
      ],
      description: "این گوشی موبایل است و خیلی زیباست و جدیدترین محصول شرکت خوب ماست ",
      content:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد",
      colors: ["red", "blue", "teal"],
      price: 180000,
      count: 1,
    },
    {
      _id: "2",
      title: "گوشی آیفون 7",
      images: ["/images/4.jpg", "/images/5.jpg"],
      description: "این گوشی موبایل است و خیلی زیباست و جدیدترین محصول شرکت خوب ماست ",
      content:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد",
      colors: ["red", "blue", "teal"],
      price: 150000,
      count: 1,
    },
    {
      _id: "3",
      title: "گوشی آیفون 12",
      images: [
        "/images/6.jpg",
        "/images/7.jpg",
        "/images/8.jpg",
      ],
      description: "این گوشی موبایل است و خیلی زیباست و جدیدترین محصول شرکت خوب ماست ",
      content:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد",
      colors: ["red", "blue", "teal"],
      price: 345000,
      count: 1,
    },
    {
      _id: "4",
      title: "گوشی سامسونگ s21",
      images: [
        "/images/9.jpg",
        "/images/10.jpg",
        "/images/11.jpg",
      ],
      description: "این گوشی موبایل است و خیلی زیباست و جدیدترین محصول شرکت خوب ماست ",
      content:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد",
      colors: ["red", "blue", "teal"],
      price: 80000,
      count: 1,
    },
  ]);

  const [cart , setCart] = useState([])
  const addCart = async (Product_id) => {

    const check = cart.every(item => {
      return item._id !== Product_id
    })

    if(check){
      const data = await products.filter(item => item._id == Product_id);
      await setCart([...cart , ...data]);
    }else{
      console.log('exist')
    }
  }

  const increase = (Product_id) => {
    cart.forEach(item => {
      if(item._id == Product_id){
        item.count += 1
      }
      setCart([...cart]);
    })

  }
  const decrease = (Product_id) => {
    cart.forEach(item => {
      if(item._id == Product_id){
        item.count <= 1 ? removeProduct(Product_id) : item.count -= 1
      }
      setCart([...cart]);
    })
  }
  const removeProduct = (Product_id) => {
    if(window.confirm('آیا از حذف محصول مطمئنید؟')){
      cart.forEach((item , index) => {
        if(item._id == Product_id){
          cart.splice(index , 1);
        }
      })
      setCart([...cart]);
    }
  }
  const value = {
    products: [products, setProducts],
    cart : [cart , setCart],
    addCart : addCart,
    increase : increase,
    decrease : decrease ,
    removeProduct : removeProduct
  };
  return <DataContext.Provider value={value}>{props.children}</DataContext.Provider>;
};
