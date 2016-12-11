# Adding a simple script #

<dl>
  <dt>Adding a script we ca use the short hand format :  : </dt>
  <dd>
    <p>[/settings/external scripts/scripts]</p>
    <p>my_ok1 = scripts\check_ok.bat</p>
    <p>my_ok2 = scripts\check_ok.bat</p>
  </dd>
</dl>
<dl>
  <dt>Or the long format :  : </dt>
  <dd>
    <p>[/settings/external scripts/scripts/my_ok1]</p>
    <p>command = scripts\check_ok.bat</p>
    <p>[/settings/external scripts/scripts/my_ok2]</p>
    <p>command = scripts\check_ok.bat</p>
  </dd>
</dl>
There is no difference between the two formats. Both will add two new commands called my_ok1 and my_ok2 which in turn will execute the scripts\check_ok.bat script. Thus for most cases the short hand is preferd (and most commonly used). The reason for the long format is when you need to customize your command. There are a number of options which can be set to customze the command: for instance which user should run the command. These cannot be set using the short format.

# Using arguments #

There are two ways to use arguments.

# Hardcoded into the command
# Allowing argument-pass through

The first option (hard-coding them) is obviously the more secure option as a third party cannot provide his or her own arguments.
But it adds to the maintenance burden as whenever you want to change an option you need to update the NSClient++ configuration (something which can be costly if you have many servers).

<dl>
  <dt>To allow argument pass-through you need to set :  : </dt>
  <dd>
    <p>[/settings/external scripts]</p>
    <p>allow arguments = true</p>
  </dd>
</dl>
Please note when it comes to arguments they can (and often need to) be configured in two place.
Once for the NRPE Server and once for CheckExternalScripts.

# Running a command as a user #

<dl>
  <dt>Running a command as a given user (to use elevated privileges for instance) you need to use the long format :  : </dt>
  <dd>
    <p>[/settings/external scripts/scripts/check_as_user]</p>
    <p>command = scripts\check_ok.bat</p>
    <p>user = Administrator</p>
    <p>password = 1qflkasdhf7ejd8/kjhskjhk(/)"#</p>
  </dd>
</dl>
<dl>
  <dt>You can also specify a session and to show the output if you want to have the program visible :  : </dt>
  <dd>
    <p>[/settings/external scripts/scripts/annoy_users]</p>
    <p>command = notepad.exe</p>
    <p>session = 1</p>
    <p>display = true</p>
  </dd>
</dl>
# Programs "running forever" #

Another use case of external scripts is to have event handlers which starts programs.
This is trickier then it sounds because all commands have a timeout and once that is reach they are killed.
NSClient++ exits it also terminates all running script thus your "fix" will not be very long.
<dl>
  <dt>To work around this you need to start the program without the control of NSClient++ (fork). To do this you need to set capture output to false like so :  : </dt>
  <dd>
    <p>[/settings/external scripts/scripts/fix_problem]</p>
    <p>command = notepad.exe</p>
    <p>capture output = false</p>
  </dd>
</dl>
The draw back to this is that the script cannot return any output neither message nor status code.

1. word of warning using "start" or other similar measure to try to start a program in a regular script will cause unexpected issue with NSClient++ due to how handles are inherited in Windows.
   This will end up blocking the port and forcing a restart of the server. Thus capture output = false method is preferred.

