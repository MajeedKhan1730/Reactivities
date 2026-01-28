using System;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities.Commands;

public class EditActivities
{
  public class EditCommand : IRequest
  {
    public required Activity Activity_ { get; set; }
  }
  public class Handler(AppDbContext context) : IRequestHandler<EditCommand>
  {
    public async Task Handle(EditCommand request, CancellationToken cancellationToken)
    {
      var ExistingActivity = await context.Activities.FindAsync([request.Activity_.Id], cancellationToken) ?? throw new Exception("Cannot Find the activity");

      ExistingActivity.Title = request.Activity_.Title;
      await context.SaveChangesAsync();
    }
  }
}
