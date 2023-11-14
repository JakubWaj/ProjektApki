import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import CarList, { Car } from "./components/CarList";
import AddCar from "./components/AddCar";
import EditForm from "./components/EditForm";

function App() {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editingCar, setEditingCar] = useState<Car>();
  const [cars, setCars] = useState<Car[]>([]);
  const closeEditMode = () => {
    
    setIsEditing(false);
    };
  const handleEditMode = (id: number) => {
    const carToEdit = cars.find((car) => car.id === id);
    console.log(carToEdit);
    setEditingCar(carToEdit);
    setIsEditing(true);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5242/api/Car");
      setCars(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Błąd podczas pobierania danych:", error);
    }
  };


  return (
    <>
      <CarList
        handleEditMode={handleEditMode}
        cars={cars}
        fetchData={fetchData}
      />
      <AddCar isEdit={isEditing}  fetchData={fetchData} />
      {isEditing && <EditForm close={closeEditMode} car={editingCar} />}
    </>
  );
}

export default App;
