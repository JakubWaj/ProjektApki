import React, { useState, useEffect } from "react";
import axios from "axios";
import { Car } from "./CarList";
import "../styles/Form.css";

interface AddFormProps {
  fetchData: () => void;
  isEdit: boolean;
}

const AddCar = (props: AddFormProps) => {
  const [carDetails, setCarDetails] = useState<Car>({
    id: 0,
    brand: "",
    model: "",
    doorsNumber: 0,
    luggageCapacity: 0,
    engineCapacity: 0,
    fuelType: 0,
    productionDate: "",
    carFuelConsumption: 0,
    bodyType: 0,
  });

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post("http://localhost:5242/api/Car", {
        brand: carDetails.brand,
        model: carDetails.model,
        doorsNumber: carDetails.doorsNumber,
        luggageCapacity: carDetails.luggageCapacity,
        engineCapacity: carDetails.engineCapacity,
        fuelType: carDetails.fuelType,
        productionDate: carDetails.productionDate,
        carFuelConsumption: carDetails.carFuelConsumption,
        bodyType: carDetails.bodyType,
      })
      .then(function (response) {
        console.log(response);
        props.fetchData();
        setCarDetails({
          id: 0,
          brand: "",
          model: "",
          doorsNumber: 0,
          luggageCapacity: 0,
          engineCapacity: 0,
          fuelType: 0,
          productionDate: "",
          carFuelConsumption: 0,
          bodyType: 0,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
        <h2>Dodaj</h2>
      <form onSubmit={submitForm}>
        <label htmlFor="brand">Marka</label>
        <input
          type="text"
          id="brand"
          value={carDetails.brand}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCarDetails((prevDetails) => ({
              ...prevDetails,
              brand: e.target.value,
            }))
          }
          name="brand"
        />
        <br />
        <label htmlFor="model">Model</label>
        <input
          type="text"
          id="model"
          value={carDetails.model}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCarDetails((prevDetails) => ({
              ...prevDetails,
              model: e.target.value,
            }))
          }
          name="model"
        />
        <br />
        <label htmlFor="doorsNumber">Liczba drzwi</label>
        <input
          type="number"
          id="doorsNumber"
          value={carDetails.doorsNumber}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCarDetails((prevDetails) => ({
              ...prevDetails,
              doorsNumber: parseInt(e.target.value),
            }))
          }
          name="doorsNumber"
        />
        <br />
        <label htmlFor="luggageCapacity">Pojemność bagażnika</label>
        <input
          type="number"
          id="luggageCapacity"
          value={carDetails.luggageCapacity}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCarDetails((prevDetails) => ({
              ...prevDetails,
              luggageCapacity: parseInt(e.target.value),
            }))
          }
          name="luggageCapacity"
        />
        <br />
        <label htmlFor="engineCapacity">Pojemność silnika</label>
        <input
          type="number"
          id="engineCapacity"
          value={carDetails.engineCapacity}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCarDetails((prevDetails) => ({
              ...prevDetails,
              engineCapacity: parseInt(e.target.value),
            }))
          }
          name="engineCapacity"
        />
        <br />
        <label htmlFor="fuelConsumption">Typ paliwa</label>
          <select
              id="fuelType"
              value={carDetails.fuelType}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setCarDetails((prevDetails) => ({
                      ...prevDetails,
                      fuelType: parseInt(e.target.value),
                  }))
              }
              name="fuelType"
          >
              <option value="0">Petrol</option>
              <option value="1">Diesel</option>
              <option value="2">Electric</option>
              <option value="3">Hybrid</option>
          </select>
            
        <br />
        <label htmlFor="productionDate">Data produkcji</label>
        <input
          type="date"
          id="productionDate"
          value={carDetails.productionDate}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCarDetails((prevDetails) => ({
              ...prevDetails,
              productionDate: e.target.value,
            }))
          }
          name="productionDate"
        />
        <br />
        <label htmlFor="carFuelConsumptions">Spalanie</label>
        <input
          type="number"
          id="carFuelConsumptions"
          value={carDetails.carFuelConsumption}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCarDetails((prevDetails) => ({
              ...prevDetails,
              carFuelConsumption: parseFloat(e.target.value),
            }))
          }
          name="carFuelConsumptions"
        />
        <br />
        <label htmlFor="bodyType">Typ nadwozia</label>
          <select
              id="bodyType"
              value={carDetails.bodyType}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setCarDetails((prevDetails) => ({
                      ...prevDetails,
                      bodyType: parseInt(e.target.value),
                  }))
              }
              name="bodyType"
          >
              <option value="0">Sendan</option>
              <option value="1">Hatchback</option>
              <option value="2">Coupe</option>
              <option value="3">Convertible</option>
              <option value="4">SUV</option>
              <option value="5">Minivan</option>
              <option value="6">PickupTruck</option>
          </select>
        <br />
        <button type="submit">Dodaj</button>
      </form>
    </>
  );
};

export default AddCar;
