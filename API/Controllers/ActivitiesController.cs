using System;
using System.Diagnostics;
using Application.Activities.Commands;
using Application.Activities.Queries;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers;
//BaseAPIController //in BaseAPIController we have added the routing so that we don`t need to add in every controller just have to extend with BaseAPIController
// public class ActivitiesController(AppDbContext context, IMediator mediator) : BaseAPIController
// {
// private readonly AppDbContext context;

// public ActivitiesController(AppDbContext context)
// {
//   this.context = context;
// }
public class ActivitiesController : BaseAPIController
{
  [HttpGet]
  public async Task<ActionResult<List<Domain.Activity>>> GetActivities()
  {
    // return await context.Activities.ToListAsync();
    return await Mediator.Send(new GetActivitiesListQuery.Query());
  }

  [HttpGet("{id}")]
  public async Task<ActionResult<Domain.Activity>> GetActivityDetail(string id)
  {
    // var Activities_ = await context.Activities.FindAsync(id);
    // if (Activities_ == null) return NotFound();
    // return Activities_;
    return await Mediator.Send(new GetActivityDetailsByIdQuery.Query { Id = id });
  }

  [HttpPost]
  public async Task<ActionResult<string>> CreateActivity(Domain.Activity activity)
  {
    return await Mediator.Send(new CreateActivityCommand.ActivityCommand { activity = activity });
  }

  [HttpPut]
  public async Task<ActionResult<string>> EditActivity(Domain.Activity activity)
  {
    await Mediator.Send(new EditActivities.EditCommand { Activity_ = activity });
    return NoContent();
  }
  [HttpDelete("{Id}")]
  public async Task<ActionResult> DeleteActivity(string Id)
  {
    await Mediator.Send(new DeleteActivityCommand.DeleteCommand { Id = Id });
    return NoContent();
  }
}
