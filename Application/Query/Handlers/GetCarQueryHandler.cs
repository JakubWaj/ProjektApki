using Domain.Entities;
using Domain.Repository;
using MediatR;

namespace Application.Query.Handlers;

public class GetCarQueryHandler : IRequestHandler<GetCarQuery,Car>
{
    private readonly ICarRepository _context;

    public GetCarQueryHandler(ICarRepository context)
    {
        _context = context;
    }
    
    public async Task<Car> Handle(GetCarQuery request, CancellationToken cancellationToken)
    {
        return await _context.GetCarAsync(request.id);
    }
}