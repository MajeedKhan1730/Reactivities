using Application.Activities.Queries;
using Application.Core;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Persistence;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddDbContext<AppDbContext>(opt =>
{
  opt.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
});

// Add CORS policy with a name
builder.Services.AddCors(options =>
{
  options.AddPolicy("ReactivitiesPolicy", policy =>
  {
    policy.WithOrigins("http://localhost:3000", "https://localhost:3000")
            .AllowAnyHeader()
            .AllowAnyMethod()
            .AllowCredentials();
  });
});
builder.Services.AddMediatR(x => x.RegisterServicesFromAssemblyContaining<GetActivitiesListQuery.Handler>());
builder.Services.AddAutoMapper(typeof(MappingProfile).Assembly);
var app = builder.Build();

// Configure the HTTP request pipeline.
// CRITICAL: The order of middleware matters!

// 1. UseRouting first
app.UseRouting();

// 2. UseCors BEFORE UseAuthorization and MapControllers
app.UseCors("ReactivitiesPolicy");

// 3. Add these if not present (they might be needed)
app.UseHttpsRedirection(); // Add this line

// 4. Map controllers
app.MapControllers();

// 5. Database migration code (keep this as is)
using var scope = app.Services.CreateScope();
var services = scope.ServiceProvider;
try
{
  var context = services.GetRequiredService<AppDbContext>();
  await context.Database.MigrateAsync();
  await DbInitializer.SeedData(context);
}
catch (System.Exception ex)
{
  var logger = services.GetRequiredService<ILogger<Program>>();
  logger.LogError(ex, "An Error Occured During Migration.");
}

app.Run();