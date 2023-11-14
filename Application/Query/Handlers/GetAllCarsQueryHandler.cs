using Domain.Entities;
using Domain.Repository;
using MediatR;

namespace Application.Query.Handlers;

public class GetAllCarsQueryHandler : IRequestHandler<GetAllCarsQuery,List<Car>>
{
    private readonly ICarRepository _context;

    public GetAllCarsQueryHandler(ICarRepository context)
    {
        _context = context;
    }
    
    public async Task<List<Car>> Handle(GetAllCarsQuery request, CancellationToken cancellationToken)
    {
       return await _context.GetAllCarsAsync();
    }
}