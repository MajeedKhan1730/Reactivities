using System;
using MediatR;
using Persistence;

namespace Application.Activities.Commands;

public class DeleteActivityCommand
{
  public class DeleteCommand : IRequest
  {
    public required string Id { get; set; }
  }
  public class Handler(AppDbContext context) : IRequestHandler<DeleteCommand>
  {
    public async Task Handle(DeleteCommand request, CancellationToken cancellationToken)
    {
      var ExistingActivity = await context.Activities.FindAsync([request.Id], cancellationToken) ?? throw new Exception("Cannot Find the activity");
      context.Remove(ExistingActivity);
      await context.SaveChangesAsync(cancellationToken);
    }
  }
}
