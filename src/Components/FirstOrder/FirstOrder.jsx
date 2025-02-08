import React from "react";
import "./FirstOrder.css";
import firstOrder from "./../../img/mainPics/image.svg";
import { useForm } from "react-hook-form";

function FirstOrder() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <section className="first__order">
      <div className="container">
        <div className="firstOrder__content">
          <div className="firstOrder__text">5% off on the first order</div>
          <form onSubmit={handleSubmit(onSubmit)} className="input__section">
            <input
              type="text"
              className="name"
              placeholder="Name"
              {...register("name", {
                required: "This field is necessary to proceed!",
                maxLength: { value: 200, message: "Max length is 200" },
              })}
            />
            <div>
              {errors.name && (
                <p style={{ color: "red", fontStyle: "italic" }}>
                  {errors.name.message}
                </p>
              )}
            </div>

            <input
              type="text"
              className="phone__number"
              placeholder="Phone number"
              {...register("number", {
                required: "This field is necessary to proceed!",
                pattern: { value: "[0-9]{3}-[0-9]{3}-[0-9]{4}", message: "Enter a valid phone number" },
              })}
            />
            <input
              type="text"
              className="email"
              placeholder="Email"
              {...register("email", {
                required: "This field is necessary to proceed!",
                maxLength: { value: 200, message: "Max length is 200" },
              })}
            />
            <div>
              {errors.name && (
                <p style={{ color: "red", fontStyle: "italic" }}>
                  {errors.name.message}
                </p>
              )}
            </div>

            <button className="getADiscount__btn">Get a discount</button>
          </form>
          <img
            src={firstOrder}
            alt="First Order Discount"
            className="firstOrder__image"
          />
        </div>
      </div>
    </section>
  );
}

export default FirstOrder;
