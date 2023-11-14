using Domain.Entities;

namespace Domain.Repository;

public interface ICarRepository
{
    Task<Car> GetCarAsync(int id);
    Task<List<Car>> GetAllCarsAsync();
    Task AddCarAsync(Car car);
    Task DeleteCarAsync(Car car);
    Task UpdateCarAsync(Car car);
    Task SaveChangesAsync();
}