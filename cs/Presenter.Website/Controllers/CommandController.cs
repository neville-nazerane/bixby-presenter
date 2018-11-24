using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Presenter.Website.Hubs;

namespace Presenter.Website.Controllers
{
    public class CommandController : Controller
    {
        private readonly IHubContext<CommandHub> hubContext;

        public CommandController(IHubContext<CommandHub> hubContext)
        {
            this.hubContext = hubContext;
        }

        public async Task<IActionResult> Do(string command, string value)
        {
            await hubContext.Clients.All.SendAsync("commanded", command, value);
            return Ok("Done!");
        }
    }
    }
