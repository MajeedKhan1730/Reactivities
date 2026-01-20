using System;
using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers;
//BaseAPIController //in BaseAPIController we have added the routing so that we don`t need to add in every controller just have to extend with BaseAPIController
public class ActivitiesController(AppDbContext context) : BaseAPIController
{
  // private readonly AppDbContext context;

  // public ActivitiesController(AppDbContext context)
  // {
  //   this.context = context;
  // }
  [HttpGet]
  public async Task<ActionResult<List<Domain.Activity>>> GetActivities()
  {
    return await context.Activities.ToListAsync();
  }

  [HttpGet("{id}")]
  public async Task<ActionResult<Domain.Activity>> GetActivityDetail(string id)
  {
    var Activities_ = await context.Activities.FindAsync(id);
    if (Activities_ == null) return NotFound();
    return Activities_;
  }
}
