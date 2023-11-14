using Microsoft.Extensions.DependencyInjection;

namespace Application;

public static class Extensions
{
    public static IServiceCollection AddApplication(this IServiceCollection services)
    {
        var asseblies = typeof(Extensions).Assembly;
        services.AddMediatR(conf =>
        {
            conf.RegisterServicesFromAssembly(asseblies);
        });
        return services;
    }
}