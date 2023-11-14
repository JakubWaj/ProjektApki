using Application.Command;
using Application.Query;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;
[ApiController]
[Route("api/[controller]")]
public class CarController :ControllerBase
{
    private readonly IMediator _mediator;

    public CarController(IMediator mediator)
    {
        _mediator = mediator;
    }
    
    [HttpGet]
    public async Task<IActionResult> GetAllCars()
    {
        var result = await _mediator.Send(new GetAllCarsQuery());
        return Ok(result);
    }
    
    [HttpGet("{id}")]
    public async Task<IActionResult> GetCar(int id)
    {
        var result = await _mediator.Send(new GetCarQuery{id = id});
        return Ok(result);
    }

    [HttpPost]
    public async Task<IActionResult> AddCarAsync(AddCarCommand command)
    {
        await _mediator.Send(command);
        return Ok();
    }
    
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateCarAsync(int id,UpdateCarCommand command)
    {
        command.Id = id;
        await _mediator.Send(command);
        return Ok();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteCarAsync(int id)
    {
        await _mediator.Send(new DeleteCarCommand { Id = id });
        return Ok();
    }
}