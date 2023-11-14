using Domain.Entities;
using MediatR;

namespace Application.Query;

public class GetAllCarsQuery : IRequest<List<Car>>
{
    
}