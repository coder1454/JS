const clientComms=Vars.netServer.clientCommands; 
const runner= (method) => new Packages.arc.util.CommandHandler.CommandRunner({ accept: method});
clientComms.register("js","<code...>","run js code",runner((args,p)=>{try{p.sendMessage("[green]"+eval(args[0]))}catch(e){p.sendMessage("[red]"+e)}}))
