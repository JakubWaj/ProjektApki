using Domain.Entities;
using Domain.Repository;
using Microsoft.EntityFrameworkCore;

namespace Persistence.Repository;

public class CarRepository : ICarRepository
{
    private readonly DataContext _context;

    public CarRepository(DataContext context)
    {
        _context = context;
    }

    public async Task<Car> GetCarAsync(int id)=> await _context.Cars.FirstOrDefaultAsync(x=>x.Id==id);
    public async Task<List<Car>> GetAllCarsAsync() => await _context.Cars.ToListAsync();

    public async Task AddCarAsync(Car car)=> await _context.Cars.AddAsync(car);

    public Task DeleteCarAsync(Car car)
    {
         _context.Cars.Remove(car);
         return Task.CompletedTask;
    }

    public Task UpdateCarAsync(Car car)
    {
        _context.Cars.Update(car);
        return Task.CompletedTask;
    }

    public async Task SaveChangesAsync()
    {
        await _context.SaveChangesAsync();
    }
}