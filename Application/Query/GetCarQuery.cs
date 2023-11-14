using Domain.Entities;
using MediatR;

namespace Application.Query;

public class GetCarQuery : IRequest<Car>
{
    public int id { get; set; }
}