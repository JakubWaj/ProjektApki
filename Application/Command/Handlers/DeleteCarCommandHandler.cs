using Domain.Repository;
using MediatR;

namespace Application.Command.Handlers;

public class DeleteCarCommandHandler : IRequestHandler<DeleteCarCommand>
{
    private readonly ICarRepository _carRepository;

    public DeleteCarCommandHandler(ICarRepository carRepository)
    {
        _carRepository = carRepository;
        
    }
    
    public async Task Handle(DeleteCarCommand request, CancellationToken cancellationToken)
    {
        var car = await _carRepository.GetCarAsync(request.Id);
        await _carRepository.DeleteCarAsync(car);
        await _carRepository.SaveChangesAsync();
    }
}