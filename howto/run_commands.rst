================
Running commands
================

The normal use of NSClient++ is to request information via queries (or check commands) for example check_cpu.
Sometimes you want to do other things like run a command or script without involvement of a check command or based on some other stimuli.


Adding custom Scripts
=====================

Adding script are detailed in the CheckExternalScripts module documentation as well as the howto. So here I will only give one example and point out some key points.

To run scripts we need to enable the module::

   [/modules]
   CheckExternalScripts = enabled

Then we also need to add a script (We will use the long format here for simplicity)::

  [/settings/external scripts/scripts/my_ok1]
  command = scripts\check_ok.bat

Lastly we need to decide how the script should run. To do that there are a set of options we can set.

# session
  Should the command be attached to a users session
# display
  Should the command be visible to users or not?
# timeout
  How long is the command allowed to run?
# capture output
  Should we monitor and kill the program or not?
# user/password
  Does the script require to run as a special user?

Scheduling commands
===================

Next up we need to run the script the simplest way is to use the scheduler. Normally the scheduler runs a command very x minutes.
In some cases we need greater control of when the command should run in which case we can set a specific schedule instead.
In either case we need to start with enabling the scheduler::
  [/modules]
  Scheduler = enabled

Then we need to add the schedule::
  TODO

Lastly we need to direct the output somewhere-
Normally when we use the scheduler we use it for passive monitoring i.e. when we run a check at a given interval and submit the result back.
This means we normally send the result to the NSCA client but here we need to redirect the result elsewhere.
A few options comes to mind.

# noop
  Send the result nowhere
# file
  Use the SimpleFileWriter to write the result to a file somewhere.
# script
  We could create a script which intercepts the result and do whatever we want with it.

Noop
----

If we do not care about the result the simplest option is to throw it away by setting the target to noop::
  TODO

file
----

TODO

Full Example
============

Here is a full example where we every Friday at  13:00 will execute a script and send the result to a file::
  [/modules]
  Scheduler = enabled
  CheckExternalScripts = enabled
  SimpleFileWriter = enabled
