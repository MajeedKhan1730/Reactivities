using System;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities.Queries;

public class GetActivityDetailsByIdQuery
{
  public class Query : IRequest<Activity>
  {
    public required string Id { get; set; }
  }
  public class Handler(AppDbContext context) : IRequestHandler<Query, Activity>
  {
    public async Task<Activity> Handle(Query request, CancellationToken cancellationToken)
    {
      var Activity = await context.Activities.FindAsync([request.Id], cancellationToken) ?? throw new Exception("Activity Not Found");
      return Activity;
    }
  }
}
