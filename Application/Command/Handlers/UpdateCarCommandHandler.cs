using Domain.Repository;
using MediatR;

namespace Application.Command.Handlers;

public class UpdateCarCommandHandler : IRequestHandler<UpdateCarCommand>
{
    private readonly ICarRepository _carRepository;

    public UpdateCarCommandHandler(ICarRepository carRepository)
    {
        _carRepository = carRepository;
    }
    
    public async Task Handle(UpdateCarCommand request, CancellationToken cancellationToken)
    {
        var car = await _carRepository.GetCarAsync(request.Id);
        car.Brand = request.Brand;
        car.Model = request.Model;
        car.DoorsNumber = request.DoorsNumber;
        car.LuggageCapacity = request.LuggageCapacity;
        car.EngineCapacity = request.EngineCapacity;
        car.FuelType = request.FuelType;
        car.ProductionDate = request.ProductionDate;
        car.CarFuelConsumption = request.CarFuelConsumption;
        car.BodyType = request.BodyType;
        await _carRepository.UpdateCarAsync(car);
        await _carRepository.SaveChangesAsync();
    }
}