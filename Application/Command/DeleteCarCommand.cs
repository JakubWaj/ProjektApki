using MediatR;

namespace Application.Command;

public class DeleteCarCommand : IRequest
{
    public int Id { get; set; }
}