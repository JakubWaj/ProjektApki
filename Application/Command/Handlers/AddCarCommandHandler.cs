using Domain.Entities;
using Domain.Repository;
using MediatR;

namespace Application.Command.Handlers;

public class AddCarCommandHandler : IRequestHandler<AddCarCommand>
{
    private readonly ICarRepository _carRepository;

    public AddCarCommandHandler(ICarRepository carRepository)
    {
        _carRepository = carRepository;
    }
    
    public async Task Handle(AddCarCommand request, CancellationToken cancellationToken)
    {
        var car = new Car()
        {
            Brand = request.Brand,
            Model = request.Model,
            DoorsNumber = request.DoorsNumber,
            LuggageCapacity = request.LuggageCapacity,
            EngineCapacity = request.EngineCapacity,
            FuelType = request.FuelType,
            ProductionDate = request.ProductionDate,
            CarFuelConsumption = request.CarFuelConsumption,
            BodyType = request.BodyType
        };
        await _carRepository.AddCarAsync(car);
        await _carRepository.SaveChangesAsync();
    }
}