using System;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities.Commands;

public class CreateActivityCommand
{
  public class ActivityCommand : IRequest<string>
  {
    public required Activity activity { get; set; }
  }

  public class Handler(AppDbContext context) : IRequestHandler<ActivityCommand, string>
  {
    public async Task<string> Handle(ActivityCommand request, CancellationToken cancellationToken)
    {
      context.Activities.Add(request.activity);
      await context.SaveChangesAsync(cancellationToken);
      return request.activity.Id;
    }
  }
}
