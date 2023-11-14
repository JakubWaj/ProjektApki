import React, {useEffect, useState} from "react";
import { Car } from "./CarList";
import { error } from "console";
import axios from "axios";
interface IEditForm {
  car?: Car;
  close: () => void;
}

const EditForm = ({ car,close}: IEditForm) => {
  const [editedCar, setEditedCar] = useState({ ...car });
  // @ts-ignore
    useEffect(() => {console.log(car?.productionDate)
    setEditedCar({ ...car })}, [car]);
  
  const  update =()=>{
    axios.put(`http://localhost:5242/api/Car/${editedCar.id}`,{
    id : editedCar.id,
    brand: editedCar.brand,
    model: editedCar.model,
    doorsNumber: editedCar.doorsNumber,
    luggageCapacity: editedCar.luggageCapacity,
    engineCapacity: editedCar.engineCapacity,
    fuelType: editedCar.fuelType,
    productionDate: editedCar.productionDate,
    carFuelConsumption: editedCar.carFuelConsumption,
    bodyType: editedCar.bodyType,
      
    })
      
  }

  return (
    <>
      <h2>Edycja</h2>
      <form onSubmit={update}>
        <label htmlFor="brand">Marka</label>
        <input
          type="text"
          id="brand"
          value={editedCar.brand}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEditedCar((prevDetails) => ({
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
          value={editedCar.model}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEditedCar((prevDetails) => ({
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
          value={editedCar.doorsNumber}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEditedCar((prevDetails) => ({
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
          value={editedCar.luggageCapacity}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEditedCar((prevDetails) => ({
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
          value={editedCar.engineCapacity}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEditedCar((prevDetails) => ({
              ...prevDetails,
              engineCapacity: parseInt(e.target.value),
            }))
          }
          name="engineCapacity"
        />
        <br />
        <label htmlFor="fuelType">Typ paliwa</label>
          <select
              id="fuelType"
              value={editedCar.fuelType}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setEditedCar((prevDetails) => ({
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
          value={editedCar.productionDate?.split("T")[0]}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEditedCar((prevDetails) => ({
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
          value={editedCar.carFuelConsumption}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEditedCar((prevDetails) => ({
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
              value={editedCar.bodyType}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setEditedCar((prevDetails) => ({
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
        <button type="submit">Edytuj</button>
          <button type="button" onClick={close}>Anuluj</button>
      </form>
    </>
  );
};

export default EditForm;
