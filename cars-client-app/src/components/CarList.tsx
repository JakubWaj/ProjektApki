import React, { useState, useEffect } from "react";
import axios from "axios";

export interface Car {
  id: number;
  brand: string;
  model: string;
  doorsNumber: number;
  luggageCapacity: number;
  engineCapacity: number;
  fuelType: number;
  productionDate: string;
  carFuelConsumption: number;
  bodyType: number;
}

interface CarListProps {
  fetchData: () => void;
  cars: Car[];
  handleEditMode: (id: number) => void;
}

const CarList = (props: CarListProps) => {
  const handleEdit = (id: number) => {
    props.handleEditMode(id);
  };

  useEffect(() => {
    props.fetchData();
  }, []);

  const remove = async (id: any) => {
    await axios
      .delete(`http://localhost:5242/api/Car/${id}`)
      .then((response) => {
        console.log("dziala");
        props.fetchData();
      })
      .catch((error) => {
        console.error(error);
      });
  };
  
  enum FuelType {
    Benzyna = 0,
    Diesel = 1,
    Elektryczny = 2,
    Hybryda = 3,
    }
    enum BodyType {
    Sedan = 0,
    Hatchback = 1,
    Coupe = 2,
    Convertible = 3,
    SUV = 4,
    Minivan = 5,
    PickupTruck = 6,
    }
    
  return (
    <div>
      <h1>Lista samochodów</h1>
      <ul>
        {props.cars.map((car: Car) => (
          <li key={car.id}>
            <p>
              {`Marka: ${car.brand}, Model: ${car.model}
                        , Drzwi: ${car.doorsNumber},Pojemność bagażu: ${
                car.luggageCapacity
              },
                        Pojemność silnika: ${car.engineCapacity},Spalanie: ${
                car.carFuelConsumption
              },Produkcja:
                         ${car.productionDate.split("T")[0]},Typ paliwa: ${
                FuelType[car.fuelType]
              },Rodzaj: 
                         ${BodyType[car.bodyType]}`}
              {}
            </p>
            <div>
              <button onClick={() => remove(car.id)}>Usuń</button>
              <button onClick={() => handleEdit(car.id)}>Edytuj</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarList;
