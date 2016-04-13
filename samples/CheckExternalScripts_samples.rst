Adding a simple script
----------------------

Adding a script we ca use the short hand format::

   [/settings/external scripts/scripts]
   my_ok1 = scripts\check_ok.bat
   my_ok2 = scripts\check_ok.bat

Or the long format::

   [/settings/external scripts/scripts/my_ok1]
   command = scripts\check_ok.bat
   
   [/settings/external scripts/scripts/my_ok2]
   command = scripts\check_ok.bat

There is no difference between the two formats. Both will add two new commands called my_ok1 and my_ok2 which in turn will execute the scripts\check_ok.bat script. Thus for most cases the short hand is preferd (and most commonly used). The reason for the long format is when you need to customize your command. There are a number of options which can be set to customze the command: for instance which user should run the command. These cannot be set using the short format.

Using arguments
---------------

There are two ways to use arguments.

# Hardcoded into the command
# Allowing argument-pass through

THe first option (hard-coding them) is obviously the more secure option as a third party cannot provide his or her own arguments. But it adds to the maintanace burden as whenever you want to change an option you need to update the NSCient++ config (something which can be costly if you have many servers).

To allow argument passthrough you need to set::

   [/settings/external scripts]
   allow arguments = true

Running a command as a user
---------------------------

Runninga command as a given user (to use elevated privelages for instance) you need to use the long format::

   [/settings/external scripts/scripts/check_as_user]
   command = scripts\check_ok.bat
   user = Administrator
   password = 1qflkasdhf7ejd8/kjhskjhk(/)"#

You can also specify a session and to show the output if yu want to have the program visible::

   [/settings/external scripts/scripts/annoy_users]
   command = notepad.exe
   session = 1
   display = true

Programs "running forever"
--------------------------

Another usecase of external scripts is to have event handlers which starts programs. This is a bit tricky because if a child program is running when NSClient++ exits it will be terminated thus your "fix" will depend on NSClient++ never restarting.
To work around this you need to start the program without the control of NSClient++ (fork). To do this you need to set capture output to false like so::

   [/settings/external scripts/scripts/fix_problem]
   command = notepad.exe
   capture output = false

The draw back to this is that the sacript cannot return any output neither message or status code.
A word of warning using "start" or other similar measure to try to star´t a program will cause unexpected issue with NSClient++ due to how handles are inherited in Windows. This will end up blocking the port and forcing a restart of the server.

